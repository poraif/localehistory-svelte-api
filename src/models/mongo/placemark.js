import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  lat: Number,
  lng: Number,
  category: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  img: String,
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);