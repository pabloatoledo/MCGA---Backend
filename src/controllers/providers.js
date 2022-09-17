const Providers = require("../providers");

const getAll = (req, res) => {
    Providers.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const create = (req, res) => {
    const newProvider = {
        name: req.body.name,
        product: req.body.product,
        direction: req.body.direction,
    };
    Providers.create(newProvider)
      .then((data) => res.json({ msg: "Provider added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const { id } = req.params;
    Providers.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${id}` });
        return res.json({ msg: "Provider updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const remove = (req, res) => {
    const { id } = req.params;
    Providers.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${id}` });
        return res.json({ msg: "Provider deleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const unDeleted = (req, res) => {
    const { id } = req.params;
    Providers.findByIdAndUpdate(id, { isDeleted: false }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Provider not found by ID: ${id}` });
        return res.json({ msg: "Provider undeleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

module.exports = {
    getAll,
    create,
    update,
    remove,
    unDeleted
};