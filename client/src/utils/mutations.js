import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
          _id
      }
      }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $author: [String]!
    $description: String!
    $title: String!
    $bookId: Int!
    $image: String!
    $link: String!
  ) {
    saveBook(
      author: $author
      description: $description
      title: $title
      bookId: $bookId
      image: $image
      link: $link
    ) {
      _id
      username
      email
      bookCount
      SavedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: Int!) {
        removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        SavedBooks
        }
    }
`;
