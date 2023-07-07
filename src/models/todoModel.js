import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Todo', todoSchema);