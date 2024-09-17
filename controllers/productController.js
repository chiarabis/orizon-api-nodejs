//i controller contengono la logica che gestisce le richieste HTTP; elaborano la richiesta ed interagiscono con i modelli
const { Product } = require('../models');

const getProducts = async(req, res) => {
    try{
        const products = await Product.findAll();
        res.status(200).json(products);
        console.log('Products:', products)
    } catch (error){
        res.status(500).json({ error: error.message });
        console.log(error.message)
    }
};

const createProduct = async(req, res) => {
    try{
        console.log('Request Body:', req.body);
        const { name, destination, price, localGuide, scoreCity, scoreHistory, scoreNature, scoreParty, scoreRelax } = req.body;
        const newProduct = await Product.create({ name, destination, price, localGuide, scoreCity, scoreHistory, scoreNature, scoreParty, scoreRelax });
        res.status(201).json(newProduct);
    } catch(error){
        console.error('Error creating product:', error);
        res.status(500).json({ error: error.message });
    }
}; 

const updateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const { name, destination, price, localGuide, scoreCity, scoreHistory, scoreNature, scoreParty, scoreRelax } = req.body;
        const product = await Product.findByPk(id);
        if(product) {
            product.name = name;
            product.destination = destination;
            product.price = price;
            product.localGuide = localGuide;
            product.scoreCity = scoreCity;
            product.scoreHistory = scoreHistory;
            product.scoreNature = scoreNature;
            product.scoreParty = scoreParty;
            product.scoreRelax = scoreRelax;
            await product.save();
            res.json(product);
        }else{
            res.status(404).json({ error: 'Product not found for updating' });
        }
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByPk(id);
        if(product) {
            await product.destroy();
            res.json({ message: 'Product deleted' })
        }else {
            res.status(404).json({ error: 'Product not found for deleting' });
        }
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};