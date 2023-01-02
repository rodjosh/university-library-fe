import { gql } from '__generated__';

export const LOGIN_USER = gql(`
  mutation loginUser($email: String!, $password: String!) {
    mLoginUser(email: $email, password: $password) {
        id
        first_name
        last_name
        email
        role
    }
  }
`);

export const CREATE_USER = gql(`
  mutation createUser($first_name: String!, $last_name: String!, $email: String!, $role: String!, $password: String!) {
    mCreateUser(first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {
        id
        first_name
    }
  }
`);

export const UPDATE_USER = gql(`
  mutation updateUser($user_id: String!, $first_name: String, $last_name: String, $email: String, $role: String, $password: String) {
    mUpdateUser(user_id: $user_id, first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {
        id
        first_name
        last_name
        email
        role
    }
  }
`);

export const DELETE_USER = gql(`
  mutation deleteUser($user_id: String!) {
    mDeleteUser(user_id: $user_id) {
        id
        first_name
        last_name
        email
        role
    }
  }
`);
