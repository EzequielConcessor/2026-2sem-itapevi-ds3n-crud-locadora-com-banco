const express = require("express")
const router = express.router()

const filmecontroller = require("../controller/filmecontroller")

router.get("/", filmecontroller.getAllfilmes)
router.post("/", filmecontroller.createfilme)

module.express = router
