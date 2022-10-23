import Users from "../models/userModel.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) => {
     try {
          const users = await Users.findAll({
               attributes: ['id', 'user_name', 'user_email']
          });
          res.json(users);
     } catch (error) {
          console.log(error);
     }
}

export const register = async(req, res) => {
     const { name, email, password, confPassword } = req.body;
     if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
     const salt = await bcrypt.genSalt();
     const hashPassword = await bcrypt.hash(password, salt);
     try {
          await Users.create({
               user_name: name,
               user_email: email,
               password: hashPassword
          });
          res.json({msg: "Register Berhasil"});
     } catch (error) {
          console.log(error);
     }
 }