//i controller contengono la logica che gestisce le richieste HTTP; elaborano la richiesta ed interagiscono con i modelli
const { Order, Product, User } = require('../models');
const { Op } = require('sequelize');

const getOrders = async(req, res) => {
    try {
        const orders = await Order.findAll({
            include: [User, Product],
        });
        console.log('Orders:', orders);
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const filterOrdersByDate = async(req,res) => {
    try{
        const { startDate, endDate } = req.query;
        const orders = await Order.findAll({
            where: {
                createdAt: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
            include: [User, Product],
        });
        res.json(orders);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const filterOrdersByProduct = async(req, res) => {
    try{
        const { productId } = req.query;
        const orders = await Order.findAll({
            include: [
                User, 
                {
                    model: Product, 
                    where: {id: productId}
                }
            ]
        });
        res.json(orders);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

const createOrder = async(req, res) => {
    try{
        const { userId, createdAt, productIds } = req.body;
        const newOrder = await Order.create({ userId, createdAt });
        await newOrder.addProducts(productIds);
        res.status(201).json(newOrder);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

const updateOrder = async(req, res) => {
    try{
        const {id} = req.params;
        const { userId, createdAt, productIds } = req.body;
        const order = await Order.findByPk(id);
        if(order) {
            order.userId = userId;
            order.createdAt = createdAt;
            await order.save();
            await order.setProducts(productIds);
            res.json(order);
        }else {
            res.status(404).json({ error: 'Order not found' })
        }
    } catch(error){
        res.status(500).json({ error: error.message })
    }
};

const deleteOrder = async(req, res) => {
    try{
        const {id} = req.params;
        const order = await Order.findByPk(id);
        if(order){
            await order.destroy();
            res.json({message: 'Order deleted'})
        }else{
            res.status(404).json({ error: 'Order not found' })
        }
    }catch(error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = {
    getOrders,
    filterOrdersByDate,
    filterOrdersByProduct,
    createOrder,
    updateOrder,
    deleteOrder,
};