import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const registrationActivitySchema = new Schema({
    name: {
        type:String,
        required: true,
        unique: true
    },
    desc: {
        type:String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    startTime: {
        type:Date,
        required: true
    },
    endTime: {
        type:Date,
        required: true
    },
    fields: [{
        label: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        options: {
            type: Array
        }
    }]
}, { collection: 'registrationActivity', timestamps: true });

export default mongoose.model('registrationActivity', registrationActivitySchema)