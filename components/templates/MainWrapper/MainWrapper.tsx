import { ReactNode } from 'react';
import { Roboto } from '@next/font/google';

import Contexts from '@components/templates/Contexts';

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Contexts>
      <main className={roboto.className}>{children}</main>
    </Contexts>
  );
};

export default MainWrapper;
