import { PlacemarkSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";

export const streetController = {
  index: {
    handler: async function (request, h) {
      const street = await db.streetStore.getStreetById(request.params.id);
      const viewData = {
        name: "Street",
        street: street,
      };
      return h.view("street-view", viewData);
    },
  },

  addPlacemark: {
    validate: {
      payload: PlacemarkSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const currentStreet = await db.streetStore.getStreetById(request.params.id);
        return h.view("street-view", { title: "Add placemark error", street:currentStreet, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPlacemark = {
        title: request.payload.title,
        description: request.payload.description,
        year: Number(request.payload.year),
        lat: Number(request.payload.lat),
        lng: Number(request.payload.lng),
        category: request.payload.category,
      };
      await db.placemarkStore.addPlacemark(loggedInUser._id, newPlacemark);
      return h.redirect("/dashboard");
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const street = await db.streetStore.getStreetById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          street.img = url;
          await db.streetStore.updateStreet(street);
        }
        return h.redirect(`/street/${street._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/street/${street._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  deletePlacemark: {
    handler: async function (request, h) {
      const street = await db.streetStore.getStreetById(request.params.id);
      await db.placemarkStore.deletePlacemark(request.params.placemarkid);
      return h.redirect(`/street/${street._id}`);
    },
  },
};