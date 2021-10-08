const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

const emailAddressRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.createContacts = (req, res, next) => {
  let { fullName, emailAddress, contactNumber, location, registeredDate } =
    req.body;
  let errors = [];
  if (!fullName) {
    errors.push({ fullName: "required" });
  }
  if (!emailAddress) {
    errors.push({ emailAddress: "required" });
  }
  if (!emailAddressRegexp.test(emailAddress)) {
    errors.push({ emailAddress: "invalid" });
  }
  if (!contactNumber) {
    errors.push({ contactNumber: "required" });
  }
  if (!location) {
    errors.push({ contactNumber: "required" });
  }
  if (!registeredDate) {
    errors.push({ contactNumber: "required" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  User.findOne({ emailAddress: emailAddress })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "emailAddress already exists" }] });
      } else {
        const user = new User({
          fullName: fullName,
          emailAddress: emailAddress,
          contactNumber: contactNumber,
          location: location,
          registeredDate: registeredDate,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};
