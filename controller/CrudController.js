const CrudModel = require("../model/CrudModel");

const listar = (req, res) => {
  let title = "Crud de ejemplo";
  let list = CrudModel.lista;
  res.render("crud-index", { title, list });
};

const crear = (req, res) => {
  res.render("crud-crear");
};

const almacenar = (req, res) => {
  console.log("ALMACENAR", req.body);
  CrudModel.agregar(req.body);
  res.redirect("/crud");
};

module.exports = {
  listar,
  crear,
  almacenar,
};
