import Boom from "@hapi/boom";
import bcrypt from "bcrypt";
import { db } from "../models/db.js";
import { UserSpec, UserSpecPlus, UserArray, IdSpec, JwtAuth, UserCredentialsSpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { createToken } from "./jwt-utils.js";


export const userApi = {
  create: {
    auth: false,
    handler: async function(request, h) {
      try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(request.payload.password, saltRounds);
        request.payload.password = hashedPassword;
        if (hashedPassword) {
          console.log("Password hashed");
        }
        const user = await db.userStore.addUser(request.payload);
        if (user) {
          return h.response({ success: true, user }).code(201);
        }
        return Boom.badImplementation("error creating user");
      } catch (err) {
        console.error(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a User",
    notes: "Returns the newly created user",
  },

  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function(request, h) {
      try {
        const users = await db.userStore.getAllUsers();
        return users;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all userApi",
    notes: "Returns details of all userApi",
    response: { schema: UserArray, failAction: validationError },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserById(request.params.id);
        if (!user) {
          return Boom.notFound("No User with this id");
        }
        return user;
      } catch (err) {
        return Boom.serverUnavailable("No User with this id");
      }
    },
    tags: ["api"],
    description: "Get a specific user",
    notes: "Returns user details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: UserSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.userStore.deleteAll();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all userApi",
    notes: "All userApi removed from Playtime",
  },

  authenticate: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserByEmail(request.payload.email);
        if (!user) {
          return Boom.unauthorized("User not found");
        }
        const isValidPassword = await bcrypt.compare(request.payload.password, user.password);
        if(isValidPassword) {
          console.log("Password is valid");
        }
        if (!isValidPassword){
          return Boom.unauthorized("Invalid password");
        }
        const token = createToken(user);
        return h.response({ success: true, token: token, email: user.email, id: user._id }).code(201);      
      } catch (err) {
        return Boom.serverUnavailable("Data Error");
      }
    },
    tags: ["api"],
    description: "Authenticate a user",
    notes: "If user has valid email/password, create and return a JWT token",
  }};