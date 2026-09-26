import { motion } from 'framer-motion';
import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { experience } from '../data/data.js';

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="text.secondary" fontWeight={700}>PERJALANAN PROFESIONAL</Typography>
        <Typography variant="h2" sx={{ mt: 0.5, mb: 5, fontSize: { xs: 34, md: 44 } }}>Pengalaman</Typography>
        <Stack spacing={2}>
          {experience.map((item, index) => (
            <Box key={`${item.company}-${item.position}`} component={motion.article} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.1 }} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '220px 1fr' }, gap: { xs: 2, md: 5 }, py: 3.5, borderTop: 1, borderColor: 'divider' }}>
              <Box>
                <Typography variant="body2" fontWeight={700}>{item.period}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{item.location}</Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontSize: 22 }}>{item.position}</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.4 }}>{item.company}</Typography>
                <Box component="ul" sx={{ pl: 2.2, my: 2, color: 'text.secondary', '& li': { pl: 0.5, mb: 0.7, lineHeight: 1.7 }, '& li::marker': { color: 'secondary.main' } }}>
                  {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </Box>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {item.skills.map((skill) => <Chip key={skill} size="small" label={skill} variant="outlined" />)}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}