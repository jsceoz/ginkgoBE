import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const registrationItemSchema = new Schema({
    owner: {
        type:Schema.Types.ObjectId,
        //required: true
    },
    activityId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    content: Array
}, { collection: 'registrationItem', timestamps: true});

export default mongoose.model('registrationItem', registrationItemSchema)