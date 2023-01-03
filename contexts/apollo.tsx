import { ReactNode } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

export const ApolloWithClient = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
