import { ReactNode } from 'react';
import { Roboto } from '@next/font/google';

import { StyledMain } from './styles';

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return <StyledMain className={roboto.className}>{children}</StyledMain>;
};

export default MainWrapper;
