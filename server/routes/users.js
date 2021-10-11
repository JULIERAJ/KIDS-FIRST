const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const Parent = require("../models/parentModel.js");
const CoParent = require("../models/coParentModel.js");
const Child = require("../models/childModel.js");
const Admin = require("../models/adminModel.js");
const bcrypt = require("bcrypt");
const generateToken = require("../utils.js");
const authorize = require("../middleware/authorize");
const is_parent = require("../middleware/parentAuthorize");

router.post(
  "/parent/register",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db
    const oldParent = await Parent.findOne({ email });
    if (oldParent) {
      res.status(401).send({ message: "User already exists" });
    }
    const parent = new Parent({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_parent: req.body.is_parent,
    });
    const createdParent = await parent.save();
    res.send({
      _id: createdParent._id,
      firstName: createdParent.firstName,
      lastName: createdParent.lastName,
      dateOfBirth: createdParent.dateOfBirth,
      email: createdParent.email,
      is_parent: createdParent.is_parent,
      token: generateToken(createdParent),
    });
  })
);

router.post(
  "/coParent/register",
  authorize,
  is_parent,
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db
    const oldCoParent = await CoParent.findOne({ email });
    if (oldCoParent) {
      res.status(401).send({ message: "coParent already exists" });
    }
    const coParent = new CoParent({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_co_parent: req.body.is_co_parent,
      createBy: req.body.createBy,
    });
    const createdCoParent = await coParent.save();
    res.send({
      _id: createdCoParent._id,
      firstName: createdCoParent.firstName,
      lastName: createdCoParent.lastName,
      dateOfBirth: createdCoParent.dateOfBirth,
      email: createdCoParent.email,
      is_co_parent: createdCoParent.is_co_parent,
      createBy: createdCoParent.createBy,
      token: generateToken(createdCoParent),
    });
  })
);

router.post(
  "/child/register",
  authorize,
  is_parent,
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db

    const oldChild = await Child.findOne({ email });
    if (oldChild) {
      res.status(401).send({ message: "Child already exists" });
    }
    const child = new Child({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_child: req.body.is_child,
      createBy: req.body.createBy,
    });
    const createdChild = await child.save();
    res.send({
      _id: createdChild._id,
      firstName: createdChild.firstName,
      lastName: createdChild.lastName,
      dateOfBirth: createdChild.dateOfBirth,
      email: createdChild.email,
      is_child: createdChild.is_child,
      createBy: createdChild.createBy,
      token: generateToken(createdChild),
    });
  })
);

router.post(
  "/admin/register",
  expressAsyncHandler(async (req, res) => {
    const { email } = req.body;

    //check the db to see if you user already exists
    //if the user doesn't exist, create it and store it in the the db

    const oldAdmin = await Admin.findOne({ email });
    if (oldAdmin) {
      res.status(401).send({ message: "Admin already exists" });
    }
    const admin = new Admin({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      is_admin: req.body.is_admin,
    });
    const createdAdmin = await admin.save();
    res.send({
      _id: createdAdmin._id,
      firstName: createdAdmin.firstName,
      lastName: createdAdmin.lastName,
      dateOfBirth: createdAdmin.dateOfBirth,
      email: createdAdmin.email,
      is_admin: createdAdmin.is_admin,
      token: generateToken(createdAdmin),
    });
  })
);

router.post(
  "/admin/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === "" && password === "") {
      res.status(401).send({ message: "Please enter Email and Password" });
    } else {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        res
          .status(401)
          .send({ message: "Admin with this Email does not exist." });
      } else {
        if (admin) {
          if (password === "") {
            res.status(401).send({ message: "Please Enter Password." });
          } else {
            if (await bcrypt.compare(req.body.password, admin.password)) {
              res.send({
                _id: admin._id,
                email: admin.email,
                is_admin: admin.is_admin,
                token: generateToken(admin),
              });
            } else {
              res.status(401).send({ message: "Password is Incorrect." });
            }
          }
        } else {
          res.status(401).send({ message: "Invalid Email or Password" });
        }
      }
    }
  })
);

router.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === "" && password === "") {
      res.status(401).send({ message: "Please enter Email and Password" });
    } else {
      const user =
        (await Parent.findOne({ email })) ||
        (await CoParent.findOne({ email }));
      if (!user) {
        res
          .status(401)
          .send({ message: "User with this Email does not exist." });
      } else {
        if (user) {
          if (password === "") {
            res.status(401).send({ message: "Please Enter Password." });
          } else {
            if (await bcrypt.compare(req.body.password, user.password)) {
              res.send({
                _id: user._id,
                email: user.email,
                is_parent: user.is_parent,
                is_co_parent: user.is_co_parent,
                token: generateToken(user),
              });
            } else {
              res.status(401).send({ message: "Password is Incorrect." });
            }
          }
        } else {
          res.status(401).send({ message: "Invalid Email or Password" });
        }
      }
    }
  })
);

router.put("/:id", async (req, res) => {
  const user =
    (await Parent.findById(req.params.id)) ||
    (await CoParent.findById(req.params.id));
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.is_co_parent = req.body.is_co_parent || user.is_co_parent;
    user.is_parent = req.body.is_parent || user.is_parent;

    const updateduser = await user.save();
    res.send({ message: "user Updated", user: updateduser });
  } else {
    res.status(404).send({ message: "user Not Found" });
  }
});
router.post(
  "/forget-password",
  expressAsyncHandler(async (req, res) => {
    Parent.findOne({ email: req.body.email }, function (err, user) {
      if (!user) {
        res.send("error", "No account with that email address exists.");
        // return //res.redirect("/forgot");
      }
      const token = generateToken(user);
      const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
      sendEmail(user.email, "Password reset", link);

      res.send("password reset link sent to your email account");
    });
  })
);

module.exports = router;
