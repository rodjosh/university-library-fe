import { createContext, ReactNode, useState } from 'react';

interface User {
  id?: string | null;
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
  const [user, setUser] = useState<User>();

  const context: Context = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
