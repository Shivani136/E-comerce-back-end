const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

        name: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true,

        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        offer: {
            type: Number,
        },
        ProductPicture: [
            {
                img: { type: String }
            }
        ],
        reviews: [
            {
                userId: mongoose.Schema.Types.ObjectId, ref: 'user',
                review:String
            }
        ],

        createdBy : {
            userId: mongoose.Schema.Types.ObjectId, ref: 'user',
        },

        category: {  userId: mongoose.Schema.Types.ObjectId, ref: 'user',},

        updatedAt: Date 
        }, { timestamps: true });

module.exports = mongoose.model('PRODUCT', productSchema)