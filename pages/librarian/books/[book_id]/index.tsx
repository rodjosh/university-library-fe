import { useRouter } from 'next/router';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import UserLayout from '@components/templates/UserLayout';
import BookRequestRow from '@components/molecules/BookRequestRow';

import { useLibrarian } from '@hooks/librarian';
import { useBook } from '@hooks/book';

const BookPage = () => {
  const router = useRouter();
  const { user } = useLibrarian();

  const book_id = router?.query.book_id as string;
  const { book } = useBook(book_id);

  if (!user || !book) return null;

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Book Page
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ pb: 3 }}>
        This is the personalized page for an specific book, here you will find
        all the available information for this book
      </Typography>

      {book && (
        <>
          <Box>
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

          <Table sx={{ my: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {book?.qBook?.checkout_by_user_ids?.map((id) => {
                if (!id || !book?.qBook?.id) return null;

                return (
                  <BookRequestRow key={id} id={id} book_id={book?.qBook?.id} />
                );
              })}
            </TableBody>
          </Table>
        </>
      )}
    </UserLayout>
  );
};

export default BookPage;
