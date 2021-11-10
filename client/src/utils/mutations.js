import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
          _id
          username
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
        username
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
//   mutation saveBook(
//     $authors: [String]!
//     $description: String!
//     $title: String!
//     $bookId: Int!
//     $image: String!
//     $link: String!
//   ) {
//     saveBook(
//       authors: $authors
//       description: $description
//       title: $title
//       bookId: $bookId
//       image: $image
//       link: $link
//     ) {
//       _id
//       username
//       email
//       bookCount
//       SavedBooks {
//         authors
//         description
//         bookId
//         image
//         link
//         title
//       }
//     }
//   }
// `;

export const SAVE_BOOK = gql`
  mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
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
        SavedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
        }
    }
`;
