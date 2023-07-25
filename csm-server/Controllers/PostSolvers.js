import { SolversModel } from "../Schema/SolversSchema.js";
import bcrypt from 'bcrypt';

export const postSolver = async (req, res) => {

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
   const Solver = new SolversModel({
      Name: req.body.Name,
      Mobile: req.body.Mobile,
      EmpId: req.body.EmpId,
      Category: req.body.Category,
      Password: hashedPassword,
   });
   Solver.save().then(() => {
      res.send({
         status: 200,
         message: "Solvers and Category created",
      });
   }).catch((err) => {
      res.send(err);
   })
};
