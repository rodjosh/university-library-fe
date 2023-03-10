import MenuItem from '@components/organisms/Menu/MenuItem';
import { useUsers } from '@hooks/user';
import { routes } from '@utils/routes';

const MenuLibrarian = () => {
  const { isLibrarian } = useUsers();
  if (!isLibrarian) return null;

  return (
    <>
      <MenuItem href={routes.librarian} text="Home" />
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

export default MenuLibrarian;
