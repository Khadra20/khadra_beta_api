const bycrypt =require('bcrypt')
const usermodel=require('../Schema/userschema');

  const uservalidation =require('../validation/uservalidation')
// xogta userka in la helo
const getuser=async(req,res)=>{
    try {
        const updateget=await usermodel.find();
        res.json(updateget)
    } catch (error) {
        res.json(error)
    }
}
//    qeebta signupka userka
const signup=async(req,res)=>{
  const {error}=uservalidation(req.body)
  if(error) return res.status(405).send(error.message)
  const postinfo=new usermodel(req.body)
postinfo.password=await bycrypt.hash(postinfo.password,10)
// userka hadu hore ujire
const allusers=await usermodel.find({email:req.body.email})
if(allusers.length>0)return res.status(409).send({status:false,message:"all ready exist"})
await postinfo.save()
res.status(201).send({
    status:true,
    message:"succsesfully inserted",
    date:postinfo
});
}
const deluser=async(req,res)=>{
    const id = req.params.id
    const deleteuser = await usermodel.findByIdAndDelete(req.params.id)
     res.json("Deleted")
}
exports.getuser=getuser;
exports.signup=signup; 
exports.deleteuser=deluser
