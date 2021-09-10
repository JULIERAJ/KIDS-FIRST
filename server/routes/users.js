var express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const {
  familyMember,
  parent,
  child,
} = require("../models/familyMemberModel.js");
const bcrypt = require("bcrypt");

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

const verifyJWT = (req, res, next) => {
  console.log("token in verifyJWT", req.headers);
  const token = req.headers("x-access-token");
  if (!token) {
    res.send("You're not autorised");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate" });
      } else {
        console.log("decoded", decoded);
        res.user = decoded;
        next();
      }
    });
  }
};
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/api/users/register", async (req, res) => {
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
router.post("/api/users/login", async (req, res, error) => {
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
router.post("/api/users/update-my-profile", verifyJWT, (req, res) => {
  console.log("token", verifyJWT, "body", req.body);
  res.send("updated");
  /*   const { firstName, lastName, dateOfBirth, email, isParent } = req.body;

    const updatedDocument = await familyMember.findOneAndUpdate(
      { email: email },
      { firstName: "Jean-Luc Picard", isParent: isParent },
      { new: true }
    );
    return res.status(200).send(updatedDocument);*/
});

module.exports = router;
