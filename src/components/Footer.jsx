import { Box, Container, Stack, Typography } from '@mui/material';
import { profile } from '../data/data.js';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 2.5, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={1}>
          <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} {profile.name}. Hak cipta dilindungi.</Typography>
          <Typography variant="caption" color="text.secondary">Dirancang dan dibangun dengan rasa ingin tahu.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}