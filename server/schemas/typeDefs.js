const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int
        authors: [Auth]
        description: String
        title: String
        image: 
        link: 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(author: [String]!, description: String!, title: String!, bookId: Int!, image:!,link:!): User
        removeBook(bookId: Int!): User
    }
`
module.exports = typeDefs;