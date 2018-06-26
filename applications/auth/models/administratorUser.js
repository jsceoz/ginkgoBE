import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const administratorUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    org: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
},{ collection: 'administratorUser' , timestamps: true });

export default mongoose.model('administratorUser', administratorUserSchema)