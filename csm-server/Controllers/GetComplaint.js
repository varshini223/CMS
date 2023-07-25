import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const Getcomplaint = (req, res) => {

    ComplaintModel.find().populate('User')
        .then((data) => {
            res.send({
                status: 200,
                message: "Complaints found",
                data: data,
            });
        }).catch((err) => {
            res.send(err);
        })
};
