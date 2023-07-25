import { UserModel } from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";

export const UserLogin = async (req, res) => {

    const data = await UserModel.findOne({ RollNumber: req.body.RollNumber });

    if (data) {
        const validatePassword = await bcrypt.compare(req.body.Password, data.Password);
        if (validatePassword) {
            res.send({
                status: 200,
                message: "Password Correct",
                data: data,
                response: "success",
            });
        } else {
            return res.send({
                status: 404,
                message: "Incorrect password",
                response: "Incorrect password",
            });
        }
    } else {
        return res.send({
            status: 404,
            message: "User not found",
            response: "User not found",
        });
    }
};
