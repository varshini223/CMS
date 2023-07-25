import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const SolverBasedComplaint = (req, res) => {

    ComplaintModel.find({ AssignedTo : req.body.solver , Inprogress : "true" , Completed : "false" }).populate('User')
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
