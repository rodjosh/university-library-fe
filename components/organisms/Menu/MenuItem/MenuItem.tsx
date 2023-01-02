import { Box } from '@mui/material';
import Anchor from '@components/atoms/Anchor';

const MenuItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <Box sx={{ py: 1 }}>
      <Anchor href={href}>{text}</Anchor>
    </Box>
  );
};

export default MenuItem;
