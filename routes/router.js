const express = require("express");
const router = express.Router();

const CrudController = require("../controller/CrudController");

router.get("/crud", CrudController.listar);
router.get("/crud/crear", CrudController.crear); // formulario
router.post("/crud/almacenar", CrudController.almacenar); // guardar en BD

module.exports = router;
