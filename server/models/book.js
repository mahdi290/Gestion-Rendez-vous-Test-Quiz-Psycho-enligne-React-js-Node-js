const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

let reservationSchema = new Schema(
  {

    appointmentDate: {
      type: Date,
    },

    Telephone: {
      type: Number,
      required: true,
    },
    Patient: { type: ObjectId, ref: "Patient"},
    Doctor: { type: ObjectId, ref: "Doctor"},

    appointmentStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "open", "rejected", "cancelled", "completed","accepted"],
      required: true,
    },
  },
  {
    timesstamps: true,
  }
);

module.exports = mongoose.model("Reservations", reservationSchema);
