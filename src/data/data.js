export const profile = {
  name: 'Nadia Putri',
  initials: 'NP',
  role: 'Fullstack Developer',
  location: 'Bandung, Indonesia',
  email: 'hello@nadiaputri.dev',
  bio: 'Saya membangun produk digital yang terasa sederhana bagi pengguna dan tetap kokoh di balik layar. Saya menikmati kolaborasi lintas disiplin, dari ide awal hingga fitur siap digunakan.',
  portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
  cvUrl: '/Nadia-Putri-CV.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Email', href: 'mailto:hello@nadiaputri.dev', icon: 'email' },
  ],
};

export const education = [
  {
    institution: 'Institut Teknologi Bandung',
    degree: 'S1 Teknik Informatika',
    period: '2018 — 2022',
    achievement: 'Lulus dengan IPK 3,78/4,00. Fokus pada rekayasa perangkat lunak dan interaksi manusia-komputer.',
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Cloud Computing Learning Path',
    period: '2021',
    achievement: 'Menyelesaikan program intensif pengembangan aplikasi cloud dan kolaborasi produk berbasis tim.',
  },
];

export const experience = [
  {
    company: 'Ruang Tumbuh Digital',
    position: 'Fullstack Developer',
    period: 'Jan 2023 — Sekarang',
    location: 'Bandung · Hybrid',
    responsibilities: [
      'Mengembangkan dashboard operasional yang digunakan oleh lebih dari 2.000 pengguna aktif.',
      'Merancang REST API dan mengoptimalkan query database untuk memangkas waktu muat halaman.',
      'Berkolaborasi dengan product designer dan QA dalam siklus rilis dua mingguan.',
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'Kreasi Labs',
    position: 'Frontend Developer Intern',
    period: 'Jun 2022 — Des 2022',
    location: 'Jakarta · Remote',
    responsibilities: [
      'Membangun komponen UI reusable untuk aplikasi manajemen inventaris.',
      'Meningkatkan aksesibilitas dan konsistensi antarmuka bersama tim desain.',
    ],
    skills: ['React', 'TypeScript', 'MUI', 'Jest'],
  },
];

export const projects = [
  {
    title: 'RuangKerja',
    category: 'SaaS · 2025',
    description: 'Dashboard kolaborasi yang membantu tim kecil menjaga proyek dan prioritas tetap terarah.',
    details: 'RuangKerja menyatukan ringkasan proyek, aktivitas tim, dan pengelolaan tugas dalam satu ruang kerja. Saya menangani frontend, merancang kontrak API bersama backend, dan menambahkan sistem filter yang tetap responsif pada data besar.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MUI'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    ],
    demo: 'https://example.com',
    source: 'https://github.com/',
  },
  {
    title: 'Panen Lokal',
    category: 'E-commerce · 2024',
    description: 'Pengalaman belanja hasil tani lokal dengan alur pemesanan yang ringkas dan transparan.',
    details: 'Panen Lokal menghubungkan konsumen dengan petani di sekitar kota. Fitur inti meliputi katalog produk, status ketersediaan, dan proses checkout yang dirancang untuk penggunaan mobile.',
    technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
    images: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    ],
    demo: 'https://example.com',
    source: 'https://github.com/',
  },
  {
    title: 'Kelana',
    category: 'Travel · 2024',
    description: 'Perencana perjalanan akhir pekan dengan rekomendasi tempat yang dikurasi komunitas.',
    details: 'Kelana membantu pengguna menyusun itinerary ringan, menyimpan tempat favorit, dan membagikan rencana perjalanan. Saya membangun antarmuka pencarian dan peta interaktif serta menyiapkan komponen yang aksesibel.',
    technologies: ['Next.js', 'TypeScript', 'Mapbox', 'Prisma'],
    images: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85',
    ],
    demo: 'https://example.com',
    source: 'https://github.com/',
  },
];