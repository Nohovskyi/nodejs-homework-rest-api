const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemasUser } = require("../../models");
const controllers = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  controllers.registerUser
);

router.post(
  "/login",
  validateBody(schemasUser.loginSchema),
  controllers.loginUser
);

router.get("/current", authenticate, controllers.getCurrentUser);

router.post(
  "/logout",
  authenticate,
  validateBody(schemasUser.loginSchema),
  controllers.logoutUser
);

// * Для декількох різних полів з файлами: upload.field([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 4}])
// * Для вказання максимальної можливої передачі файлів upload.array("cover", 9)
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
