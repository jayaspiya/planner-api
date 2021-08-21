const router = require("express").Router()
const controller = require("./controller.js")
const auth = require("../utils/auth.js")

router.get("/", auth.verifyUser, controller.get_profile)

router.post("/register", controller.register_new_user)

router.get("/login", controller.login_user)

router.post("/new", controller.add_new_task)

module.exports = router