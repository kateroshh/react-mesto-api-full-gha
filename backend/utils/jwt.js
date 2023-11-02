const jwt = require("jsonwebtoken");
require("dotenv").config();

const { JWT_SECRET, NODE_ENV } = process.env;

const generateToken = (payload) => jwt.sign(payload, NODE_ENV === "production" ? JWT_SECRET : "dev-secret", { expiresIn: 3600 });

module.exports = {
  generateToken,
};
