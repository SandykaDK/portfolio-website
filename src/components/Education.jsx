import { motion } from 'framer-motion';
import { ArrowOutward } from '@mui/icons-material';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { education } from '../data/data.js';

export default function Education() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: 'background.paper', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'end' }} sx={{ mb: 5 }}>
          <Box>
            <Typography variant="overline" color="text.secondary" fontWeight={700}>LATAR BELAKANG</Typography>
            <Typography variant="h2" sx={{ mt: 0.5, fontSize: { xs: 34, md: 44 } }}>Pendidikan</Typography>
          </Box>
          <ArrowOutward sx={{ color: 'secondary.main', display: { xs: 'none', sm: 'block' } }} />
        </Stack>
        <Grid container spacing={2}>
          {education.map((item, index) => (
            <Grid item xs={12} md={6} key={item.institution}>
              <Box component={motion.article} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.1 }} sx={{ height: '100%', p: { xs: 2.5, md: 3.5 }, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <Typography variant="overline" color="text.secondary" fontWeight={700}>{item.period}</Typography>
                <Typography variant="h5" sx={{ mt: 1, fontSize: 21 }}>{item.institution}</Typography>
                <Typography sx={{ mt: 0.5, color: 'primary.main', fontWeight: 600 }}>{item.degree}</Typography>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.75 }}>{item.achievement}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}