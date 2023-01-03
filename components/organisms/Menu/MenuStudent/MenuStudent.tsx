import MenuItem from '@components/organisms/Menu/MenuItem';

import { useUsers } from '@hooks/user';
import { routes } from '@utils/routes';

const MenuStudent = () => {
  const { isStudent } = useUsers();
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
