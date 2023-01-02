import { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export const ApolloWithClient = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
