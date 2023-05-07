const { controllerWraper } = require("../../helpers");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logoutUser");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  registerUser: controllerWraper(registerUser),
  loginUser: controllerWraper(loginUser),
  getCurrentUser: controllerWraper(getCurrentUser),
  logoutUser: controllerWraper(logoutUser),
  updateAvatar: controllerWraper(updateAvatar),
  verifyEmail: controllerWraper(verifyEmail),
  resendVerifyEmail: controllerWraper(resendVerifyEmail),
};
