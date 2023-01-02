import { createContext, ReactNode, useState } from 'react';

export const UserContext = createContext({});

interface User {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: 'student' | 'librarian';
}

interface Context {
  user?: User;
  setUser?: (user: User) => void;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const context: Context = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
