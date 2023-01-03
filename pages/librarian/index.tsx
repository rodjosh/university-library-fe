import { Typography } from '@mui/material';
import UserLayout from '@components/templates/UserLayout';

const LibrarianPage = () => {
  return (
    <UserLayout>
      <Typography variant="h4" gutterBottom>
        Librarian Page
      </Typography>

      <Typography variant="body1" gutterBottom>
        Welcome to the librarian page of the university library, please select
        of the pages on the left menu
      </Typography>
    </UserLayout>
  );
};

export default LibrarianPage;
