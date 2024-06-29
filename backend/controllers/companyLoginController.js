const Company = require("../modules/company")
const jwt = require("jsonwebtoken")
const Verification = require("../modules/verification");
const nodemailer = require('nodemailer');

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
                const cmpId = company[0]._id;
                const token = jwt.sign({ Email, Cmp, cmpId }, process.env.JWT_SECRET, {
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
    const {companyName,Email,Password,confirmPassword,verificationCode} = req.body
    if (!companyName || !Email || !Password || !verificationCode || !confirmPassword) {
      return res.status(200).json({ msg: "Missing required fields" });
    }
    try{
        const verification = await Verification.findOne({
          verificationCode:verificationCode,
          email:Email,
        });
        if (!verification) {
          return res.status(200).json({ message: "Invalid verification code" });
        }
        if(Password !== confirmPassword){
            return res.status(200).json({msg:"incorrect password"})
        }
        const company = await Company.create(req.body)
        const token = jwt.sign({ Email, Cmp:companyName,cmpId:company._id }, process.env.JWT_SECRET, {
           expiresIn: "30d",
        });
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
        const {Cmp , Email, cmpId} = req.user;
        res.status(200).json({cpm:Cmp,email:Email,cmpId:cmpId})
    } catch (error) {
        res.status(400).json({msg:"something went wrong"})
    }
}


const emailVerification = async (req, res) => {
    const { email } = req.body;
    if(!email){
      return res.status(200).json({message:"Please enter your email id"})
    }
    try {
      const existingUser1 = await Company.findOne({ Email:email });
      if (existingUser1) {
        return res.status(200).json({ message: "Email already in use" });
      }
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      const verificationCode = randomNumber.toString();
      const existingVerification = await Verification.findOne({ email });
      if (
        existingVerification &&
        !existingVerification.used &&
        !hasExpired(existingVerification.expiresAt)
      ) {
        // Reuse existing code if valid (optional)
        console.log("Reusing existing verification code for", email);
        await sendVerificationCodeEmail(
          email,
          existingVerification.verificationCode
        );
        return res
          .status(200)
          .json({ message: "Verification code sent successfully" });
      }
  
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiration
  
      const newVerification = new Verification({
        verificationCode,
        email,
        expiresAt,
      });
  
      await newVerification.save();
      await sendVerificationCodeEmail(email, verificationCode);
  
      res.status(200).json({ message: "Verification code sent successfully" });
    } catch (err) {
      res.status(400).json({ message: "failed to send verification code",err });
    }
  };
  
  function hasExpired(expiresAt) {
    return expiresAt < Date.now();
  }
  const sendVerificationCodeEmail = async (email, verificationCode) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SECRET_EMAIL, // Your Gmail address
        pass: process.env.SECRET_PASS, // Your Gmail password or an app-specific password
      },
    });
  
    const mailSuperAdmin = {
      from: "1rn21cs074.karthik.s@gmail.com",
      to: email,
      subject: "Verification Code for SignUp",
      html: `
     <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: grey;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Make body fill entire viewport height */
      }
      .container {
        max-width: 600px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: left; /* Align content within container to left */
      }
      h1, h4, p {
        margin: 0;
        padding: 0;
      }
      h1 {
        color: #333333;
        font-size: 36px;
        margin-bottom: 10px;
      }
      h4 {
        color: #4CAF50;
        font-size: 24px;
        margin-bottom: 20px;
      }
      p {
        color: #555555;
        font-size: 18px;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .code {
        display: flex;
        justify-content: center;
      }
      .digit {
        background-color: #4CAF50;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 24px;
        margin: 0 5px;
        width: 10px;
        text-align: center;
      }
      .footer {
        font-style: italic;
        color: #888888;
        margin-top: 20px;
      }
      .logo {
        max-width: 100px;
        margin-bottom: 20px;
      }
      .timer {
        font-size: 20px;
        color: #4CAF50;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <img src="https://firebasestorage.googleapis.com/v0/b/bazzarbee-192fe.appspot.com/o/HomePage%2Flogo.png?alt=media&token=7795117b-a6df-4f43-bfc2-e14859a43fca" alt="Company Logo" class="logo">
        <h1>Hello,</h1>
        <p>To approve the request, please use the verification code below:</p>
        <div class="code">
          <span class="digit">${String(verificationCode).charAt(0)}</span>
          <span class="digit">${String(verificationCode).charAt(1)}</span>
          <span class="digit">${String(verificationCode).charAt(2)}</span>
          <span class="digit">${String(verificationCode).charAt(3)}</span>
          <span class="digit">${String(verificationCode).charAt(4)}</span>
          <span class="digit">${String(verificationCode).charAt(5)}</span>
        </div>
        <p class="footer">For verification purposes only for the BazzarBee <br> Thank You</p>
      </div>
    </div>
  </body>
  </html>
  
    `,
    };
  
    try {
      await transporter.sendMail(mailSuperAdmin);
      console.log(`Verification code sent`);
    } catch (error) {
      console.error("Email sending error:", error);
      throw new Error("Failed to send verification code to email.");
    }
  };

module.exports = {login,register,decodeToken, emailVerification}