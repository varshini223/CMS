import { AdminModel } from "../Schema/AdminSchema.js";
import bcrypt from 'bcrypt';

export const postAdmin = async (req, res) => {

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
   const Solver = new AdminModel({
      Name: req.body.Name,
      Password: hashedPassword,
   });
   Solver.save().then(() => {
      res.send({
         status: 200,
         message: "Admin created",
      });
   }).catch((err) => {
      res.send(err);
   })
};
