import { ComplaintTypeModel } from "../Schema/ComplaintTypeSchema.js";

export const complaintType = async (req, res) => {
    const ComplaintType = new ComplaintTypeModel({
        Type: req.body.Type
    });
    ComplaintType.save().then(() => {
        res.send({
            status: 200,
            message: "Complaint category added",
        });
    }).catch((err) => {
        res.send(err);
    })
};
