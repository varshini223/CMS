import { SolversModel } from "../Schema/SolversSchema.js";

export const GetCategoryBasedSolvers = (req, res) => {

  SolversModel.find({ Category : req.body.Category })
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
