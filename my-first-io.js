const fs=require('fs')
const str=fs.readFileSync(process.argv[2])
console.log(str.toString().split('\n').length-1)
