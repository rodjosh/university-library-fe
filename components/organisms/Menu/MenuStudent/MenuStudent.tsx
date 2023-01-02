import MenuItem from '@components/organisms/Menu/MenuItem';
import { routes } from '@utils/routes';
import { useStudent } from '@hooks/user';

const MenuStudent = () => {
  const { isStudent } = useStudent();
  if (!isStudent) return null;

  return (
    <>
      <MenuItem href={routes.student} text="Home" />
      <MenuItem href={routes.studentBooks} text="Books" />
      <MenuItem href={routes.studentRequestedBooks} text="Requested Books" />
    </>
  );
};

export default MenuStudent;
