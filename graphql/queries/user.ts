import { gql } from '__generated__';

export const GET_USERS = gql(`
  query getAllUsers($offset: Int, $limit: Int) {
    qUsers(offset: $offset, limit: $limit) {
        _id
        first_name
        last_name
        role
        email
    }
  }
`);

export const GET_STUDENTS = gql(`
  query getAllStudents($offset: Int, $limit: Int) {
    qStudents(offset: $offset, limit: $limit) {
        _id
        first_name
        last_name
        role
        email
        requested_book_ids
    }
  }
`);

export const GET_USER = gql(`
  query getUser($id: String!) {
    qUser(id: $id) {
        _id
        first_name
        last_name
        role
        email
        requested_book_ids
    }
  }
`);
