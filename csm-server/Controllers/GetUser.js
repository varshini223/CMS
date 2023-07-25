import { UserModel } from "../Schema/UserSchema.js";

export const Getuser = (req, res) => {

    UserModel.find().then((data) => {
        res.send({
            status: 200,
            message: "User found",
            data: data,
        });
    }).catch((err) => {
        res.send(err);
    })
};
