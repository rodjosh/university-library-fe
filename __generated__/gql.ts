/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation loginUser($email: String!, $password: String!) {\n    mLoginUser(email: $email, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation createUser($first_name: String!, $last_name: String!, $email: String!, $role: String!, $password: String!) {\n    mCreateUser(first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation updateUser($user_id: String!, $first_name: String, $last_name: String, $email: String, $role: String, $password: String) {\n    mUpdateUser(user_id: $user_id, first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation deleteUser($user_id: String!) {\n    mDeleteUser(user_id: $user_id) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n": types.DeleteUserDocument,
    "\n  query getAllUsers($offset: Int, $limit: Int) {\n    qUsers(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n    }\n  }\n": types.GetAllUsersDocument,
    "\n  query getAllStudents($offset: Int, $limit: Int) {\n    qStudents(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n        requested_book_ids\n    }\n  }\n": types.GetAllStudentsDocument,
    "\n  query getUser($id: String!) {\n    qUser(id: $id) {\n        id\n        first_name\n        role\n        requested_book_ids\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    mLoginUser(email: $email, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    mLoginUser(email: $email, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createUser($first_name: String!, $last_name: String!, $email: String!, $role: String!, $password: String!) {\n    mCreateUser(first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($first_name: String!, $last_name: String!, $email: String!, $role: String!, $password: String!) {\n    mCreateUser(first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateUser($user_id: String!, $first_name: String, $last_name: String, $email: String, $role: String, $password: String) {\n    mUpdateUser(user_id: $user_id, first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"): (typeof documents)["\n  mutation updateUser($user_id: String!, $first_name: String, $last_name: String, $email: String, $role: String, $password: String) {\n    mUpdateUser(user_id: $user_id, first_name: $first_name, last_name: $last_name, email: $email, role: $role, password: $password) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteUser($user_id: String!) {\n    mDeleteUser(user_id: $user_id) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"): (typeof documents)["\n  mutation deleteUser($user_id: String!) {\n    mDeleteUser(user_id: $user_id) {\n        id\n        first_name\n        last_name\n        email\n        role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllUsers($offset: Int, $limit: Int) {\n    qUsers(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n    }\n  }\n"): (typeof documents)["\n  query getAllUsers($offset: Int, $limit: Int) {\n    qUsers(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllStudents($offset: Int, $limit: Int) {\n    qStudents(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n        requested_book_ids\n    }\n  }\n"): (typeof documents)["\n  query getAllStudents($offset: Int, $limit: Int) {\n    qStudents(offset: $offset, limit: $limit) {\n        id\n        first_name\n        last_name\n        role\n        requested_book_ids\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUser($id: String!) {\n    qUser(id: $id) {\n        id\n        first_name\n        role\n        requested_book_ids\n    }\n  }\n"): (typeof documents)["\n  query getUser($id: String!) {\n    qUser(id: $id) {\n        id\n        first_name\n        role\n        requested_book_ids\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;