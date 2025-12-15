import mongoose from 'mongoose';

const UserSchems = new mongoose.Schema({
    fullName: {
        type: String,
        reguired: true,
    },
    email: {
        type: String,
        reguired: true,
        unigue: true,
    },
    passwordHash: {
        type: String,
        reguired: true,
    },
    avatarUrl: String,
}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchems);