const mysql = require("mysql");

const cors = require("cors");

const path = require("path");

const express = require("express")

const app=express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin", 
    database: "nodemonjs", 
  });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));

app.use("/IMG", express.static(__dirname + '/IMG'))

app.get("/", function(req , res){
    var filePath=join(__dirname, "FORMULARIO.html");
    var filePath=join(__dirname, "gracias.html");
    res.sendFile(filePath);
})



connection.connect((err) => {
  if (!err) console.log("La base de datos ah sido conecatada con exito");
  else
    console.log(
      "LA base de adatos no ah sido conectada" + JSON.stringify(err, undefined, 2)
    );
});

module.exports = connection;
