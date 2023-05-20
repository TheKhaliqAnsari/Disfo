const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authValidator = require("../validations/auth.validation");
const dataValidator = require("../middlewares/dataValidator.middleware")

router.get("/all-users", authValidator.authValidation, userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.post("/register", dataValidator.queryErrorSchema ,userController.registerUser);

module.exports = router;
