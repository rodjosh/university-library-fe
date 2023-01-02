import { Box } from '@mui/material';

import MenuLibrarian from '@components/organisms/Menu/MenuLibrarian';
import MenuStudent from '@components/organisms/Menu/MenuStudent';

import { useUsers } from '@hooks/user';

export const Menu = () => {
  const { isLibrarian, isStudent } = useUsers();

  return (
    <Box
      sx={{
        background: '#0A2647',
        color: 'white',
        width: 300,
        height: '100%',
        minHeight: '100vh',
        p: 3,
      }}
    >
      {isLibrarian && <MenuLibrarian />}
      {isStudent && <MenuStudent />}
    </Box>
  );
};

export default Menu;