import { motion } from 'framer-motion';
import { AlternateEmail, GitHub, Instagram, LinkedIn, NorthEast } from '@mui/icons-material';
import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { profile } from '../data/data.js';

const socialIcons = { linkedin: LinkedIn, github: GitHub, instagram: Instagram, email: AlternateEmail };

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 9, md: 14 } }}>
      <Container maxWidth="lg">
        <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, gap: 4, alignItems: 'end' }}>
          <Box>
            <Typography variant="overline" color="text.secondary" fontWeight={700}>PUNYA PROYEK ATAU PELUANG?</Typography>
            <Typography variant="h2" sx={{ mt: 0.5, fontSize: { xs: 38, md: 56 }, maxWidth: 620 }}>Mari buat sesuatu yang berarti.</Typography>
            <Typography component="a" href={`mailto:${profile.email}`} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mt: 2, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              {profile.email}<NorthEast fontSize="small" />
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target={social.icon === 'email' ? undefined : '_blank'}
                  rel={social.icon === 'email' ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  sx={{ width: 48, height: 48, border: 1, borderColor: 'divider', transition: 'transform 160ms ease, background-color 160ms ease', '&:hover': { transform: 'translateY(-3px)', bgcolor: 'secondary.main', borderColor: 'secondary.main', color: 'primary.contrastText' } }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}