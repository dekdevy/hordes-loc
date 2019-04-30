import loc from './loc/loc.js'

// First, collect all types of languages present, so we do not have to maintain a list
// This enables us to arbitrarily add translations to strings
// For any new language type detected, a new translated output file is generated
// For any strings that lack translations for a lang type, we can fall back to another language
const findLang = (obj, types)=>{
  // iterates object props recursively
  Object.entries(obj).forEach( ([langType, string]) => {
    if(langType === '$$') return
    // check whether value is object or string
    if(typeof string  === 'object') {
      // if object, iterate recursively
      findLang(string, types)
    } else {
      // if string, add to language set
      if(!types.has(langType)) {
        types.set(langType, {})
      }
    }
  })
  return types
}

// run regex on every file and count up the infractions
let infractions = 0
const validate = (data, type) => {
  // check for < > and &
  const regex = /[<>&]/g
  // perform the regex match
  const matches = data.match(regex)

  // if there are no matches then the strings are clean and we can continue
  if (!matches) return

  // if disallowed chars found explain where and what char it is also increase infraction count
  console.log('The following disallowed character occurred in ' + type + '.json: ' + matches)
  infractions++
}

// iterate languages and load into memory
console.log('Detecting loc types...')
const languages = findLang(loc, new Map())
console.log(`  Found ${languages.size} languages`)

const fs = require('fs')
const path = process.argv[2] || './dist/loc/'

for (const lang of languages) {
  // the language type is the first element of that array
  const type = lang[0]

  // read files synchronously (I/O doesnt matter so its okay) and put the data in data
  const data = fs.readFileSync(path + type + '.json', 'utf8')

  // run validation check
  validate(data, type)
}

// present final results
if (infractions === 0) console.log('Validation successful. No errors found.')
else console.log('Validation unsuccessful. ' + infractions + ' errors were found.')