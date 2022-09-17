const Products = require("../products");

const getAll = (req, res) => {
    Products.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const create = (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
    };
    Products.create(newProduct)
      .then((data) => res.json({ msg: "Product added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const remove = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product deleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

module.exports = {
    getAll,
    create,
    update,
    remove
};


//logica que quiero ejecutar