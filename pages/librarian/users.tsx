import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import UserLayout from '@components/templates/UserLayout';
import { useLibrarian } from '@hooks/librarian';

const UsersPage = () => {
  const { usersRes } = useLibrarian();
  if (!usersRes) return null;

  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Here is the list of all the users that currently are registered in the
        system of the university
      </Typography>

      <Table sx={{ my: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {usersRes?.qUsers?.map((user) => (
            <TableRow key={user?._id}>
              <TableCell>{user?.first_name}</TableCell>
              <TableCell align="right">{user?.last_name}</TableCell>
              <TableCell align="right">{user?.role}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </UserLayout>
  );
};

export default UsersPage;
