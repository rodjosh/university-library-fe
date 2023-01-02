import Link from 'next/link';
import { ReactNode } from 'react';

interface AnchorProps {
  href: string;
  newTab?: boolean;
  children: ReactNode;
}

const Anchor = ({ href, newTab, children }: AnchorProps) => {
  return (
    <Link
      href={href}
      passHref
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
};

export default Anchor;
