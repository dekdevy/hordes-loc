import loc from './loc/loc.js'

// collect all languages
const findLang = (obj, set)=>{
  // iterates object props recursively
  Object.entries(obj).forEach( ([langType, string]) => {
    if(langType == '$$') return
    // check whether value is object or string
    if(typeof string  === 'object') {
      // if object, iterate recursively
      findLang(string, set)
    } else {
      // if string, add to language set
      set.add(langType)
    }
  })
  return set
}
const languages = findLang(loc, new Set())

// iterate language object recursively, print missing translations
const compile = (obj, currentType, path)=>{
  // iterate object props recursively
  Object.entries(obj).forEach( ([ key, value ]) => {
    if(key == '$$') return
    // check whether value is object or string
    const next = path !== undefined ? `${path} ${key}` : key
    if(typeof value  === 'object') {
      // if object, check whether object has strings as children
      if(Object.entries(value).some(v => typeof v[1] === 'string')) {
        // check whether a string of our language is present
        if(value[currentType] == undefined &&
           value['$$'] === undefined ) {
          // if not, we found a missing translation
          if(!missing.has(next)) missing.set(next, new Set())
          missing.get(next).add(currentType)
        }
      } else {
        // no strings as children, meaning we should iterate deeper
        compile(value, currentType, next)
      }
    }
  })
}

// iterate languages and compile
console.log('Finding missing translations...')
const missing = new Map()
languages.forEach(type => {
  compile(loc, type)
})

// print
missing.forEach((set, name)=>{
  console.log(`  ${name} → [${Array.from(set)}]`)
})

console.log('  done.')