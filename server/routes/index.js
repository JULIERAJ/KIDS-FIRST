const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { familyMember, familySpace, memberSpace } = db;
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
router.post("/login", (req, res, error) => {
  const { email, password } = req.body;
  console.log(req);
  console.log(
    "tfarrej",
    familyMember.findOne({
      email: email,
    })
  );

  /*getUserByEmail(email, db)
  .then(user => {
    //console.log("user in router login",user)
    if (!user) {
      res.send({auth:false,message:"User doesn't exist"})
    } else if (!bcrypt.compare(password, user.password)) {
      res.send({auth:false,message:"Password is incorrect"})
    } else {
      const token = jwt.sign({user},"jwtSecret", {
      expiresIn : 360
      })
      res.json({auth:true, token:token, user:user})
    }
    
  })
  .catch(e => {
    if (e) {
      res.status(401).json({ error: e.message });
    }
  });*/
});

module.exports = router;
