import cloudinary from "cloudinary";
import { Placemark } from "./placemark.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export const placemarkMongoStore = {
  async getAllPlacemarks() {
    const placemarks = await Placemark.find().lean();
    return placemarks;
  },

  async addPlacemark(userId, placemark) {
    placemark.userId = userId;
    const newPlacemark = new Placemark(placemark);
    const placemarkObj = await newPlacemark.save();
    return this.getPlacemarkById(placemarkObj._id);
  },

  async getPlacemarksByUserId(userId) {
    const placemarks = await Placemark.find({ userId: userId }).lean();
    return placemarks;
  },

  async getPlacemarkById(id) {
    if (id) {
      const placemark = await Placemark.findOne({ _id: id }).lean();
      return placemark;
    }
    return null;
  },

  async deletePlacemark(id) {
    try {
      await Placemark.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlacemarks() {
    await Placemark.deleteMany({});
  },

  async updatePlacemark(placemark, updatedPlacemark) {
    const placemarkDoc = await Placemark.findOne({ _id: placemark._id });
    placemarkDoc.title = updatedPlacemark.title;
    placemarkDoc.description = updatedPlacemark.description;
    placemarkDoc.year = updatedPlacemark.year;
    placemarkDoc.lat = updatedPlacemark.lat;
    placemarkDoc.lng = updatedPlacemark.lng;
    placemarkDoc.category = updatedPlacemark.category;
    placemarkDoc.img = updatedPlacemark.img;
    await placemarkDoc.save();
  },

  async deleteImage(publicId) {
    await cloudinary.v2.uploader.destroy(publicId, {});
  },
};