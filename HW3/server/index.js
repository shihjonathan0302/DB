const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ItemModel = require('./models/item.js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbURI = "mongodb+srv://shihjonathan0302:295812jonathan@cluster0.duoosl2.mongodb.net/";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.post('/additem', async (req, res) => {
  try {
    const { id, name, price, category } = req.body;
    const item = new ItemModel({ id, name, price, category });
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/read', async (req, res) => {
  try {
    const result = await ItemModel.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
