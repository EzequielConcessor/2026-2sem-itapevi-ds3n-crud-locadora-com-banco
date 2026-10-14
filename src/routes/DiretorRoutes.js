const express = require("express")
const router = express.router()

const Diretorcontroller = require("../controller/Diretorcontroller")

router.get("/", Diretorcontroller.getAllDiretors)
router.post("/", Diretorcontroller.createDiretor)

module.express = router