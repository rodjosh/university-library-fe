import { gql } from '@codegen/gql';

export const GET_ALL_BOOKS = gql(`
  query getAllBooks($offset: Int, $limit: Int, $title: String, $author: String, $genre: String) {
    qBooks(offset: $offset, limit: $limit, title: $title, author: $author, genre: $genre) {
        _id
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
        _id
        title
        genre
        author
        published_year
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const GET_BOOKS_REQUESTED_BY_STUDENT = gql(`
  query getBooksRequestedByStudent($student_id: String!, $offset: Int, $limit: Int, $title: String, $author: String, $genre: String) {
    qBooksRequestedByStudent(student_id: $student_id, offset: $offset, limit: $limit, title: $title, author: $author, genre: $genre) {
        _id
        title
        genre
        author
        published_year
        available_copies
        checkout_by_user_ids
    }
  }
`);

export const GET_BOOKS_REQUESTED_BY_STUDENTS = gql(`
  query getBooksRequestedByStudents($offset: Int, $limit: Int, $title: String, $author: String, $genre: String) {
    qBooksRequestedByStudents(offset: $offset, limit: $limit, title: $title, author: $author, genre: $genre) {
        _id
        title
        genre
        author
        published_year
        available_copies
        checkout_by_user_ids
    }
  }
`);
