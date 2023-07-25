import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const SolvedComplaints = (req, res) => {

    ComplaintModel.find({Viewed : "true" , Inprogress : "true" , Completed : "true" }).populate('User').populate('AssignedTo')
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
