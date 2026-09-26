export const profile = {
  name: 'Sandyka Dwi Kurniawan',
  initials: 'SDK',
  role: 'Junior Software Quality Assurance',
  headline: 'Menguji dengan teliti. Membantu produk lebih andal.',
  location: 'Mojokerto, Jawa Timur',
  email: 'sandyka472@gmail.com',
  phone: '+62 896-2010-6214',
  bio: 'Berlatar belakang pendidikan Sistem Informasi (IPK 3.82), saya memiliki pemahaman terkait Software Testing Lifecycle (STLC) dengan penguasaan tools seperti Postman, Playwright, dan SQL. Pengalaman praktis saya mencakup pengujian fungsional (Black-Box Testing), User Acceptance Testing (UAT), hingga pengembangan aplikasi web berbasis Laravel. Saya terbiasa bekerja secara terstruktur, analitis, dan berorientasi pada detail.',
  portrait: '/images/sandyka-photo.jpeg',
  cvUrl: '/CV_ATS_Sandyka.pdf',
  cvFileName: 'CV_ATS_Sandyka.pdf',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandykadk', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:sandyka472@gmail.com', icon: 'email' },
    { label: 'Telepon', href: 'tel:+6289620106214', icon: 'phone' },
  ],
};

export const education = [
  {
    institution: 'Universitas Dinamika',
    degree: 'S1 Sistem Informasi',
    gpa: '3,82',
    period: '2022 — 2026',
    logo: '/images/logo-undika.png',
    achievement: 'Mata kuliah relevan meliputi SQL, analisis dan desain sistem informasi, pengujian perangkat lunak, serta manajemen proyek sistem informasi.',
  },
];

export const experience = [
  {
    company: 'PT. Sofco Graha',
    position: 'Quality Assurance Intern',
    period: 'Feb 2025 — Agu 2025',
    location: '',
    logo: '/images/logo-sofco.jpeg',
    responsibilities: [
      'Merancang dan mengeksekusi 876 test case di Notion untuk aplikasi HRIS, Recruitment, dan KPI.',
      'Melacak masukan klien dan memvalidasi bug, serta menyusun 6 laporan progres bulanan untuk mendukung penyelesaian bersama tim developer.',
      'Menyusun 329 panduan pengguna dan traceability matrix untuk 329 menu HRIS.',
    ],
    skills: ['Postman', 'Playwright', 'SQL', 'Test Case', 'Bug Reporting', 'STLC'],
  },
  {
    company: 'Dinamika Cyber Sport',
    position: 'Community Manager',
    period: 'Agu 2023 — Agu 2025',
    location: '',
    logo: '/images/logo-dcs.png',
    responsibilities: [
      'Membangun hubungan dan interaksi positif di komunitas melalui program yang terarah di Discord.',
      'Meningkatkan engagement komunitas hingga 25%.',
    ],
    skills: ['Community Management', 'Discord', 'Communication'],
  },
  {
    company: 'Dinamika E-Sport Championship 2024',
    position: 'Event Coordinator',
    period: 'Des 2024',
    location: '',
    logo: '/images/logo-dcs.png',
    responsibilities: [
      'Merancang konsep dan timeline acara serta mengoordinasikan 4 divisi panitia untuk kompetisi dengan 180 peserta.',
      'Berkomunikasi dengan mitra dan sponsor serta mengawasi penggunaan anggaran acara.',
    ],
    skills: ['Event Planning', 'Team Coordination', 'Budget Management'],
  },
];

export const projects = [
  {
    title: 'Sistem Manajemen Stok Obat',
    category: 'Tugas Akhir · 2026',
    description: 'Sistem berbasis web untuk mendigitalisasi pencatatan persediaan 98 item obat di Puskesmas Pembantu Mojosulur.',
    details: 'Dikembangkan menggunakan Laravel dengan fitur pencatatan stok masuk dan keluar serta laporan persediaan. Metode FIFO dan Min-Max diterapkan untuk membantu pengelolaan stok. Pengujian Black-Box dan UAT dilakukan bersama 3 staf dengan tingkat penerimaan pengguna 90%.',
    technologies: ['Laravel', 'PHP', 'SQL', 'FIFO', 'Min-Max', 'Black-Box Testing', 'UAT'],
    images: [
      'https://picsum.photos/seed/medstock-1/1200/750',
      'https://picsum.photos/seed/medstock-2/1200/750',
      'https://picsum.photos/seed/medstock-3/1200/750',
    ],
    coverIcon: 'inventory',
    coverLabel: 'Manajemen persediaan obat',
    source: 'https://github.com/sandykadk/PustumedApp',
  },
  {
    title: 'Pelatihan Microsoft Word & Canva',
    category: 'Pengabdian Masyarakat · 2024',
    description: 'Kegiatan pengenalan Microsoft Word dan Canva untuk 93 siswa kelas 4 SDN Semolowaru 1.',
    details: 'Mendesain dan menyampaikan materi pelatihan, menyusun modul resmi, serta menerbitkan hasil kegiatan di Jurnal Pengabdian kepada Masyarakat Abdi Massa.',
    technologies: ['Microsoft Word', 'Canva', 'Penyusunan Modul', 'Publikasi Jurnal'],
    images: [],
    coverIcon: 'school',
    coverLabel: 'Pelatihan literasi digital',
  },
  {
    title: 'POS_Toko',
    category: 'GitHub Repository',
    description: 'Aplikasi POS Toko untuk mendukung proses transaksi dan pengelolaan toko.',
    details: 'Repository publik aplikasi POS Toko yang dikembangkan menggunakan JavaScript.',
    technologies: ['JavaScript', 'GitHub'],
    images: [],
    coverIcon: 'github',
    coverLabel: 'Point of Sale toko',
    source: 'https://github.com/sandykadk/POS_Toko',
  },
  {
    title: 'sauce_demo_playwright',
    category: 'GitHub Repository',
    description: 'Automated end-to-end (E2E) testing suite for SauceDemo website built with Playwright.',
    details: 'Repository publik berisi suite pengujian end-to-end otomatis untuk website SauceDemo menggunakan Playwright.',
    technologies: ['JavaScript', 'Playwright', 'GitHub'],
    images: [],
    coverIcon: 'github',
    coverLabel: 'Automated E2E testing',
    source: 'https://github.com/sandykadk/sauce_demo_playwright',
  },
];