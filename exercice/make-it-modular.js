var mymodule = require('./mymodule.js')
var file = process.argv[2]
var filterStr = process.argv[3]

mymodule(file, filterStr, function (err, list) {
  if (err) {
    return console.log(err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})