const express = require("express");
const Admin = require("../models/Admin");
const adminRouter = express.Router();

adminRouter.post("/log", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await Admin.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email exist" });
    }
    const userCreated = await Admin.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      message: "registration successful",
      // token:await userCreated.generateToken(),
      // userId:userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(err);
  }
});

// adminRouter.post('/r', async (req, res) => {
//     const {email,password}=req.body;
//     console.log(req.body);

//     const userExist = await Admin.findOne({email:email});
//     console.log("finde");
//     if(!userExist){
//      return res.status(400).json({msg:"invalid data"});
//     }
//     // const isMatch = await userExist.compare(password,userExist.password);
//     if(userExist){
//      res
//      .status(200).json({
//      message :"login successful",
//     //  token : await userExist.generateToken(),
//     //  userId:userExist._id.toString(),
//     });
//      console.log("ismatch");
//     }else{
//      res.status(400).json({msg:"invalid data"});
//     }
// })

adminRouter.post("/r", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const userExist = await Admin.findOne({ email: email });
  const passwordExist = await Admin.findOne({ password: password });
  console.log("finde");
  if (!userExist) {
    return res.status(400).json({ msg: "invalid data" });
  }
  // const isMatch = await userExist.compare(password,userExist.password);
  if (userExist && passwordExist) {
    res.status(200).json({
      message: "login successful",
      //  token : await userExist.generateToken(),
      //  userId:userExist._id.toString(),
    });
    console.log("ismatch");
  } else {
    res.status(400).json({ msg: "invalid data" });
  }
});

module.exports = adminRouter;
