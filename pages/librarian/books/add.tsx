import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';

import UserLayout from '@components/templates/UserLayout';
import { useLibrarian } from '@hooks/librarian';
import { routes } from '@utils/routes';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  published_year: yup.number().required('Published Year is required'),
  genre: yup.string().required('Genre is required'),
  available_copies: yup.number().required('Available Copies is required'),
});

const AddBookPage = () => {
  const { createBook } = useLibrarian();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      published_year: 0,
      genre: '',
      available_copies: 0,
    },
    validationSchema,
    onSubmit: ({ title, author, published_year, genre, available_copies }) => {
      createBook({
        variables: {
          title,
          author,
          published_year,
          genre,
          available_copies,
        },
        onCompleted: () => {
          location.href = routes.librarianBooks;
        },
      }).then();
    },
  });

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>

      <Typography variant="body1" gutterBottom>
        Add a new book so the students of the university can check the available
        copies of it and also request one, then the librarian can mark them as
        returned once it is returned
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="title"
          label="Title"
          sx={{ mt: 1 }}
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          fullWidth
        />

        <TextField
          name="author"
          label="Author"
          sx={{ mt: 1 }}
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          fullWidth
        />

        <TextField
          name="published_year"
          label="Published Year"
          sx={{ mt: 1 }}
          value={formik.values.published_year}
          onChange={formik.handleChange}
          error={
            formik.touched.published_year &&
            Boolean(formik.errors.published_year)
          }
          helperText={
            formik.touched.published_year && formik.errors.published_year
          }
          fullWidth
          type="number"
        />

        <TextField
          name="genre"
          label="Genre"
          sx={{ mt: 1 }}
          value={formik.values.genre}
          onChange={formik.handleChange}
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
          fullWidth
        />

        <TextField
          name="available_copies"
          label="Available Copies"
          sx={{ mt: 1 }}
          value={formik.values.available_copies}
          type="number"
          onChange={formik.handleChange}
          error={
            formik.touched.available_copies &&
            Boolean(formik.errors.available_copies)
          }
          helperText={
            formik.touched.available_copies && formik.errors.available_copies
          }
          fullWidth
        />

        <Button variant="contained" type="submit" sx={{ mt: 1 }}>
          Add
        </Button>
      </form>
    </UserLayout>
  );
};

export default AddBookPage;
