var express = require("express");
const jwt = require("jsonwebtoken");
const generateToken = require('../utils.js');
const {
  familyMember,
  parent,
  child,
} = require("../models/familyMemberModel.js");
const bcrypt = require("bcrypt");

var router = express.Router();

// const verifyJWT = (req, res, next) => {
//   console.log("token in verifyJWT", req.headers["postman-token"]);
//   const token = req.headers["postman-token"];
//   if (!token) {
//     res.send("You're not autorised");
//   } else {
//     jwt.verify(token, "jwtSecret", (err, decoded) => {
//       console.log("error is", err, "decoded is", decoded);
//       if (err) {
//         res.json({ auth: false, message: "You failed to authenticate" });
//       } else {
//         console.log("decoded", decoded);
//         res.user = decoded;
//         next();
//       }
//     });
//   }
// };
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


router.post("/register", async (req, res) => {
  //check the db to see if you user already exists
  //if the user doesn't exist, create it and store it in the the db
  const oldUser = await familyMember.findOne({
    email: req.body.email,
  });
  if (oldUser) {
    res.send("You are already registered");
  }
  const user = new familyMember({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isParent: req.body.isParent,
  });
  const createdUser = await user.save();

  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isParent: createdUser.isParent,
    token: generateToken(createdUser),
  });
});






router.post("/login", async (req, res, error) => {
  //check the db to see if the user exists
  //if he exists, check the correctness of his pwd
  //if the password is correct assign an authenctication token to him/her
  const user = await familyMember.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isParent: user.isParent,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
});



router.put('/:id',async(req, res) => {
    const user = await familyMember.findById(req.params.id);
    if (user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.dateOfBirth = req.body.dateOfBirth;
      user.email = req.body.email;
      user.password = req.body.password;

      const updateduser = await user.save();
      res.send({ message: 'user Updated', user: updateduser });
    } else {
      res.status(404).send({ message: 'user Not Found' });
    }
  }
);

























// router.post("/update-my-profile", verifyJWT, (req, res) => {
//   console.log("token", verifyJWT, "body", req.body);
//   res.send("updated");
//   /*   const { firstName, lastName, dateOfBirth, email, isParent } = req.body;

//     const updatedDocument = await familyMember.findOneAndUpdate(
//       { email: email },
//       { firstName: "Jean-Luc Picard", isParent: isParent },
//       { new: true }
//     );
//     return res.status(200).send(updatedDocument);*/
// });

module.exports = router;
