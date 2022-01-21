 const jwt = require("jsonwebtoken");
require("dotenv").config();

 const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      is_parent: user.is_parent,
      is_child: user.is_child,
      is_co_parent: user.is_co_parent,
      is_admin: user.is_admin,
      createBy:user.createBy

    },
    process.env.jwtSecret || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};

module.exports = generateToken;
