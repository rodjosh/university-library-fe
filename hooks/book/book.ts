import { useMutation, useQuery } from '@apollo/client';
import {
  GET_ALL_BOOKS,
  GET_BOOK,
  GET_BOOKS_REQUESTED_BY_STUDENT,
  GET_BOOKS_REQUESTED_BY_STUDENTS,
} from '@graphql/queries/book';

import {
  CHECKOUT_BOOK,
  CREATE_BOOK,
  DELETE_BOOK,
  RETURN_BOOK,
  UPDATE_BOOK,
} from '@graphql/mutations/book';
import { useUsers } from '@hooks/user';

interface UseBooksProps {
  offset?: number;
  limit?: number;
  title?: string;
  author?: string;
  genre?: string;
}

export const useBooks = (props?: UseBooksProps) => {
  const { user } = useUsers();

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

  const { data: booksRequestedByStudents } = useQuery(
    GET_BOOKS_REQUESTED_BY_STUDENTS,
    {
      variables: {
        offset: props?.offset,
        limit: props?.limit,
        title: props?.title,
        author: props?.author,
        genre: props?.genre,
      },
    }
  );

  const { data: booksRequestedByStudent } = useQuery(
    GET_BOOKS_REQUESTED_BY_STUDENT,
    {
      variables: {
        student_id: user?._id ?? '',
        offset: props?.offset,
        limit: props?.limit,
        title: props?.title,
        author: props?.author,
        genre: props?.genre,
      },
      skip: !user?._id,
    }
  );

  return {
    books,
    booksRequestedByStudent,
    booksRequestedByStudents,

    createBook,
    updateBook,
    deleteBook,
    checkoutBook,
    returnBook,
  };
};

export const useBook = (id?: string) => {
  const { data: book } = useQuery(GET_BOOK, {
    variables: { id: id ?? '' },
    skip: !id,
  });

  return {
    book,
  };
};
