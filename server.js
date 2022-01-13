const express = require("express");
const app = express();
const port = 1582;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", require("./routes/router"));

// app.get("/", (req, res) => {
//   res.render("crud-index");
// });
// app.get("/2", (req, res) => {
//   res.render("crud-index2");
// });

// app.get("/:numerito?", function (request, response) {
// app.get("/:numerito?", (request, response) => {
//   // let numerito = request.params.numerito;
//   let { numerito } = request.params;

//   if (!numerito) {
//     response.send("<b>No envió un número</b>");
//   } else {
//     response.send(
//       "Mensaje de prueba - Hola mundo, mi número es el " + numerito
//     );
//   }
// });

// app.listen(port, function () {
app.listen(port, () => {
  console.log(`Aplicacion en el puerto ${port}`);
});
