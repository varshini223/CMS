import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const ComplaintHistory = (req, res) => {

    ComplaintModel.find({ User : req.body.user })
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
