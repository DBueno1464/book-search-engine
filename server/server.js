const express = require("express");
const path = require("path");
// require apolloserver
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
// const routes = require('./routes');

// require the schema files, this will replace our 'routes' folder
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

// new instance of apolloserver with typedefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

// apply express middleware with our apolloserver
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

// render our main html page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
