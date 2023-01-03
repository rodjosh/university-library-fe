import { Button, TableCell, TableRow } from '@mui/material';

import { useLibrarian } from '@hooks/librarian';
import { useUser } from '@hooks/user';

interface BookRequestRowProps {
  id: string;
  book_id: string;
}

const BookRequestRow = ({ id, book_id }: BookRequestRowProps) => {
  const { returnBook } = useLibrarian();
  const { user } = useUser(id);

  const returnBookFun = () => {
    returnBook({
      variables: { book_id, student_id: id },
      onCompleted: () => {
        location.reload();
      },
    }).then();
  };

  return (
    <TableRow>
      <TableCell>{user?.first_name}</TableCell>
      <TableCell align="right">{user?.last_name}</TableCell>
      <TableCell align="right">{user?.email}</TableCell>

      <TableCell align="right">
        <Button onClick={returnBookFun} variant="contained">
          Mark as Returned
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BookRequestRow;
