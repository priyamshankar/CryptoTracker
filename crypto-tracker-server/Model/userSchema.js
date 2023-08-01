require ("dotenv").config();
const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
});



const userDetail = new mongoose.model("userDetail",userDetailSchema);
module.exports = userDetail;