import { gql } from '__generated__';

export const GET_USERS = gql(`
  query getAllUsers($offset: Int, $limit: Int) {
    qUsers(offset: $offset, limit: $limit) {
        id
        first_name
        last_name
        role
    }
  }
`);

export const GET_STUDENTS = gql(`
  query getAllStudents($offset: Int, $limit: Int) {
    qStudents(offset: $offset, limit: $limit) {
        id
        first_name
        last_name
        role
        requested_book_ids
    }
  }
`);

export const GET_USER = gql(`
  query getUser($id: String!) {
    qUser(id: $id) {
        id
        first_name
        role
        requested_book_ids
    }
  }
`);
