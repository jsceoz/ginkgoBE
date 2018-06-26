import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activityId: {
        type:Schema.Types.ObjectId,
        required: true,
    },
    type: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    monitor: {
        viewCount: Number,
        dailyViewCount: Array,
        itemCount: Number,
        dailyItemCount: Array,
    }
});