import mongoose from "mongoose";
import { UserModel } from "./UserSchema.js";

const ComplaintSchema = new mongoose.Schema(
  {
    User: {
      type: mongoose.Types.ObjectId,
      ref: "UserData",
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    RaisedOn: {
      type: String,
      required: true
    },
    Image: [{
      type: String,
      required: false
    }],
    AssignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Solversdata",
      required: null,
    },
    Viewed: {
      type: String,
      required: false,
      default: "false"
    },
    Inprogress: {
      type: String,
      required: false,
      default: "false"
    },
    Completed: {
      type: String,
      required: false,
      default: "false"
    },
  },
  { timestamps: true }
);

export const ComplaintModel = new mongoose.model("Complaints", ComplaintSchema);
