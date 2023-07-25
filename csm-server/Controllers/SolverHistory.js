import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const SolverHistory = (req, res) => {

    ComplaintModel.find({ AssignedTo : req.body.solver , Inprogress : "true" , Completed : "true" }).populate('User')
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
