const crypto =require('crypto')
const secrateky=crypto.randomBytes(32).toString('hex')
console.log("secratekey",secrateky)