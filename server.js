const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("client/build"));

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});
const Product = mongoose.model("Product", productSchema);
//get products
app.get("/api/products", (req, res) => {
  console.log("/api/products");
  const { title } = req.query;
  Product.find((err, products) => {
    if (title) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    res.send(products);
  });
});

// get specific product
app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, todo) => {
    res.send(todo);
  });
});
//add
app.post("/api/products", (req, res) => {
  const { title, price, description, category, image } = req.body;
  const product = new Product({
    title,
    price,
    description,
    category,
    image,
  });
  product.save((err, product) => {
    res.send(product);
  });
});
//update
app.put("/api/product/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  Product.findByIdAndUpdate(id, { title }, { new: true }, (err, product) => {
    res.send(product);
  });
});

// delete
app.delete("/api/product/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, product) => {
    if (err) {
      res.send("id not found");
    }
    res.send(product);
  });
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log("URL", URL);

mongoose.connect(
  // mongodb+srv://hadasa9096:<password>@cluster0.totmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  // "mongodb://localhost/gocode_shop",
  URL,

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("err", err);
    app.listen(port, () => {});
  }
);
