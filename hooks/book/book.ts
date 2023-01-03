import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_BOOKS, GET_BOOK } from '@graphql/queries/book';

import {
  CHECKOUT_BOOK,
  CREATE_BOOK,
  DELETE_BOOK,
  RETURN_BOOK,
  UPDATE_BOOK,
} from '@graphql/mutations/book';

interface UseBooksProps {
  offset?: number;
  limit?: number;
  title?: string;
  author?: string;
  genre?: string;
}

export const useBooks = (props?: UseBooksProps) => {
  const [createBook] = useMutation(CREATE_BOOK);
  const [updateBook] = useMutation(UPDATE_BOOK);
  const [deleteBook] = useMutation(DELETE_BOOK);
  const [checkoutBook] = useMutation(CHECKOUT_BOOK);
  const [returnBook] = useMutation(RETURN_BOOK);

  const { data: books } = useQuery(GET_ALL_BOOKS, {
    variables: {
      offset: props?.offset,
      limit: props?.limit,
      title: props?.title,
      author: props?.author,
      genre: props?.genre,
    },
  });

  return {
    books,
    createBook,
    updateBook,
    deleteBook,
    checkoutBook,
    returnBook,
  };
};

export const useBook = (id?: string) => {
  const { data: book, refetch: refetchBook } = useQuery(GET_BOOK, {
    variables: { id: id ?? '' },
    skip: !id,
  });

  return {
    book,
    refetchBook,
  };
};
