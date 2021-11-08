import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                title
            }
        }
    }
`;

export const ADD_USER
export const SAVE_BOOK
export const REMOVE_BOOK