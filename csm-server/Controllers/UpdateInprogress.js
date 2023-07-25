import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const UpdateInprogress = (req, res) => {

    ComplaintModel.findOneAndUpdate({ _id : req.body.id },{Completed : "true"},{upsert: true})
        .then((data) => {
            res.send({
                status: 200,
                message: "Complaint Status updated",
                data: data,
            });
        }).catch((err) => {
            res.send(err);
        })
};
