const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    gender: {
      type: String,
      enum: ['M','F','T']
    },
    DOB: {
      type: Date,
    },
    phone: {
      type: Number,
      length: 10,
    },
    trainerRef: {
      type: Schema.Types.ObjectId,
      ref: "trainers",
    },
    sessions: [{
      type: Schema.Types.ObjectId,
      ref: "sessions",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users',userSchema);