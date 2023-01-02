import { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import {
  CREATE_USER,
  DELETE_USER,
  LOGIN_USER,
  UPDATE_USER,
} from '@graphql/mutations/user';

import { GET_STUDENTS, GET_USER, GET_USERS } from '@graphql/queries/user';
import { UserContext } from '@contexts/user';
import { useRouter } from 'next/router';
import { routes } from '@utils/routes';

export const useUsers = () => {
  const { user, setUser } = useContext(UserContext);
  const [loginUser] = useMutation(LOGIN_USER);

  const { data: userRes } = useQuery(GET_USER, {
    variables: { id: user?.id ?? '' },
    skip: !user?.id,
  });

  let isLibrarian = user?.role === 'librarian';
  let isStudent = user?.role === 'student';

  return {
    user,
    isLibrarian,
    isStudent,
    userRes,

    loginUser,
    setUser,
  };
};

export const useUser = (id: string) => {
  const { data } = useQuery(GET_USER, {
    variables: { id },
  });

  return {
    user: data?.qUser,
  };
};

export const useLibrarian = () => {
  const { user } = useUsers();
  const router = useRouter();

  let isLibrarian = true;

  if (!user || user?.role !== 'librarian') {
    isLibrarian = false;
    router.push(routes.home).then();
  }

  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const { data: usersRes } = useQuery(GET_USERS);
  const { data: studentsRes } = useQuery(GET_STUDENTS);

  return {
    isLibrarian,
    user,
    usersRes,
    studentsRes,
    createUser,
    updateUser,
    deleteUser,
  };
};

export const useStudent = () => {
  const { user } = useUsers();
  const router = useRouter();

  let isStudent = true;

  if (!user || user?.role !== 'student') {
    isStudent = false;
    router.push(routes.home).then();
  }

  return {
    user,
    isStudent,
  };
};
