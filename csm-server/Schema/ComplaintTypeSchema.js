import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema(
    {
        Type: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const ComplaintTypeModel = new mongoose.model("ComplaintType", TypeSchema);
