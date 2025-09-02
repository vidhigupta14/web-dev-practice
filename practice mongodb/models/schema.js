import mongoose from 'mongoose';
const user = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
export const User = mongoose.model('User', user);