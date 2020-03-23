//item model
const Item = require('../models/Item');

//displaying items
module.exports.displayItems = async (req,res)=>{
    try{
        const items = await Item.find({}).sort('-createdAt');
        res.json({
            message : 'list of items',
            items
        });
    } catch(err) {

        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//creating new item
module.exports.create = async (req,res)=>{
    try{
        let item = await Item.create({
            name: req.body.name
        });
        res.json({
            message: 'Item added',
            item
        })
    } catch(err) {

        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.destroy = async (req,res)=>{
    try{    
        let item  = await Item.findById(req.params.id);
        item.remove();
        return res.json({
            message: 'item deleted',
            success: true
        });

    } catch(err) {
        console.log(err);
        return res.status(404).json({
            message: 'item not found',
            success: false
        })
    }
}