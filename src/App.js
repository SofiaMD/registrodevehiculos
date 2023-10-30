import Ruta2 from './Router/Router'

// const express = require('express');
// const app = express();

// const port = process.env.PORT || 3000;

// //Conexion a base de datos 
// const mongoose = require('mongoose');

// const user = 'sofiaduarte922';
// const password = 'Registrovehicular2023';
// const dbname = 'Registro'
// const uri = `mongodb+srv://${user}:${password}${dbname}.8lrioiz.mongodb.net/`;

// mongoose.connect(uri, 
// { useNewUrlParser: true, useUnifiedTopology: true} //no aparezcan mensajes enn la consola
// )
//     .then(() => console.long('Base de Datos conectada'))
//     .catch(e => console.long(e))



function App() {
  return (
    <>
      <Ruta2 />
    </>
  )
}

export default App