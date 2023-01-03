import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';

import UserLayout from '@components/templates/UserLayout';
import { useLibrarian } from '@hooks/librarian';
import { routes } from '@utils/routes';
import * as yup from 'yup';

const validationSchema = yup.object({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const AddStudentPage = () => {
  const { createUser } = useLibrarian();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      role: 'student',
      password: '',
    },
    validationSchema,
    onSubmit: ({ first_name, last_name, email, role, password }) => {
      createUser({
        variables: {
          first_name,
          last_name,
          email,
          role,
          password,
        },
        onCompleted: () => {
          location.href = routes.librarianUsers;
        },
      }).then();
    },
  });

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Add Student
      </Typography>

      <Typography variant="body1" gutterBottom>
        Add a new student to the university software, this way they will be able
        to check the available copies of books and also request them
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="first_name"
          label="First Name"
          sx={{ mt: 1 }}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
          fullWidth
        />

        <TextField
          name="last_name"
          label="Last Name"
          sx={{ mt: 1 }}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
          fullWidth
        />

        <TextField
          name="email"
          label="Email"
          sx={{ mt: 1 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />

        <TextField
          name="password"
          label="Password"
          sx={{ mt: 1 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />

        <Button variant="contained" type="submit" sx={{ mt: 1 }}>
          Add
        </Button>
      </form>
    </UserLayout>
  );
};

export default AddStudentPage;
