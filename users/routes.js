const router = require("express").Router()
const controller = require("./controller.js")
const auth = require("../utils/auth.js")

router.post("/register", controller.register_new_user)
router.post("/login", controller.login_user)

// User Auth
router.get("/", auth, controller.get_profile)

module.exports = router