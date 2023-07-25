import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
   {
      Name: {
         type: String,
         required: true,
      },
      Password: {
        type: String,
        required: true,
     },
   },
   { timestamps: true }
);

export const AdminModel = new mongoose.model("AdminData", AdminSchema);
