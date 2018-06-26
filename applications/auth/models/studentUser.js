import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentUserSchema = new Schema({
    wxId: String,
    sid: String,
    name: String,
    sex: String,
    school: String,
    grade: String,
    department: String,
    dorm: String,
    room: String
},{ collection: 'studentUser' , timestamps: true });

export default mongoose.model('studentUser', studentUserSchema)