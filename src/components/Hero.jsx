import { motion } from 'framer-motion';
import { ArrowDownward, ArrowOutward } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material';
import { profile } from '../data/data.js';

export default function Hero() {
  return (
    <Box id="about" component="section" sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 16 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' }, alignItems: 'center', gap: { xs: 5, md: 8 } }}>
          <Box component={motion.div} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1.4 }}>
              {profile.location} <Box component="span" sx={{ color: 'secondary.main' }}>·</Box> OPEN TO WORK
            </Typography>
            <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: 48, sm: 64, md: 78 }, lineHeight: 1.02, maxWidth: 680 }}>
              Halo, saya {profile.name.split(' ')[0]}<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
            </Typography>
            <Typography variant="h5" sx={{ mt: 2.5, color: 'text.secondary', fontWeight: 500 }}>{profile.headline}</Typography>
            <Typography sx={{ mt: 2, maxWidth: 570, color: 'text.secondary', lineHeight: 1.8 }}>{profile.bio}</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4, alignItems: { xs: 'stretch', sm: 'center' } }}>
              <Button variant="contained" color="primary" href={profile.cvUrl} download={profile.cvFileName} endIcon={<ArrowDownward />}>Download CV</Button>
              <Button variant="text" href="#contact" endIcon={<ArrowOutward />}>Hubungi Saya</Button>
            </Stack>
          </Box>
          <Box component={motion.div} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} sx={{ position: 'relative', width: '100%', maxWidth: 400, justifySelf: { xs: 'center', md: 'end' } }}>
            <Box sx={{ position: 'absolute', inset: '9% -7% -7% 12%', bgcolor: 'secondary.main', borderRadius: 3, opacity: 0.85 }} />
            <Avatar
              src={profile.portrait}
              alt={`Foto profil ${profile.name}`}
              variant="rounded"
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 470, sm: 560 },
                borderRadius: 2,
                bgcolor: 'divider',
                filter: 'saturate(0.78)',
                '& img': { objectPosition: 'center top' },
              }}
            />
            <Box sx={{ position: 'absolute', left: -16, bottom: 22, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1, px: 2, py: 1.3 }}>
              <Typography variant="caption" color="text.secondary">Saat ini</Typography>
              <Typography variant="body2" fontWeight={700}>Junior Software Quality Assurance</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}