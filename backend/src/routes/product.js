const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const multer = require("multer");
const product = require("../models/product");
const path = require("path");
const shortid = require("shortid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/product/create", upload.array("productPicture"), (req, res) => {
  const { name, description, quantity, price, category } = req.body;
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const newProduct = new product({
    name,
    description,
    quantity,
    price,
    slug: slugify(name),
    category,
  });

  newProduct.save((err, createdProduct) => {
    if (err) {
      return console.log(err);
    }
    res.json({ product: createdProduct });
  });
});

module.exports = router;
