import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '@utils/routes';

interface User {
  _id?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  role?: string | null;
}

interface Context {
  user?: User;
  setUser?: (user: User) => void;
}

export const UserContext = createContext<Context>({});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setLoaded(true);
    const savedUserJson = localStorage?.getItem('user');
    setUser(savedUserJson ? JSON.parse(savedUserJson) : undefined);
  }, []);

  if (!loaded) return null;

  const setUserFun = (user: User) => {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
    setUser(user);
  };

  const context: Context = {
    user,
    setUser: setUserFun,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
