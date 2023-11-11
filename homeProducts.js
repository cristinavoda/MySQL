const HomeProducts = require("../models/homeProducts");

const getProducts = (req, res) => {
  HomeProducts.getAll()
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(200).send({ msg: "this page is empty" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const getProduct = (req, res) => {
  const id = req.params.id;
  HomeProducts.getById(id)
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(404).send({ msg: "product not found" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const createProduct = (req, res) => {
  const { name, price, description, room } = req.body;
  const product = new HomeProducts(name, price, description, room);
  product
    .create()
    .then(() => res.status(201).send({ data: product }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, description, room } = req.body;
  const product = new HomeProducts(name, price, description, room);
  product
    .update(id)
    .then(() => res.status(200).send({ data: product }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  HomeProducts.delete(id)
    .then(() => {
      res.status(200).send({ msg: "product deleted" });
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

module.exports = { getProducts, getProduct, deleteProduct, createProduct, updateProduct };
