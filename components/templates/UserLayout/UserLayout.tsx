import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import MainWrapper from '@components/templates/MainWrapper';
import Menu from '@components/organisms/Menu';

import { useUsers } from '@hooks/user';
import { routes } from '@utils/routes';

const UserLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUsers();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(routes.home).then();
  }, [router, user]);

  if (!user) return null;

  return (
    <MainWrapper>
      <Menu />
      <Box sx={{ flexGrow: 1, px: 2, py: 1 }}>{children}</Box>
    </MainWrapper>
  );
};

export default UserLayout;
