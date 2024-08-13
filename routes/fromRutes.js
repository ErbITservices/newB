const express=require('express');
const formRouter = express.Router();
const Storage = require('../models/FormData')

formRouter.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Storage (data);
      const savedPerson = await newPerson.save();
      console.log("data save");
      res.status(200).json(savedPerson);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  formRouter.get('/', async (req, res) => {
    try {
      const data = await Storage.find();
      console.log('data fatch');
      res.status(200).json(data);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  formRouter.get('/:gam', async (req, res) => {
    try {
      const gamtype = req.params.gam;
      console.log(gamtype);
      
        const data = await Storage.find({gam:gamtype});
      console.log('data fatch');
      res.status(200).json(data);
      console.log(data);
      
      
     
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  formRouter.delete("/:id", async (req, res) => {
    try {
      const personId = req.params.id;
      const reminder = await Storage.findOneAndDelete(personId);
      if (!reminder) {
        return res.status(404).json({ message: "No Menu with this ID" });
      }
      console.log("data deleted");
      res.status(200).json({ message: "person deleted success" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = formRouter;
