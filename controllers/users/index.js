const { controllerWraper } = require("../../helpers");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const getCurrentUser = require("./getCurrentUser");
const logoutUser = require("./logoutUser");
const updateAvatar = require("./updateAvatar")


module.exports = {
  registerUser: controllerWraper(registerUser),
  loginUser: controllerWraper(loginUser),
  getCurrentUser: controllerWraper(getCurrentUser),
  logoutUser: controllerWraper(logoutUser),
  updateAvatar: controllerWraper(updateAvatar),
};