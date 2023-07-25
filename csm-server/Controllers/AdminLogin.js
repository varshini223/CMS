import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from "bcrypt";

export const AdminLogin = async (req, res) => {

    const data = await AdminModel.findOne({ Name: req.body.Name });

    if (data) {
        const validatePassword = await bcrypt.compare(req.body.Password, data.Password);
        if (validatePassword) {
            res.send({
                status: 200,
                message: "Password Correct",
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
