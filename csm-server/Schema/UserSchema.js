import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        RollNumber: {
            type: String,
            required: true,
        },
        RegisterNumber: {
            type: Number,
            required: true,
        },
        Batch: {
            type: String,
            required: true,
        },
        Year: {
            type: String,
            required: true,
        },
        Department: {
            type: String,
            required: true,
        },
        Class: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        PhoneNumber: {
            type: Number,
            required: true,
        },
        Password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const UserModel = new mongoose.model("UserData", UserSchema);
