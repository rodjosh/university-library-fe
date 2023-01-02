import MenuItem from '@components/organisms/Menu/MenuItem';
import { routes } from '@utils/routes';
import { useStudent } from '@hooks/user';

const MenuStudent = () => {
  const { isStudent } = useStudent();
  if (!isStudent) return null;

  return (
    <>
      <MenuItem href={routes.studen} text="Home" />
      <MenuItem href={routes.librarianAdd} text="Add Librarian" />
      <MenuItem href={routes.librarianAddBook} text="Add Book" />
      <MenuItem href={routes.librarianAddStudent} text="Add Student" />
      <MenuItem href={routes.librarianBooks} text="Books" />
      <MenuItem href={routes.librarianCheckoutBooks} text="Checkout Books" />
      <MenuItem href={routes.librarianUsers} text="Users" />
      <MenuItem href={routes.librarianStudents} text="Students" />
    </>
  );
};

export default MenuStudent;
