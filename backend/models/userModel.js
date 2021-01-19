const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    teams: [
      {
        teamName:{
          type: String,
          required: true,
        },
        teamOwner: {
          type: Boolean,
          required: true,
          default: false
        },
        teamAdmin: {
          type: Boolean,
          required: true,
          default: false
        },
        teamJoinDate: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
