import { Button, Container, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useUsers } from 'hooks/user';
import { useRouter } from 'next/router';
import { routes } from '@utils/routes';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const Login = () => {
  const { loginUser, setUser } = useUsers();

  const { user } = useUsers();
  const router = useRouter();

  if (user && user?.role) {
  }

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }, { setFieldError }) => {
      loginUser({
        variables: { email, password },
        onCompleted: (res) => {
          const user = res?.mLoginUser;

          if (!user) {
            setFieldError('password', 'Invalid username or password');
            return;
          }

          setUser && setUser(user);
          if (user?.role === 'student') router.push(routes.student).then();
          if (user?.role === 'librarian') router.push(routes.librarian).then();
        },
      }).then();
    },
  });

  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        University Library
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          sx={{ my: 1 }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>

      <Typography variant="body1" sx={{ pt: 2 }}>
        Test Credentials:
        <br /> <br />
        - Librarian: <br />
        email: test@gmail.com <br />
        pass: 1234
        <br /> <br />
        - Student: <br />
        email: test2@gmail.com <br />
        pass: 1234
      </Typography>
    </Container>
  );
};

export default Login;
