import { PlacemarkSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.placemarkid);
      const viewData = {
        title: placemark.title,
        description: placemark.description,
        year: placemark.year,
        lat: placemark.lat,
        lng: placemark.lng,
        category: placemark.category,
      };
      return h.view("placemark-view", viewData);
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
        const file = request.payload.img;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.img);
          placemark.img = url;
          await db.placemarkStore.updatePlacemark(placemark);
        } 
        return h.redirect(`/placemarks/${placemark._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/placemarks/${placemark._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  showUpdate: {
    handler: async function (request, h) {
      const street = await db.streetStore.getStreetById(request.params.id);
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.placemarkid);
      const viewData = {
        title: "Edit placemark",
        street: street,
        placemark: placemark,
      };
      return h.view("update-placemark-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PlacemarkSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("placemark-view", { title: "Edit placemark error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.placemarkid);
      const newPlacemark = {
        title: request.payload.title,
        description: request.payload.description,
        year: Number(request.payload.year),
        lat: Number(request.payload.lat),
        lng: Number(request.payload.lng),
        category: request.payload.category,
      };
      await db.placemarkStore.updatePlacemark(placemark, newPlacemark);
      return h.redirect(`/street/${request.params.id}`);
    },
  },
};