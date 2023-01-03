import { gql } from '@codegen/gql';

export const CREATE_BOOK = gql(`
  mutation createBook($title: String!, $author: String!, $published_year: Int!, $genre: String!, $available_copies: Int!) {
      mCreateBook(title: $title, author: $author, published_year: $published_year, genre: $genre, available_copies: $available_copies) {
          id
          title
      }
  }
`);

export const UPDATE_BOOK = gql(`
  mutation updateBook($book_id: String!, $title: String, $author: String, $published_year: Int, $genre: String, $available_copies: Int) {
    mUpdateBook(book_id: $book_id, title: $title, author: $author, published_year: $published_year, genre: $genre, available_copies: $available_copies) {
        id
        title
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const DELETE_BOOK = gql(`
  mutation deleteBook($book_id: String!) {
    mDeleteBook(book_id: $book_id) {
        id
        title
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const CHECKOUT_BOOK = gql(`
  mutation checkoutBook($book_id: String!, $student_id: String!) {
    mCheckoutBook(book_id: $book_id, student_id: $student_id) {
        id
        title
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const RETURN_BOOK = gql(`
  mutation returnBook($book_id: String!, $student_id: String!) {
    mReturnBook(book_id: $book_id, student_id: $student_id) {
        id
        title
        available_copies
        checkout_by_user_ids
    }
  }
`);
