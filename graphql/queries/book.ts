import { gql } from '@codegen/gql';

export const GET_ALL_BOOKS = gql(`
  query getAllBooks($offset: Int, $limit: Int, $title: String, $author: String, $genre: String) {
    qBooks(offset: $offset, limit: $limit, title: $title, author: $author, genre: $genre) {
        id
        title
        genre
        author
        published_year
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const GET_BOOK = gql(`
  query getBook($id: String!) {
    qBook(id: $id) {
        id
        title
        genre
        author
        published_year
        available_copies
        checkout_by_user_ids
    }
  }
`);
