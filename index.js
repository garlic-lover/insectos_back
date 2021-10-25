const { ApolloServer } = require("apollo-server");

const mongoose = require("mongoose");

import schemas from "./schemas";
import resolvers from "./resolvers";
import models from "./models";

import dotenv from "dotenv";
dotenv.config();

//import importArticles from "./functions/general/importArticles";
//  importArticles(models);

// import importInsects from "./functions/general/importInsects";
// importInsects(models);

// import estadosGen from "./functions/general/estadosGen";
//estadosGen();

mongoose.connect(process.env.ATLAS || "mongodb://localhost/insectos-back", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      /*  let token = req.headers.authorization || "";
      token = token.replace("Bearer ", "");
      const user = await userGet(token); */
      return { models };
    }
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
