import { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { UserContext } from '@contexts/user';
import { LOGIN_USER } from '@graphql/mutations/user';
import { GET_USER } from '@graphql/queries/user';

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
    userRes,
    isLibrarian,
    isStudent,

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
