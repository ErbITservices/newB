require("dotenv").config();
const express = require('express')
const app = express()
const db = require("./db");
const cors = require('cors');
const bodyParser = require('body-parser');
const formRouter=require('./routes/fromRutes');
const adminRouter = require("./routes/AdminRutes");
const base_url= process.env.BASE;



const corsOptions = {
    origin:`${base_url}`,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };


  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  // app.use("/person",personRoutes);
  // app.use('/menu',menuRoutes) ;
  app.use('/form',formRouter) ;
  app.use('/admin',adminRouter) ;


  const PORT= process.env.PORT ||5555

db(app.listen(PORT, () => {
  console.log(`jaimin server is run on port ${PORT}`);
  console.log(base_url);
  
}))

exports.app = app;

