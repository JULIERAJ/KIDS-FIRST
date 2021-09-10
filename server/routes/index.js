const express = require("express");
const router = express.Router();
const mongo = require("mongodb");
const familyMember = require("../models/familyMemberModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const { familyMember, familySpace, memberSpace } = db;
/* GET home page. */
/*router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

/*  familyMember.findOne({ email: email }, function (err, obj) {
    console.log(obj, err);
  });


  // res.send(familyMember.findOne({ email: myEmail }));
});


  });*/

module.exports = router;
