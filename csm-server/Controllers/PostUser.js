import { UserModel } from "../Schema/UserSchema.js";
import bcrypt from 'bcrypt';

export const Postuser = async (req, res) => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
    const postUser = new UserModel({
        Name: req.body.Name,
        RollNumber: req.body.RollNumber,
        RegisterNumber: req.body.RegisterNumber,
        Batch: req.body.Batch,
        Year: req.body.Year,
        Department: req.body.Department,
        Class: req.body.Class,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        Password: hashedPassword,
    });
    postUser.save().then(() => {
        res.send({
            status: 200,
            message: "User is added",
        });
    }).catch((err) => {
        res.send(err);
    })
};
