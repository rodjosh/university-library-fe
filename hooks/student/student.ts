import { useRouter } from 'next/router';

import { useUsers } from '@hooks/user';
import { routes } from '@utils/routes';
import { useBook, useBooks } from '@hooks/book';
import { useEffect } from 'react';

interface UseStudentProps {
  book_id?: string;
}

export const useStudent = (props?: UseStudentProps) => {
  const { user, isStudent } = useUsers();
  const { books, checkoutBook } = useBooks();
  const { book, refetchBook } = useBook(props?.book_id);

  const router = useRouter();

  useEffect(() => {
    if (!isStudent) router.push(routes.home).then();
  }, [isStudent, router, user]);

  return {
    user,
    isStudent,

    book,
    books,
    refetchBook,
    checkoutBook,
  };
};
