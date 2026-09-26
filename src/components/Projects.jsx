import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowOutward, Close, GitHub, Inventory2, NavigateBefore, NavigateNext, School } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, Chip, Container, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { projects } from '../data/data.js';

const coverIcons = { inventory: Inventory2, school: School, github: GitHub };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="text.secondary" fontWeight={700}>DIPILIH DENGAN SENGAJA</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'end' }} sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mt: 0.5, fontSize: { xs: 34, md: 44 } }}>Proyek pilihan</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 360, mt: { xs: 1, sm: 0 } }}>Beberapa hal yang pernah saya rancang, bangun, dan pelajari.</Typography>
        </Stack>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: 2 }}>
          {projects.map((project, index) => (
            <Card key={project.title} component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.1 }} sx={{ height: '100%', border: 1, borderColor: 'divider', bgcolor: 'background.default' }}>
              <CardActionArea onClick={() => openProject(project)} aria-label={`Lihat detail ${project.title}`}>
                {project.images.length > 0 ? (
                  <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1}>
                    {project.images.map((image) => (
                      <SwiperSlide key={image}>
                        <Box component="img" src={image} alt={`Tampilan ${project.title}`} loading="lazy" sx={{ width: '100%', aspectRatio: '1.55', objectFit: 'cover', display: 'block' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <Box sx={{ aspectRatio: '1.55', display: 'grid', placeContent: 'center', justifyItems: 'center', gap: 1, bgcolor: 'secondary.main', color: 'primary.main' }}>
                    {(() => {
                      const CoverIcon = coverIcons[project.coverIcon];
                      return <CoverIcon sx={{ fontSize: 42 }} />;
                    })()}
                    <Typography variant="overline" fontWeight={700}>{project.coverLabel}</Typography>
                  </Box>
                )}
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="overline" color="text.secondary" fontWeight={700}>{project.category}</Typography>
                  <Typography variant="h5" sx={{ mt: 0.4, fontSize: 22 }}>{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, minHeight: 60, lineHeight: 1.7 }}>{project.description}</Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mt: 2 }}>
                    {project.technologies.map((technology) => <Chip key={technology} size="small" label={technology} />)}
                  </Stack>
                </CardContent>
              </CardActionArea>
              <Stack direction="row" spacing={1} sx={{ px: 2.5, pb: 2.5, mt: -1 }}>
                {project.demo && <Button component="a" href={project.demo} target="_blank" rel="noreferrer" size="small" endIcon={<ArrowOutward />} onClick={(event) => event.stopPropagation()}>Live Demo</Button>}
                {project.source && <Button component="a" href={project.source} target="_blank" rel="noreferrer" size="small" startIcon={<GitHub />} onClick={(event) => event.stopPropagation()}>Source Code</Button>}
              </Stack>
            </Card>
          ))}
        </Box>
      </Container>
      <Dialog
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        fullWidth
        maxWidth="sm"
        scroll="paper"
        PaperProps={{
          sx: {
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogContent sx={{ p: 0, position: 'relative', flex: '0 0 auto', overflowY: 'visible' }}>
              {selectedProject.images.length > 0 && (
                <Box sx={{ position: 'relative' }}>
                  <Box component="img" src={selectedProject.images[currentImageIndex]} alt={`Tampilan ${selectedProject.title}`} sx={{ display: 'block', width: '100%', aspectRatio: '1.6', maxHeight: 400, objectFit: 'cover' }} />
                  {selectedProject.images.length > 1 && (
                    <>
                      <IconButton aria-label="Gambar sebelumnya" onClick={() => setCurrentImageIndex((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length)} sx={{ position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)', bgcolor: 'rgba(0, 0, 0, 0.55)', color: 'common.white', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.75)' } }}>
                        <NavigateBefore />
                      </IconButton>
                      <IconButton aria-label="Gambar berikutnya" onClick={() => setCurrentImageIndex((index) => (index + 1) % selectedProject.images.length)} sx={{ position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)', bgcolor: 'rgba(0, 0, 0, 0.55)', color: 'common.white', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.75)' } }}>
                        <NavigateNext />
                      </IconButton>
                    </>
                  )}
                  <Typography aria-live="polite" variant="caption" sx={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', px: 1.25, py: 0.5, borderRadius: 4, bgcolor: 'rgba(0, 0, 0, 0.65)', color: 'common.white' }}>
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </Typography>
                </Box>
              )}
            </DialogContent>
            <DialogTitle sx={{ pr: 7, pb: 0 }}>
              <Typography variant="overline" color="text.secondary" fontWeight={700}>{selectedProject.category}</Typography>
              <Typography variant="h4" sx={{ fontSize: 28 }}>{selectedProject.title}</Typography>
            </DialogTitle>
            <IconButton aria-label="Tutup detail proyek" onClick={() => setSelectedProject(null)} sx={{ position: 'absolute', right: 12, top: 12, zIndex: 1, bgcolor: 'background.paper', boxShadow: 1, '&:hover': { bgcolor: 'background.paper' } }}><Close /></IconButton>
            <DialogContent sx={{ flex: '0 0 auto', overflowY: 'visible' }}>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{selectedProject.details}</Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mt: 2.5 }}>
                {selectedProject.technologies.map((technology) => <Chip key={technology} size="small" label={technology} />)}
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 2.5, mb: 1 }}>
                {selectedProject.demo && <Button component="a" href={selectedProject.demo} target="_blank" rel="noreferrer" variant="contained" endIcon={<ArrowOutward />}>Live Demo</Button>}
                {selectedProject.source && <Button component="a" href={selectedProject.source} target="_blank" rel="noreferrer" startIcon={<GitHub />}>GitHub</Button>}
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}