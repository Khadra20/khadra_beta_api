const { jwt } = require("jsonwebtoken")
const usermodel = require("../Schema/userschema")
const outherticatteRoute=()=>{
    return (req,res,next)=>{
        const tokenHeader=req.headers['authorization']
        if(!tokenHeader) return res.status(401).send('accses token')
        const token=tokenHeader.split(" ")[1]
    try {
        const tokenverify=jwt.verify(token,process.env.secrate_key)
        const User=usermodel.findById(tokenverify.id)
        if(!User) return res.status(401).send("user not found")
        if(!User.userStatus=='active') return res.status(401).send("user is not active ")
        console.log(User.roll)
    next()
    } catch (error) {
        res.status(401).send(error.message)
    }


    }
}
module.exports=outherticatteRoute