import Users from "../models/userModel.js";

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