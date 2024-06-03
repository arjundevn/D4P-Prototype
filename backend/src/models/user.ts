import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    membershipId: number;
    aadharId: number;
    panId: string;
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    membershipId: { type: Number, required: true, unique: true },
    aadharId: { type: Number, required: true, unique: true },
    panId: { type: String, required: true, unique: true },
});

userSchema.pre("save", async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

const User = mongoose.model<UserType>("User", userSchema);

export default User;