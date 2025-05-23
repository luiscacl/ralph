"use strict";

require("dotenv").config();
var mongoose = require("mongoose");
var app = require("./app");
var port = 3000;
const mongoUri = process.env.MONGO_URI;

// Conexion a la DataBase
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se concectó exitosamente a la base de datos Ralph");

    // Crear servidor
    app.listen(port, () => {
      console.log("Servidor corriendo");
    });
  })
  .catch((err) => console.log(err));
