import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    username: {
        tpye: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Vendor', 'Supplier'],
        required: true
    }

}, {timestamps: true});

export const User = mongoose.model('User', userSchema);