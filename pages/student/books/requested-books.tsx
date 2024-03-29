import { useState } from 'react';
import { useFormik } from 'formik';

import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import UserLayout from '@components/templates/UserLayout';
import Anchor from '@components/atoms/Anchor';

import { routes } from '@utils/routes';
import { useBooks } from '@hooks/book';

const BookListRequestedPage = () => {
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [genre, setGenre] = useState<string>();

  const formikSearch = useFormik({
    initialValues: {
      title: undefined,
      author: undefined,
      genre: undefined,
    },
    onSubmit: ({ title: titleForm, author: authorForm, genre: genreForm }) => {
      setTitle(titleForm);
      setAuthor(authorForm);
      setGenre(genreForm);
    },
  });

  const { booksRequestedByStudent } = useBooks({ title, author, genre });
  if (!booksRequestedByStudent) return null;

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Requested Books List
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Here will appear all the books that you have requested and not yet
        marked as returned by the librarian
      </Typography>

      <form onSubmit={formikSearch.handleSubmit}>
        <Box
          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
        >
          <TextField
            name="title"
            label="Title"
            value={formikSearch.values.title}
            onChange={formikSearch.handleChange}
          />
          <TextField
            name="author"
            label="Author"
            value={formikSearch.values.author}
            onChange={formikSearch.handleChange}
            sx={{ ml: 2 }}
          />
          <TextField
            name="genre"
            label="Genre"
            sx={{ mx: 2 }}
            value={formikSearch.values.genre}
            onChange={formikSearch.handleChange}
          />
          <Button type="submit" variant="contained" sx={{ height: '100%' }}>
            Search
          </Button>
        </Box>
      </form>

      <Table sx={{ my: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Published Year</TableCell>
            <TableCell align="right">Available Copies</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {booksRequestedByStudent?.qBooksRequestedByStudent?.map((book) => (
            <TableRow key={book?._id}>
              <TableCell>{book?.title}</TableCell>
              <TableCell align="right">{book?.author}</TableCell>
              <TableCell align="right">{book?.genre}</TableCell>
              <TableCell align="right">{book?.published_year}</TableCell>
              <TableCell align="right">{book?.available_copies}</TableCell>

              <TableCell align="right">
                <Anchor href={`${routes.studentBooks}/${book?._id}`}>
                  <Button variant="contained">See Book</Button>
                </Anchor>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </UserLayout>
  );
};

export default BookListRequestedPage;
