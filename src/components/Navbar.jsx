import { useState } from 'react';
import { DarkMode, LightMode, Menu as MenuIcon, Close } from '@mui/icons-material';
import { AppBar, Box, Container, Drawer, FormControlLabel, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material';
import { profile } from '../data/data.js';

const links = [
  ['About', 'about'],
  ['Education', 'education'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

export default function Navbar({ mode, onToggleMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  const navLinks = (mobile = false) => links.map(([label, id]) => (
    <Typography
      key={id}
      component="a"
      href={`#${id}`}
      onClick={closeDrawer}
      variant="body2"
      sx={{ color: 'text.secondary', fontWeight: 600, '&:hover': { color: 'text.primary' }, py: mobile ? 1.2 : 0 }}
    >
      {label}
    </Typography>
  ));

  return (
    <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: 'space-between' }}>
          <Typography component="a" href="#about" variant="h6" sx={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            {profile.initials}<Box component="span" sx={{ color: 'secondary.main' }}>.</Box>
          </Typography>
          <Stack direction="row" spacing={3.5} sx={{ display: { xs: 'none', md: 'flex' } }}>{navLinks()}</Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <FormControlLabel
              sx={{ m: 0, '& .MuiFormControlLabel-label': { display: 'none' } }}
              control={(
                <Switch
                  size="small"
                  checked={mode === 'dark'}
                  onChange={onToggleMode}
                  inputProps={{ 'aria-label': 'Aktifkan mode gelap' }}
                  icon={<LightMode fontSize="small" />}
                  checkedIcon={<DarkMode fontSize="small" />}
                />
              )}
              label="Mode gelap"
            />
            <IconButton aria-label="Buka navigasi" onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 280, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight={700}>Navigasi</Typography>
            <IconButton aria-label="Tutup navigasi" onClick={closeDrawer}><Close /></IconButton>
          </Stack>
          <Stack>{navLinks(true)}</Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}