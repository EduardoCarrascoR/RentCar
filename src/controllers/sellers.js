const Seller = require('../models/sellers');
module.exports = {
    index: async (req, res, next) => {
        const sellers = await Seller.find({});
        res.status(200).json(sellers);

    },
    newSeller: async (req, res, next) => {
        const newseller = new Seller(req.body);
        const seller = await newseller.save();
        res.status(200).json(seller);
    },
    getSeller: async (req, res, next) => {
        const {sellerId} = req.params;
        const seller = await Seller.findById(sellerId);
        res.status(200).json(seller);
    },
    replaceSeller: async (req, res, next) => {
        const { sellerId } = req.params;
        const newSeller = req.body;
        const  oldSeller = await Seller.findByIdAndUpdate(sellerId, newSeller);
        res.status(200).json({success: true});
    },
    updateSeller: async(req, res, next) => {
        const {sellerId} = req.params;
        const newSeller = req.body;
        const  oldSeller = await Seller.findByIdAndUpdate(sellerId, newSeller);
        res.status(200).json({success: true});
    },
    deleteSeller: async(req, res, next) => {
        const {sellerId} = req.params;
        const newSeller = req.body;
        await Seller.findByIdAndRemove(sellerId);
        res.status(200).json({success: true});
    }
};