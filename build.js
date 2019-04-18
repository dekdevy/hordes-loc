const code = require('locale-code')
import loc from './loc/loc.js'

// First, collect all types of languages present, so we do not have to maintain a list
// This enables us to arbitrarily add translations to strings
// For any new language type detected, a new translated output file is generated
// For any strings that lack translations for a lang type, we can fall back to another language
const findLang = (obj, types)=>{
  // iterates object props recursively
  Object.entries(obj).forEach( prop => {
    const [langType, string] = prop
    // check whether value is object or string
    if(typeof string  === 'object') {
      // if object, iterate recursively
      findLang(string, types)
    } else {
      // if string, cb
      if(!types.has(langType)) {
        types.set(langType, {})
      }
    }
  })
  return types
}
console.log('Detecting loc types...')
const languages = findLang(loc, new Map())
console.log(`  Found languages ${[...languages.keys()]}`)

// next, compile each language type to its own file
// we search for strings present for the lang type, if not found, we fall back to english
// if not even english is present (should never be the case), we fall back to whatever is present
const compile = (obj, lang, currentType, metrics)=>{
  // iterate object props recursively
  Object.entries(obj).forEach( prop => {
    const [key, value] = prop
    // check whether value is object or string
    if(typeof value  === 'object') {
      // if object, check whether object has strings as children
      if(Object.entries(value).some(v => typeof v[1] === 'string')) {
        // check whether a string of our language is present
        if(value[currentType] !== undefined) {
        // i guess they never miss huh
          metrics.hit++
          lang[key] = value[currentType]
        } else {
        // if we have no translation, check whether english is present
        // otherwise use whatever
          if(process.argv.includes('-v')) {
            console.warn(`${code.getLanguageName(currentType)} translation not found in ${value.en} → ${key}.`)
          }
          metrics.miss++
          lang[key] = value['en'] || value
        }
      } else {
        // no strings as children, meaning we should iterate deeper
        compile(value, lang[key] = (value.length ? [] : {}),
          currentType, metrics)
      }
    }
  })
}

// iterate languages and compile
console.log('Compiling...')
languages.forEach((lang, type) => {
  const metrics = {hit: 0, miss: 0}
  compile(loc, lang, type, metrics)

  const amount = `${metrics.hit}/${metrics.hit+metrics.miss}`
  const percentage = ((metrics.hit/(metrics.hit+metrics.miss))*100) >> 0
  console.log(`  ${type} -> ${amount} (${percentage}%)`)
})

// store as files
console.log('Exporting...')
const fs = require('fs')
const path = process.argv[2] || './dist/loc/'
if (!fs.existsSync(path)) {
  fs.mkdirSync(path)
}
languages.forEach(async (lang, type)=>{
  await fs.writeFile(path+`${type}.json`, JSON.stringify(lang), (e)=>{
    if(e) throw e
  })
})
console.log(`  ${languages.size} languages exported`)
