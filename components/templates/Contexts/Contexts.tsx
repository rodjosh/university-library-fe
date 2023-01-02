import { ReactNode } from 'react';
import { UserProvider } from 'contexts/user';
import { ApolloWithClient } from 'contexts/apollo';

export const Contexts = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloWithClient>
      <UserProvider>{children}</UserProvider>
    </ApolloWithClient>
  );
};

export default Contexts;
