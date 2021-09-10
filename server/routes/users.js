var express = require("express");
const jwt = require("jsonwebtoken");
const familyMember = require("../models/familyMemberModel.js");
const bcrypt = require("bcrypt");

var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async (req, res) => {
  const user = new familyMember({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isParent: req.body.isParent,
  });
  console.log("user", user);
  const createdUser = await user.save();
  console.log("created user", createdUser);
  res.send({
    _id: createdUser._id,
    firstName: createdUser.firstName,
    lastName: createdUser.lastName,
    email: createdUser.email,
    dateOfBirth: createdUser.dateOfBirth,
    isParent: createdUser.isParent,
  });
});
router.post("/login", async (req, res, error) => {
  const { email, password } = req.body;
  console.log("hne", email, password);

  const user = await familyMember.findOne({
    email: email,
  });

  const identicalPwd = await bcrypt.compare(password, user.password);

  if (!user) {
    res.send({ auth: false, message: "User doesn't exist" });
  } else {
    if (!identicalPwd) {
      res.send({ auth: false, message: "Password is incorrect" });
    } else {
      res.send(user);
      const token = jwt.sign({ user }, "jwtSecret", {
        expiresIn: 360,
      });
    }
  }
});

module.exports = router;
