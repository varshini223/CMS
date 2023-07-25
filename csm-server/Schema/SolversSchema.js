import mongoose from "mongoose";

const SolversSchema = new mongoose.Schema(
   {
      Name: {
         type: String,
         required: true,
      },
      Mobile: {
         type: String,
         required: true,
      },
      EmpId: {
         type: String,
         required: true,
      },
      Category: {
         type: mongoose.Types.ObjectId,
         ref: "ComplaintType",
         required: true,
      },
      Password: {
        type: String,
        required: true,
     },
   },
   { timestamps: true }
);

export const SolversModel = new mongoose.model("Solversdata", SolversSchema);
