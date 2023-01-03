import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { useUsers } from '@hooks/user';
import { useBooks } from '@hooks/book';

import { CREATE_USER, DELETE_USER, UPDATE_USER } from '@graphql/mutations/user';
import { GET_STUDENTS, GET_USERS } from '@graphql/queries/user';
import { routes } from '@utils/routes';
import { useEffect } from 'react';

export const useLibrarian = () => {
  const { user, isLibrarian } = useUsers();
  const booksHook = useBooks();
  const router = useRouter();

  useEffect(() => {
    if (!isLibrarian) router.push(routes.home).then();
  }, [isLibrarian, router, user]);

  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const { data: usersRes } = useQuery(GET_USERS);
  const { data: studentsRes } = useQuery(GET_STUDENTS);

  return {
    user,
    isLibrarian,

    usersRes,
    studentsRes,

    createUser,
    updateUser,
    deleteUser,

    ...booksHook,
  };
};
