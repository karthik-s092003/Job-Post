const Emp = require("../modules/emploee")
const jwt = require("jsonwebtoken")

const login = async (req,res)=>{
    const {Email,Password} = req.body
    if(!Email || !Password){
        return res.status(400).json({msg:"The company Email Id and Password must be provoided"})
    }
    try {
        const emp = await Emp.find({Email:Email})
        
        if(emp.length>0){
            if(Password === emp[0].Password){
                const Name = emp[0].Name
                const empId = emp[0]._id
                const token = jwt.sign({ Email, Name,empId }, process.env.JWT_SECRET, {
                    expiresIn: "30d",
                  });
                res.status(200).json({msg:"successfull",token:token})
            }
            else{
                res.status(404).json({msg:"Incorrect Password"})
            }
        }
        else{
            res.json({msg:"Applicant not found"})
        }
    } catch (error) {
        res.json({msg:err})
    }
}

const register = async (req,res)=>{
    const {Name,Email,Password,confirmPassword} = req.body
    if(!Name || !Email || !Password||!confirmPassword){
        return res.status(400).json({msg:"Name,Email Id and Password must be provoided"})
    }
    if(Password !== confirmPassword){
        return res.status(400).json({msg:"incorrect password"})
    }
    try{
        const emp = await Emp.create(req.body)
        const empId = emp._id
        const token = jwt.sign({ Email, Name, empId }, process.env.JWT_SECRET, {
            expiresIn: "30d",
          });
        res.json({emp,token:token,msg:"successfull"})
    }
    catch(err){
        const test = await Emp.find({
            $or: [
              { Name: Name },
              { Email: Email }
            ]
          });
          
        if(test.length>0){
            return res.status(400).json({msg:"Applicant already registered"})
        }
        res.json({msg:err})
    }
}

module.exports = {login,register}