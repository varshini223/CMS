import { ComplaintModel } from "../Schema/ComplaintSchema.js";

export const NotViewed = (req, res) => {

  ComplaintModel.find({ Viewed: "false" }).populate('User')
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
