// run regex on every file and count up the infractions
let infractions = 0
const validate = (data, type) => {

  // check for < > and &
  const regex = /(?!<\/*kbd)[<&]/g

  // perform the regex match
  const matches = data.match(regex)

  // if there are no matches then the strings are clean and we can continue
  if (!matches) return

  // if disallowed chars found explain where and what char it is also increase infraction count
  console.error(`  The following disallowed character occurred in ${type}: ${matches}`)
  infractions++
}

// find all files
const fs = require('fs')
const path = process.argv[2] || './dist/loc/'
fs.readdir(path, (err, files) => {

  // throw if something went bad
  if(err) throw err

  // iterate files
  files.forEach(file => {
    const data = fs.readFileSync(path + file, 'utf8')
    validate(data, file)
  })

  // present final results
  if(infractions) {
    console.error(`Validation unsuccessful. ${infractions} errors were found.`)
    process.exit(1)
  } else {
    console.log('Validation successful. No errors found.')
    process.exit(0)
  }

})

