const Product = require('../models/product');

// function to show all the products
module.exports.products = async function (req, res) {
    try {
        const foundProducts = await Product.find({}).exec();
        res.send(foundProducts);
    } catch (err) {
        res.status(500).send(err);
    }
};


// Function to create a new product
module.exports.create = async function (req, res) {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity
        });

        await newProduct.save();
        res.send('New product added successfully.');
    } catch (err) {
        res.status(500).send(err);
    }
};

// Function to delete a product using its ID
module.exports.delete = async function (req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID }).exec();
        res.send({
            message: "Product deleted"
        });
    } catch (err) {
        res.status(500).send(err);
    }
};


// Function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
    const ID = req.params.productID;

    try {
        const found = await Product.findById(ID).exec();

        if (!found) {
            return res.status(404).send("Product not found");
        }

        const newQty = parseInt(req.query.number);
        const updatedProduct = await Product.findByIdAndUpdate(ID, { quantity: newQty }).exec();

        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }

        updatedProduct.quantity = newQty;
        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.status(500).send(err);
    }
};