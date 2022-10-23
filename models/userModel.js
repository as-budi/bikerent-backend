import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = db.define('user',{
     user_name:{
          type: DataTypes.STRING(40)
     },
     user_email:{
          type: DataTypes.STRING(40)
     },
     password:{
          type: DataTypes.STRING
     },
     refresh_token:{
          type: DataTypes.TEXT
     },
     balance:{
          type: DataTypes.INTEGER
     }
},{
     freezeTableName:true
});

export default Users;