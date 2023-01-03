import { Box, Button, Snackbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import UserLayout from '@components/templates/UserLayout';
import { useStudent } from '@hooks/student';
import { routes } from '@utils/routes';

const BookPage = () => {
  const router = useRouter();
  const book_id = router?.query.book_id as string;

  const [snackMessage, setSnackMessage] = useState<string>();
  const [snackOpen, setSnackOpen] = useState<boolean>(false);
  const { user, book, checkoutBook } = useStudent({
    book_id,
  });

  if (!user || !book) return null;
  const toggleSnack = () => setSnackOpen(!snackOpen);

  const checkoutBookFun = () => {
    if (book?.qBook?.available_copies && book?.qBook?.available_copies < 1) {
      toggleSnack();
      setSnackMessage('Book no longer has available copies');
      return;
    }

    if (
      book?.qBook?.checkout_by_user_ids &&
      book?.qBook?.checkout_by_user_ids?.includes(user?.id ?? '')
    ) {
      toggleSnack();
      setSnackMessage('Checkout by user ID is already taken');
      return;
    }

    checkoutBook({
      variables: { book_id: book_id, student_id: user?.id as string },
      onCompleted: () => {
        location.href = routes.studentBooks;
      },
    }).then();
  };

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Book Page
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ pb: 3 }}>
        This is the personalized page for an specific book, here you will find
        all the available information for this book
      </Typography>

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={toggleSnack}
        message={snackMessage}
      />

      {book && (
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ pr: 3 }}>
            <Typography variant="body1" gutterBottom>
              <strong>Title: </strong> {book?.qBook?.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Author: </strong> {book?.qBook?.author}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Published Year: </strong> {book?.qBook?.published_year}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Genre: </strong> {book?.qBook?.genre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Available Copies: </strong>{' '}
              {book?.qBook?.available_copies}
            </Typography>
          </Box>

          <Box>
            <Button onClick={checkoutBookFun} variant="contained">
              Checkout Book
            </Button>
          </Box>
        </Box>
      )}
    </UserLayout>
  );
};

export default BookPage;
