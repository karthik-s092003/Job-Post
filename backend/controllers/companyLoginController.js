const Company = require("../modules/company")
const jwt = require("jsonwebtoken")

const login = async (req,res)=>{
    const {Email,Password} = req.body
    if(!Email || !Password){
        return res.status(400).json({msg:"The company Email Id and Password must be provoided"})
    }
    try {
        const company = await Company.find({Email:Email})
        if(company.length>0){
            if(Password === company[0].Password){
                const Cmp = company[0].companyName;
                const token = jwt.sign({ Email, Cmp }, process.env.JWT_SECRET, {
                    expiresIn: "30d",
                  });
                res.status(200).json({msg:"successfull",token:token})
            }
            else{
                res.status(400).json({msg:"Incorrect Password"})
            }
        }
        else{
            res.status(400).json({msg:"company not found"})
        }
    } catch (error) {
        res.status(404).json({msg:err})
    }
}

const register = async (req,res)=>{
    const {companyName,Email,Password,confirmPassword} = req.body
    if(Password !== confirmPassword){
        return res.status(400).json({msg:"incorrect password"})
    }
    const token = jwt.sign({ Email, Password }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
    try{
        const company = await Company.create(req.body)
        res.json({company,token:token,msg:"successfull"})
    }
    catch(err){
        const test = await Company.find({
            $or: [
              { companyName: companyName },
              { Email: Email }
            ]
          });
          
        if(test.length>0){
            return res.status(400).json({msg:"Company already registered"})
        }
        res.json({msg:err})
    }
}

const decodeToken = async (req,res)=>{
    try {
        const {Cmp} = req.user;
        res.status(200).json({cpm:Cmp,email:req.user.Email})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}

module.exports = {login,register,decodeToken}