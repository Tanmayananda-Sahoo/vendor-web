import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true})

export const Product = mongoose.model('Product', productSchema);