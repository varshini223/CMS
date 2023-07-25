import { SolversModel } from "../Schema/SolversSchema.js";

export const GetSolvers = (req, res) => {

    SolversModel.find().populate('Category')
        .then((data) => {
            res.send({
                status: 200,
                message: "Solvers found",
                data: data,
            });
        }).catch((err) => {
            res.send(err);
        })
};
