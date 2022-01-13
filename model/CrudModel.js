var lista = [
  { nombre: "Dayanna" },
  { nombre: "Eduardo" },
  { nombre: "Aleja" },
  { nombre: "Mauro" },
];

const agregar = (obj) => {
  lista.push(obj);
};

module.exports = {
  lista,
  agregar,
};
