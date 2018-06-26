import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    textId: {
        
    }
})