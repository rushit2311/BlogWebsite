const router=require("express").Router();
const User=require("../models/User");
const bycrpt=require("bcrypt");

//Register
router.post("/register",async(req,res)=>{
    try{

        const salt=await bycrpt.genSalt(10);
        const hashedPass=await bycrpt.hash(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        })

        const user=await newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) {
        return res.status(400).json("Wrong credentials!");
      }
  
      const validated = await bycrpt.compare(req.body.password, user.password);
  
      if (!validated) {
        return res.status(400).json("Wrong credentials!");
      }
  
      const {password,...others}=user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });  
module.exports=router