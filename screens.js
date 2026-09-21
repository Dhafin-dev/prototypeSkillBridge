/* ─── SkillBridge Hub: Accurate Interactive Screens & Models ──────────────────
   Reflecting EXACT Codebase & Database Seeder of SkillBridge:
   - Personas: Ahmad Dhafin Al Farisy (Student), Hendra Setiawan (UMKM), Admin SkillBridge Hub
   - Categories: Web Development, UI/UX & Graphic Design, Digital Marketing & Branding, Data & AI Solutions
   - Projects: Katalog Digital UMKM (CV Kreasi Digital), UI/UX Kopi Kenangan Rasa, Dashboard Penjualan Cloud
   - NLP Engine: FastAPI TF-IDF Vectorizer & Cosine Similarity Candidate Ranking
   - Collaboration: Workspaces, Dynamic Progress %, Task Checklists, Deliverables, Two-Way Reviews
────────────────────────────────────────────────────────────────────────────── */

const I = {
  home: '<path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"/>',
  spark: '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 19.5c.5-3.4 3.2-5.4 6.2-5.4s5.7 2 6.2 5.4"/><path d="M16.5 5.6a3.2 3.2 0 010 5.6M18 14.4c2 .7 3.3 2.4 3.6 5.1"/>',
  grad: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 01-11.9 7.6L4 20.5l1.4-4.6A8.4 8.4 0 1121 11.5z"/><path d="M9 11.5h.01M12.5 11.5h.01M16 11.5h.01"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/>',
  doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/>',
  badge: '<path d="M12 2l3 6 6 .8-4.5 4.5 1 6.2-5.5-3.2-5.5 3.2 1-6.2L2 8.8l6-.8z"/>',
  pin: '<path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  chevronR: '<path d="M9 5l7 7-7 7"/>',
  shield: '<path d="M12 3l7.5 3.5v5c0 4.3-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.2-7.5-9.5v-5z"/>',
  building: '<path d="M4 21V5.5L12 3l8 2.5V21"/><path d="M2.5 21h19M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  download: '<path d="M12 4v12M7 11l5 5 5-5M4 19h16"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z"/>',
  megaphone: '<path d="M3 11l19-9-9 19-2-8-8-2z"/>'
};

const ic = (n, c = 'i') => `<svg class="${c}" viewBox="0 0 24 24">${I[n] || ''}</svg>`;
const rp = (n) => typeof n === 'number' ? 'Rp ' + n.toLocaleString('id-ID') : n;

/* ─── Hero Wallpaper Variants ────────────────────────────────────────────── */
let WP = 'indigo';
const HERO_BG = {
  indigo: () => `
    <div class="wp wp1">
      <div class="glow"></div>
      <div class="ring"></div>
      <div class="scrim"></div>
    </div>`,
  unair: () => `
    <div class="wp wp2">
      <div class="gold-circle"></div>
      <div class="scrim"></div>
    </div>`,
  emerald: () => `
    <div class="wp wp3">
      <div class="pat"></div>
      <div class="scrim"></div>
    </div>`,
  slate: () => `
    <div class="wp wp4">
      <div class="grid-line"></div>
      <div class="scrim"></div>
    </div>`,
  white: () => `
    <div class="wp wp5">
      <div class="soft-blob"></div>
      <div class="scrim" style="background:linear-gradient(180deg,rgba(255,255,255,.15),rgba(241,245,249,.85))"></div>
    </div>`,
  violet: () => `
    <div class="wp wp6">
      <div class="glow"></div>
      <div class="scrim"></div>
    </div>`
};

const WP_MODE = {
  white: { light: true }
};

function setWp(w) {
  WP = w;
  ['indigo', 'unair', 'emerald', 'slate', 'white', 'violet'].forEach(x => {
    const el = document.getElementById('wp-' + x);
    if (el) el.classList.toggle('on', x === w);
  });
  renderMobile();
}

/* ══════════════════════════════════════════════════════════════════════════════
   ROLE 1: MAHASISWA / TALENTA (STUDENT)
   Persona: Ahmad Dhafin Al Farisy (NIM: 187241057, S1 Sistem Informasi UNAIR)
   ══════════════════════════════════════════════════════════════════════════════ */
const STUDENT_SCREENS = [
  {
    name: 'Beranda Mahasiswa',
    note: {
      tag: 'Mahasiswa · Beranda & NLP Match',
      h: 'Personalisasi Proyek Berbasis Profil NLP Mahasiswa',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan akun mahasiswa <code>Ahmad Dhafin Al Farisy</code> (NIM: 187241057, S1 Sistem Informasi UNAIR) dengan <b>Skor Portofolio: 450</b>.',
        'Menampilkan rekomendasi teratas dari <b>FastAPI SkillMatch Engine</b>: Proyek <i>Website Katalog Digital UMKM</i> dengan skor kecocokan <b>92.5% MATCH</b>.',
        'Menyediakan penjelajahan 4 kategori proyek resmi: <i>Web Development</i>, <i>UI/UX & Graphic Design</i>, <i>Digital Marketing</i>, dan <i>Data & AI</i>.'
      ],
      src: 'Sesuai dengan DatabaseSeeder.php & home.blade.php'
    },
    tabs: 0,
    html: `
    <div class="hero">
      <div class="fg">
        <div class="greet">Selamat Datang, Mahasiswa 👋</div>
        <div class="name">Ahmad Dhafin Al Farisy</div>
        <div class="sub-meta">
          <span>Universitas Airlangga · S1 Sistem Informasi</span>
          <span class="badge" style="background:#38bdf8;color:#0f172a">Skor Portofolio: 450</span>
        </div>
      </div>
    </div>

    <!-- Active Application Status Card -->
    <div class="focus-card">
      <div class="head">
        <span>LAMARAN PROYEK AKTIF</span>
        <span class="pill ok" style="background:rgba(255,255,255,.25);color:#fff">Status: PENDING</span>
      </div>
      <div class="title">Pengembangan Website Katalog Digital &amp; Sistem Order UMKM</div>
      <div class="desc">CV Kreasi Digital Nusantara · Surabaya</div>
      <div style="margin-top:10px;display:flex;justify-content:space-between;align-items:center;font-size:11.5px;opacity:.95">
        <span>⚡ Skor SkillMatch: <b>92.5%</b> (Rank #1)</span>
        <span style="font-weight:700">Kompensasi: Rp 2.000.000</span>
      </div>
      <div class="act">
        <div class="btn-solid" onclick="go(1)">${ic('doc','i-sm')} Lihat Detail Proyek</div>
        <div class="btn-ghost" onclick="go(2)">Ruang Kerja Aktif</div>
      </div>
    </div>

    <div class="m-pad">
      <!-- 4 Category Grid -->
      <div class="m-sec-h">
        <h3>Kategori Proyek</h3>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px">
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 6px;text-align:center">
          <div style="width:34px;height:34px;border-radius:10px;background:#e0e7ff;color:#4338ca;display:flex;align-items:center;justify-content:center;margin:0 auto 6px">${ic('code','i-sm')}</div>
          <div style="font-size:10px;font-weight:700;line-height:1.2">Web Dev</div>
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 6px;text-align:center">
          <div style="width:34px;height:34px;border-radius:10px;background:#fce7f3;color:#be185d;display:flex;align-items:center;justify-content:center;margin:0 auto 6px">${ic('palette','i-sm')}</div>
          <div style="font-size:10px;font-weight:700;line-height:1.2">UI/UX</div>
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 6px;text-align:center">
          <div style="width:34px;height:34px;border-radius:10px;background:#fef3c7;color:#b45309;display:flex;align-items:center;justify-content:center;margin:0 auto 6px">${ic('megaphone','i-sm')}</div>
          <div style="font-size:10px;font-weight:700;line-height:1.2">Marketing</div>
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 6px;text-align:center">
          <div style="width:34px;height:34px;border-radius:10px;background:#ecfdf5;color:#047857;display:flex;align-items:center;justify-content:center;margin:0 auto 6px">${ic('cpu','i-sm')}</div>
          <div style="font-size:10px;font-weight:700;line-height:1.2">Data/AI</div>
        </div>
      </div>

      <div class="m-sec-h">
        <h3>Rekomendasi Proyek (NLP SkillMatch)</h3>
        <a href="javascript:void(0)" onclick="go(1)">Lihat Semua</a>
      </div>

      <!-- Proyek 1: Sesuai Seeder -->
      <div class="m-card" style="border-left:4px solid #10b981;cursor:pointer" onclick="go(1)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <span class="match-score high">${ic('spark','i-xs')} 92.5% MATCH</span>
          <span style="font-size:12px;font-weight:800;color:var(--brand)">Rp 2.000.000</span>
        </div>
        <div style="font-size:14px;font-weight:800;color:var(--ink);margin-top:8px">
          Pengembangan Website Katalog Digital &amp; Sistem Order UMKM
        </div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:2px">
          CV Kreasi Digital Nusantara · Surabaya · ⏱️ 4 Minggu
        </div>
        <div class="skill-tags">
          <span class="skill-pill match">${ic('check','i-xs')} Laravel</span>
          <span class="skill-pill match">${ic('check','i-xs')} Blade</span>
          <span class="skill-pill match">${ic('check','i-xs')} PostgreSQL</span>
          <span class="skill-pill match">${ic('check','i-xs')} Tailwind CSS</span>
        </div>
      </div>

      <!-- Proyek 2: Sesuai Seeder -->
      <div class="m-card" style="cursor:pointer" onclick="go(1)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <span class="pill brand" style="font-size:10.5px">Active Workspace</span>
          <span style="font-size:12px;font-weight:800;color:var(--brand)">Rp 1.500.000</span>
        </div>
        <div style="font-size:14px;font-weight:800;color:var(--ink);margin-top:8px">
          Redesain UI/UX Web &amp; Desain Kemasan Kopi Kenangan Rasa
        </div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:2px">
          Kedai Kopi Kenangan Rasa · Malang · ⏱️ 3 Minggu
        </div>
        <div class="skill-tags">
          <span class="skill-pill match">${ic('check','i-xs')} Figma</span>
          <span class="skill-pill match">${ic('check','i-xs')} UI/UX Design</span>
          <span class="skill-pill match">${ic('check','i-xs')} Wireframing</span>
        </div>
      </div>
    </div>`
  },
  {
    name: 'Detail Proyek & Lamaran',
    note: {
      tag: 'Katalog & Pengajuan Lamaran',
      h: 'Detail Kebutuhan Proyek & Form Lamaran Pitching',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tampilan <code>projects/show.blade.php</code>.',
        'Memuat informasi lengkap: <i>Deskripsi Kebutuhan</i>, <i>Target Luaran (Deliverables Brief)</i>, <i>Required Skills</i>, durasi 4 Minggu, dan kompensasi stipend Rp 2.000.000.',
        'Mahasiswa dapat mengisi <b>Pesan Pengajuan (Pitching)</b> yang nantinya dievaluasi oleh mesin NLP untuk menghasilkan skor kecocokan.'
      ],
      src: 'Sesuai dengan projects/show.blade.php & ApplicationController.php'
    },
    tabs: 1,
    html: `
    <div class="m-appbar">
      <div onclick="go(0)" style="cursor:pointer;padding:4px">${ic('chevronR','i-sm','style="transform:rotate(180deg)"')}</div>
      <div>
        <h1>Detail Kebutuhan Proyek</h1>
        <div class="sub">CV Kreasi Digital Nusantara · Surabaya</div>
      </div>
      <span class="badge badge-success" style="margin-left:auto;font-size:10px;padding:3px 8px;border-radius:6px;background:#dcfce7;color:#15803d;font-weight:700">Terbuka</span>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <div class="m-card">
        <div style="display:flex;gap:6px;margin-bottom:8px">
          <span class="pill brand" style="font-size:10.5px">Web Development</span>
          <span class="pill info" style="font-size:10.5px">⏱️ 4 Minggu</span>
        </div>
        <div style="font-size:16px;font-weight:800;line-height:1.3;color:var(--ink)">
          Pengembangan Website Katalog Digital &amp; Sistem Order Produk UMKM
        </div>
        <div style="font-size:14px;font-weight:800;color:var(--brand);margin-top:8px">
          Stipend: Rp 2.000.000
        </div>
      </div>

      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750;color:var(--ink);margin-bottom:4px">Deskripsi Kebutuhan Proyek:</div>
        <p style="font-size:12px;color:var(--body);line-height:1.6">
          Kami membutuhkan talenta mahasiswa untuk merancang dan mengimplementasikan website katalog produk digital berbasis Laravel dan Blade. Website harus memiliki katalog interaktif, filter kategori produk, formulir pemesanan otomatis terhubung ke WhatsApp bisnis, dan panel pengelolaan barang.
        </p>

        <div style="font-size:12.5px;font-weight:750;color:var(--ink);margin:12px 0 4px">Target Luaran yang Diharapkan (Deliverables):</div>
        <div style="background:#f8fafc;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:11.5px;color:var(--body)">
          Source code repository aplikasi Laravel, panduan konfigurasi basis data, dan dokumentasi singkat cara unggah produk.
        </div>

        <div style="font-size:12.5px;font-weight:750;color:var(--ink);margin:12px 0 6px">Keahlian Wajib (Required Skills):</div>
        <div class="skill-tags">
          <span class="skill-pill match">${ic('check','i-xs')} Laravel</span>
          <span class="skill-pill match">${ic('check','i-xs')} Blade</span>
          <span class="skill-pill match">${ic('check','i-xs')} PHP</span>
          <span class="skill-pill match">${ic('check','i-xs')} PostgreSQL</span>
          <span class="skill-pill match">${ic('check','i-xs')} HTML/CSS</span>
        </div>
      </div>

      <!-- Form Pengajuan Lamaran -->
      <div class="m-card" style="border:1.5px solid #bfdbfe;background:#f0fdf4">
        <div style="font-size:12.5px;font-weight:750;color:var(--ink)">Ajukan Lamaran Portofolio:</div>
        <div style="font-size:11px;color:var(--muted);margin:3px 0 8px">Tuliskan pesan pitching singkat untuk meyakinkan mitra UMKM.</div>
        <textarea readonly style="width:100%;border:1px solid #cbd5e1;border-radius:8px;padding:8px;font:inherit;font-size:11.5px;color:var(--ink);resize:none;height:65px;background:#fff">Saya berpengalaman membangun aplikasi Laravel 11 dengan performa tinggi dan tata letak Blade responsif. Portofolio saya siap diaplikasikan langsung untuk katalog UMKM Anda.</textarea>
        <button class="btn" style="background:#16a34a;color:#fff;border-radius:10px;padding:10px;font-weight:750;width:100%;margin-top:8px" onclick="go(2)">
          Kirim Lamaran ke Mitra UMKM
        </button>
      </div>
    </div>`
  },
  {
    name: 'Ruang Kerja (Workspace)',
    note: {
      tag: 'Workspace · Proyek Berjalan',
      h: 'Ruang Kerja Kolaboratif dengan Dynamic Progress',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tampilan <code>workspaces/show.blade.php</code> untuk <b>Workspace #1 (Redesain UI/UX Kopi Kenangan Rasa)</b>.',
        'Fitur utama: <b>Dynamic Progress 67%</b> yang terhitung otomatis dari rasio penyelesaian tugas checklist.',
        'Tugas milestone nyata: <i>Kick-off</i> (Selesai), <i>User flow & wireframe</i> (Selesai), <i>Desain High-Fidelity & Mockup</i> (Sedang Berjalan).',
        'Form penyerahan hasil kerja (*Deliverables Submission*): tautan Figma prototype dan catatan akhir.'
      ],
      src: 'Sesuai dengan workspaces/show.blade.php & WorkspaceController.php'
    },
    tabs: 2,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Ruang Kerja Kolaboratif</h1>
        <div class="sub">Workspace #1 · Redesain Kopi Kenangan Rasa</div>
      </div>
      <span class="badge badge-primary" style="margin-left:auto;font-size:10px;padding:3px 8px;border-radius:6px;background:#e0e7ff;color:#3730a3;font-weight:700">⚡ ACTIVE</span>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <!-- Dynamic Progress Card -->
      <div class="m-card">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:750;margin-bottom:6px">
          <span>Pelacakan Kemajuan Proyek</span>
          <span style="color:var(--brand)">67% Tuntas</span>
        </div>
        <div class="bar" style="height:8px"><i style="width:67%"></i></div>
        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11px;color:var(--muted)">
          <span>Mitra: <b>Sari Wahyuni (Kopi Kenangan)</b></span>
          <span style="color:#059669;font-weight:700">Stipend: Rp 1.500.000</span>
        </div>
      </div>

      <!-- Milestone Task Checklist -->
      <div class="m-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <div style="font-size:13px;font-weight:800;color:var(--ink)">Checklist Tugas Milestone:</div>
          <span class="pill brand" style="font-size:10px">+ Tambah Tugas</span>
        </div>

        <div class="task-item">
          <div class="task-check done">${ic('check','i-xs')}</div>
          <div>
            <div class="task-title done">Kick-off dan Pengumpulan Aset Identitas Brand Kopi</div>
            <div class="task-meta">Tuntas 10 hari lalu · Diverifikasi Mitra</div>
          </div>
        </div>

        <div class="task-item">
          <div class="task-check done">${ic('check','i-xs')}</div>
          <div>
            <div class="task-title done">Penyusunan User Flow dan Wireframe Antarmuka Menu</div>
            <div class="task-meta">Tuntas 5 hari lalu · Draf Figma Disetujui</div>
          </div>
        </div>

        <div class="task-item">
          <div class="task-check" onclick="this.classList.toggle('done')"></div>
          <div>
            <div class="task-title">Perancangan Visual High-Fidelity &amp; Desain Kemasan Vektor</div>
            <div class="task-meta" style="color:#b45309;font-weight:700">Batas: 4 Hari Lagi</div>
          </div>
        </div>
      </div>

      <!-- Deliverables Box -->
      <div class="m-card" style="background:#f8fafc;border:1px solid var(--line)">
        <div style="font-size:12.5px;font-weight:750;color:var(--ink)">Penyerahan Luaran (Deliverables):</div>
        <div style="font-size:11px;color:var(--muted);margin:3px 0 8px">Tautan Figma / Repository / Google Drive</div>
        <input type="text" readonly value="https://figma.com/file/sample-kopi-kenangan-redesign" style="width:100%;background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:8px;font-size:11px;color:var(--ink);margin-bottom:6px">
        <div style="font-size:11px;color:#475569;font-style:italic">"Telah diselesaikan rancangan draf utama UI menu digital dan mockup packaging pouch kopi."</div>
      </div>
    </div>`
  },
  {
    name: 'Profil & Portofolio',
    note: {
      tag: 'Profil & Reputasi Terverifikasi',
      h: 'Profil Mahasiswa, Skor Portofolio & Ulasan Dua Arah',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tampilan <code>profile/show.blade.php</code>.',
        'Menampilkan <b>Skor Portofolio: 450</b>, institusi Universitas Airlangga, resume URL PDF di Supabase Storage, dan taksonomi keahlian teknis.',
        'Dilengkapi ulasan bintang resmi dari pemilik UMKM mitra (Hendra Setiawan) dari proyek <i>Dashboard Penjualan Harian</i> yang telah diselesaikan.'
      ],
      src: 'Sesuai dengan profile/show.blade.php & ReviewController.php'
    },
    tabs: 3,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Profil &amp; Portofolio Mahasiswa</h1>
        <div class="sub">Universitas Airlangga · S1 Sistem Informasi</div>
      </div>
      <span class="pill gold" style="margin-left:auto">⭐ Skor: 450</span>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <!-- User Profile Header Card -->
      <div class="m-card" style="text-align:center;padding:18px 14px">
        <div style="width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,#312e81,#4338ca);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;margin-bottom:8px">
          AD
        </div>
        <div style="font-size:16px;font-weight:800;color:var(--ink)">Ahmad Dhafin Al Farisy</div>
        <div style="font-size:11.5px;color:var(--muted)">NIM: 187241057 · Fullstack Software Engineer</div>
        <p style="font-size:12px;color:var(--body);line-height:1.5;margin-top:8px;padding:0 8px">
          Mahasiswa S1 Sistem Informasi Universitas Airlangga. Menguasai Laravel, Blade, PostgreSQL, dan FastAPI.
        </p>
      </div>

      <!-- Skills Card -->
      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750;margin-bottom:6px">Taksonomi Keahlian (Skills):</div>
        <div class="skill-tags">
          <span class="skill-pill match">Laravel</span>
          <span class="skill-pill match">Blade</span>
          <span class="skill-pill match">PHP</span>
          <span class="skill-pill match">PostgreSQL</span>
          <span class="skill-pill match">FastAPI</span>
          <span class="skill-pill match">Python</span>
          <span class="skill-pill match">Tailwind CSS</span>
        </div>
        <div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--line-soft);display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11.5px;color:var(--muted)">📄 Resume (CV PDF di Supabase)</span>
          <span class="pill brand" style="font-size:10.5px;cursor:pointer">${ic('download','i-xs')} Unduh CV</span>
        </div>
      </div>

      <!-- Review Card -->
      <div class="m-card">
        <div style="font-size:12px;font-weight:800;color:var(--muted);text-transform:uppercase">Ulasan Mitra UMKM Terverifikasi:</div>
        <div style="display:flex;gap:4px;color:#f59e0b;font-size:16px;margin:6px 0">⭐⭐⭐⭐⭐ 5.0 / 5.0</div>
        <div style="font-size:12px;font-style:italic;color:var(--body);line-height:1.5">
          "Pengerjaan dashboard penjualan harian toko kami selesai tepat waktu dan kodenya sangat rapi. Sangat merekomendasikan talenta ini untuk UMKM lain."
        </div>
        <div style="margin-top:10px;display:flex;align-items:center;gap:8px;font-size:11px;color:var(--muted)">
          <b>Hendra Setiawan</b> · CV Kreasi Digital Nusantara
        </div>
      </div>
    </div>`
  }
];

/* ══════════════════════════════════════════════════════════════════════════════
   ROLE 2: MITRA UMKM (Hendra Setiawan — CV Kreasi Digital Nusantara)
   ══════════════════════════════════════════════════════════════════════════════ */
const UMKM_SCREENS = [
  {
    name: 'Beranda UMKM',
    note: {
      tag: 'Mitra Usaha · Manajemen Proyek',
      h: 'Dashboard Mitra UMKM & Publikasi Kebutuhan',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan akun UMKM <code>Hendra Setiawan</code> (CV Kreasi Digital Nusantara, Surabaya).',
        'Menampilkan daftar brief proyek aktif yang diterbitkan oleh UMKM, jumlah pelamar yang masuk, dan tombol <b>+ Pasang Kebutuhan Proyek</b>.',
        'Dilengkapi notifikasi langsung saat kandidat baru melamar melalui platform.'
      ],
      src: 'Sesuai dengan UmkmProfile model & ProjectController.php'
    },
    tabs: 0,
    html: `
    <div class="hero">
      <div class="fg">
        <div class="greet">Dashboard Mitra Usaha</div>
        <div class="name">Hendra Setiawan</div>
        <div class="sub-meta">
          <span>CV Kreasi Digital Nusantara · Surabaya</span>
          <span class="badge" style="background:#10b981;color:#fff">Usaha Kecil Terdaftar</span>
        </div>
      </div>
    </div>

    <!-- Active Projects Focus Card -->
    <div class="focus-card emerald">
      <div class="head">
        <span>PELAMAR PROYEK MASUK</span>
        <span class="pill ok" style="background:rgba(255,255,255,.25);color:#fff">3 Pelamar Siap Seleksi</span>
      </div>
      <div class="title">Website Katalog Digital &amp; Sistem Order UMKM</div>
      <div class="desc">3 Mahasiswa melamar · Model: TF-IDF Vectorizer &amp; Cosine Similarity</div>
      <div class="act">
        <div class="btn-solid" style="color:#065f46" onclick="go(2)">${ic('users','i-sm')} Lihat Ranking SkillMatch</div>
        <div class="btn-ghost" onclick="go(1)">+ Pasang Proyek Baru</div>
      </div>
    </div>

    <div class="m-pad">
      <div class="m-sec-h">
        <h3>Daftar Proyek Anda</h3>
      </div>

      <!-- Project 1 -->
      <div class="m-card" style="cursor:pointer" onclick="go(2)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="font-size:13.5px;font-weight:750">Website Katalog Digital &amp; Sistem Order</div>
          <span class="badge badge-success" style="font-size:10px;padding:2px 7px;background:#dcfce7;color:#15803d;font-weight:700">PUBLISHED</span>
        </div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">
          Kategori: Web Development · ⏱️ 4 Minggu · Stipend: Rp 2.000.000
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--line-soft);display:flex;justify-content:space-between;align-items:center;font-size:11px">
          <span style="color:#059669;font-weight:700">👥 3 Pelamar Menunggu Seleksi</span>
          <span style="color:var(--brand);font-weight:700">Peringkat AI &rarr;</span>
        </div>
      </div>

      <!-- Project 2 (Completed) -->
      <div class="m-card" style="cursor:pointer" onclick="go(3)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="font-size:13.5px;font-weight:750">Dashboard Pencatatan Penjualan Harian</div>
          <span class="badge badge-secondary" style="font-size:10px;padding:2px 7px;background:#f1f5f9;color:#475569;font-weight:700">COMPLETED</span>
        </div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">
          Talenta: Ahmad Dhafin Al Farisy · ⭐ Ulasan Bintang 5 Diberikan
        </div>
      </div>
    </div>`
  },
  {
    name: 'Pasang Kebutuhan Proyek',
    note: {
      tag: 'Penerbitan Brief Proyek',
      h: 'Formulir Publikasi Kebutuhan Proyek UMKM',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan form <code>projects/create.blade.php</code>.',
        'Kolom isian: <i>Judul Proyek</i>, <i>Kategori</i> (Web, UI/UX, Marketing, Data), <i>Durasi</i>, <i>Kompensasi Stipend</i>, <i>Deskripsi Kebutuhan</i>, dan <i>Required Skills</i>.',
        'Data teks yang disimpan di sini adalah parameter yang langsung dibaca oleh <b>FastAPI SkillMatch Engine</b> untuk menghitung kedekatan vektor pelamar.'
      ],
      src: 'Sesuai dengan projects/create.blade.php & ProjectController.php'
    },
    tabs: 1,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Pasang Kebutuhan Proyek</h1>
        <div class="sub">Formulir Penerbitan Brief untuk Mahasiswa</div>
      </div>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <div class="m-card">
        <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:3px">Judul Kebutuhan Proyek</label>
        <input type="text" readonly value="Pengembangan Website Katalog Digital & Sistem Order Produk UMKM" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;font-size:12px;color:var(--ink);margin-bottom:10px;background:#f8fafc">

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:3px">Kategori Proyek</label>
            <div style="border:1px solid var(--line);border-radius:8px;padding:8px;font-size:11.5px;background:#f8fafc">Web Development</div>
          </div>
          <div>
            <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:3px">Estimasi Durasi</label>
            <div style="border:1px solid var(--line);border-radius:8px;padding:8px;font-size:11.5px;background:#f8fafc">4 Minggu</div>
          </div>
        </div>

        <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:3px">Kompensasi Stipend</label>
        <input type="text" readonly value="Rp 2.000.000" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;font-size:12px;color:#059669;font-weight:750;margin-bottom:10px;background:#f8fafc">

        <label style="display:block;font-size:11px;font-weight:700;color:var(--muted);margin-bottom:3px">Keahlian Teknis Wajib (Required Skills)</label>
        <input type="text" readonly value="Laravel, Blade, PHP, PostgreSQL, HTML/CSS" style="width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;font-size:12px;color:var(--ink);margin-bottom:12px;background:#f8fafc">

        <button class="btn" style="background:var(--brand);color:#fff;border-radius:10px;padding:12px;font-weight:750;width:100%" onclick="go(2)">
          Publikasikan Brief Proyek
        </button>
      </div>
    </div>`
  },
  {
    name: 'Ranking Pelamar (SkillMatch)',
    note: {
      tag: 'Seleksi Kandidat · NLP Decision Support',
      h: 'Pemeringkatan Pelamar: TF-IDF & Cosine Similarity',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tampilan <code>projects/candidates.blade.php</code>.',
        'Menyajikan hasil pemeringkatan 3 pelamar nyata di database:',
        '• <b>#1 Rekomendasi Utama:</b> <code>Ahmad Dhafin Al Farisy</code> (92.5% Cocok · S1 Sistem Informasi UNAIR)',
        '• <b>#2:</b> <code>Citra Lestari</code> (54.0% Cocok · UI/UX Designer)',
        '• <b>#3:</b> <code>Budi Pratama</code> (28.5% Cocok · Digital Marketing)',
        'Aksi UMKM: Klik <b>Terima Kandidat</b> untuk menginisiasi workspace kolaboratif secara otomatis.'
      ],
      src: 'Sesuai dengan projects/candidates.blade.php & ApplicationController.php'
    },
    tabs: 2,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Ranking Pelamar (SkillMatch)</h1>
        <div class="sub">Proyek: Website Katalog Digital UMKM</div>
      </div>
      <span class="pill ok" style="margin-left:auto">3 Pelamar</span>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <!-- Candidate 1: Top Rank -->
      <div class="m-card" style="border-left:5px solid #10b981;position:relative">
        <span style="position:absolute;top:-8px;right:12px;background:linear-gradient(135deg,#4f46e5,#0ea5e9);color:#fff;font-size:9.5px;font-weight:800;padding:2px 8px;border-radius:99px">
          ⭐ Rekomendasi Utama (#1)
        </span>
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:38px;height:38px;border-radius:50%;background:#ecfdf5;color:#10b981;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;border:2px solid #10b981">
              #1
            </div>
            <div>
              <div style="font-size:13.5px;font-weight:800;color:var(--ink)">Ahmad Dhafin Al Farisy</div>
              <div style="font-size:11px;color:var(--muted)">Universitas Airlangga · S1 Sistem Informasi</div>
            </div>
          </div>
        </div>

        <!-- Progress Bar Match -->
        <div style="margin:10px 0 6px">
          <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700">
            <span style="color:#10b981">Kesesuaian SkillMatch</span>
            <span>92.5% Cocok</span>
          </div>
          <div class="bar" style="height:7px;margin-top:3px"><i style="width:92.5%;background:#10b981"></i></div>
        </div>

        <!-- Pitch snippet -->
        <div style="background:#f8fafc;border-left:3px solid var(--line);padding:6px 8px;font-size:11px;color:#475569;font-style:italic;margin-bottom:8px">
          "Saya berpengalaman membangun aplikasi Laravel 11 dengan performa tinggi dan tata letak Blade responsif..."
        </div>

        <div class="skill-tags">
          <span class="skill-pill match">Laravel</span>
          <span class="skill-pill match">Blade</span>
          <span class="skill-pill match">PHP</span>
          <span class="skill-pill match">PostgreSQL</span>
        </div>

        <div style="display:flex;gap:6px;margin-top:10px">
          <button class="btn sm" style="background:#16a34a;color:#fff;flex:1;border-radius:8px" onclick="go(3)">
            ✓ Terima &amp; Inisiasi Workspace
          </button>
          <button class="btn sm ghost" style="flex:none;padding:0 10px;border-radius:8px;color:#dc2626">Tolak</button>
        </div>
      </div>

      <!-- Candidate 2: Citra Lestari -->
      <div class="m-card" style="border-left:5px solid #3b82f6">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:50%;background:#eff6ff;color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:800;border:2px solid #3b82f6">
            #2
          </div>
          <div>
            <div style="font-size:13px;font-weight:800">Citra Lestari</div>
            <div style="font-size:11px;color:var(--muted)">UNAIR · UI/UX Designer · Skor Portofolio: 320</div>
          </div>
        </div>
        <div style="margin:8px 0 4px">
          <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700">
            <span style="color:#3b82f6">Kesesuaian SkillMatch</span>
            <span>54.0% Cocok</span>
          </div>
          <div class="bar" style="height:6px;margin-top:3px"><i style="width:54%;background:#3b82f6"></i></div>
        </div>
      </div>

      <!-- Candidate 3: Budi Pratama -->
      <div class="m-card" style="border-left:5px solid #f59e0b">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:50%;background:#fffbeb;color:#f59e0b;display:flex;align-items:center;justify-content:center;font-weight:800;border:2px solid #f59e0b">
            #3
          </div>
          <div>
            <div style="font-size:13px;font-weight:800">Budi Pratama</div>
            <div style="font-size:11px;color:var(--muted)">UNAIR · Manajemen Bisnis · Skor: 210</div>
          </div>
        </div>
        <div style="margin:8px 0 4px">
          <div style="display:flex;justify-content:space-between;align-size:11px;font-weight:700">
            <span style="color:#f59e0b">Kesesuaian SkillMatch</span>
            <span>28.5% Cocok</span>
          </div>
          <div class="bar" style="height:6px;margin-top:3px"><i style="width:28.5%;background:#f59e0b"></i></div>
        </div>
      </div>
    </div>`
  },
  {
    name: 'Evaluasi & Ulasan Dua Arah',
    note: {
      tag: 'Penyelesaian Proyek & Review',
      h: 'Persetujuan Luaran & Penilaian Portofolio Mahasiswa',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan aksi penyelesaian pada <code>workspaces/show.blade.php</code> dan <code>ReviewController.php</code>.',
        'UMKM meninjau tautan deliverables hasil kerja mahasiswa, menekan tombol <b>Selesaikan Proyek</b>, dan mengisi ulasan bintang (1-5) beserta testimoni evaluasi.',
        'Ulasan ini yang otomatis menambah nilai <i>portfolio_score</i> mahasiswa di database.'
      ],
      src: 'Sesuai dengan ReviewController.php & FR-REV-01'
    },
    tabs: 3,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Evaluasi Luaran &amp; Ulasan</h1>
        <div class="sub">Tinjau Deliverables Mahasiswa</div>
      </div>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750">Hasil Penyerahan Akhir (Deliverables):</div>
        <div style="background:#f8fafc;border:1px solid var(--line);border-radius:8px;padding:8px 10px;margin-top:6px;font-size:11.5px">
          🔗 <b>Source Code GitHub:</b> github.com/dhafinn/katalog-umkm-v1<br>
          📁 <b>Panduan Konfigurasi:</b> README_SETUP.pdf terlampir
        </div>
      </div>

      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750;margin-bottom:6px">Beri Penilaian Kerja Mahasiswa:</div>
        <div style="display:flex;gap:4px;color:#f59e0b;font-size:22px;margin-bottom:10px">
          ⭐ ⭐ ⭐ ⭐ ⭐ (5.0 / 5.0)
        </div>
        <label style="font-size:11px;color:var(--muted);font-weight:700">Komentar &amp; Ulasan Evaluasi:</label>
        <textarea readonly style="width:100%;border:1px solid var(--line);border-radius:8px;padding:8px;font:inherit;font-size:11.5px;color:var(--ink);resize:none;height:60px;background:#fff;margin-top:4px">Hasil implementasi katalog website sangat rapi, fitur order WhatsApp berfungsi lancar, dan selesai lebih cepat dari tenggat waktu!</textarea>
      </div>

      <button class="btn" style="background:#16a34a;color:#fff;border-radius:10px;padding:12px;font-weight:750;width:100%" onclick="go(0)">
        ✓ Selesaikan Proyek &amp; Simpan Ulasan
      </button>
    </div>`
  }
];

/* ══════════════════════════════════════════════════════════════════════════════
   ROLE 3: ADMINISTRATOR TATA KELOLA (Admin SkillBridge Hub)
   ══════════════════════════════════════════════════════════════════════════════ */
const ADMIN_SCREENS = [
  {
    name: 'Dasbor Tata Kelola',
    note: {
      tag: 'Administrator · Governance',
      h: 'Dasbor Tata Kelola Platform & Metrik Riil',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tampilan <code>admin/dashboard.blade.php</code>.',
        'Menyajikan 4 kartu metrik utama di database:',
        '• <b>Total Pengguna:</b> 5 (3 Mahasiswa, 2 Mitra UMKM)',
        '• <b>Total Proyek:</b> 3 (1 Terbuka, 1 Aktif, 1 Tuntas)',
        '• <b>Workspace Aktif:</b> 1 Berjalan',
        '• <b>Proyek Tuntas:</b> 1 Tuntas & Diulas'
      ],
      src: 'Sesuai dengan admin/dashboard.blade.php & AdminController.php'
    },
    tabs: 0,
    html: `
    <div class="hero">
      <div class="fg">
        <div class="greet">Platform Governance Center</div>
        <div class="name">Admin SkillBridge Hub</div>
        <div class="sub-meta">
          <span>Pengawas &amp; Administrator Sistem</span>
          <span class="badge" style="background:#fef3c7;color:#92400e">Role: ADMIN</span>
        </div>
      </div>
    </div>

    <div class="focus-card purple">
      <div class="head">
        <span>STATUS TATA KELOLA</span>
        <span class="pill ok" style="background:rgba(255,255,255,.25);color:#fff">Sistem Normal</span>
      </div>
      <div class="title">Pusat Moderasi &amp; Pengawasan</div>
      <div class="desc">Monitoring ekosistem kolaborasi akademik dan kepatuhan brief UMKM.</div>
      <div class="act">
        <div class="btn-solid" style="color:#5b21b6" onclick="go(1)">${ic('shield','i-sm')} Moderasi Proyek Publik</div>
        <div class="btn-ghost" onclick="go(2)">Master Kategori</div>
      </div>
    </div>

    <div class="m-pad">
      <!-- 4 Stats Cards from admin/dashboard.blade.php -->
      <div class="m-sec-h">
        <h3>Statistik Ekosistem Platform</h3>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="m-card" style="margin-bottom:0">
          <div style="font-size:11px;color:var(--muted);font-weight:700">TOTAL PENGGUNA</div>
          <div style="font-size:22px;font-weight:800;color:var(--ink);margin-top:2px">5 Akun</div>
          <div style="font-size:10.5px;color:var(--muted)">3 Mahasiswa · 2 UMKM</div>
        </div>
        <div class="m-card" style="margin-bottom:0">
          <div style="font-size:11px;color:var(--muted);font-weight:700">TOTAL PROYEK</div>
          <div style="font-size:22px;font-weight:800;color:#4f46e5;margin-top:2px">3 Proyek</div>
          <div style="font-size:10.5px;color:var(--muted)">Semua brief terdaftar</div>
        </div>
        <div class="m-card" style="margin-bottom:0">
          <div style="font-size:11px;color:var(--muted);font-weight:700">WORKSPACE AKTIF</div>
          <div style="font-size:22px;font-weight:800;color:#0284c7;margin-top:2px">1 Berjalan</div>
          <div style="font-size:10.5px;color:var(--muted)">Sedang kolaborasi</div>
        </div>
        <div class="m-card" style="margin-bottom:0">
          <div style="font-size:11px;color:var(--muted);font-weight:700">PROYEK TUNTAS</div>
          <div style="font-size:22px;font-weight:800;color:#16a34a;margin-top:2px">1 Selesai</div>
          <div style="font-size:10.5px;color:var(--muted)">Terselesaikan &amp; diulas</div>
        </div>
      </div>
    </div>`
  },
  {
    name: 'Moderasi Proyek Publik',
    note: {
      tag: 'Moderasi & Kontrol Kualitas',
      h: 'Tabel Moderasi Status Proyek Publik',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tabel moderasi pada <code>admin/dashboard.blade.php</code>.',
        'Admin memiliki kewenangan mengaktifkan (*PUBLISHED*) atau menonaktifkan (*DRAFT/OFF*) brief proyek publik.',
        'Mencegah brief yang melanggar ketentuan etika atau tidak memiliki cakupan kerja yang wajar bagi mahasiswa.'
      ],
      src: 'Sesuai dengan AdminController.php::toggleProjectStatus'
    },
    tabs: 1,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Moderasi Proyek Publik</h1>
        <div class="sub">Kontrol Status Publikasi Brief UMKM</div>
      </div>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <!-- Proyek 1 -->
      <div class="m-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <span style="font-size:10.5px;font-weight:700;color:var(--muted)">#1 · Web Development</span>
            <div style="font-size:13px;font-weight:800;color:var(--ink);margin-top:2px">Website Katalog Digital UMKM</div>
            <div style="font-size:11px;color:var(--muted)">Pemilik: Hendra Setiawan (CV Kreasi Digital)</div>
          </div>
          <span class="badge badge-success" style="font-size:10px;padding:2px 6px;background:#dcfce7;color:#15803d;font-weight:700">PUBLISHED</span>
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:8px">
          <button class="pill brand" style="font-size:10.5px;background:#fee2e2;color:#dc2626">Nonaktifkan</button>
        </div>
      </div>

      <!-- Proyek 2 -->
      <div class="m-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <span style="font-size:10.5px;font-weight:700;color:var(--muted)">#2 · UI/UX &amp; Graphic Design</span>
            <div style="font-size:13px;font-weight:800;color:var(--ink);margin-top:2px">Redesain UI/UX Kopi Kenangan Rasa</div>
            <div style="font-size:11px;color:var(--muted)">Pemilik: Sari Wahyuni (Kedai Kopi Kenangan)</div>
          </div>
          <span class="badge badge-primary" style="font-size:10px;padding:2px 6px;background:#e0e7ff;color:#4338ca;font-weight:700">ACTIVE</span>
        </div>
      </div>

      <!-- Proyek 3 -->
      <div class="m-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <span style="font-size:10.5px;font-weight:700;color:var(--muted)">#3 · Web Development</span>
            <div style="font-size:13px;font-weight:800;color:var(--ink);margin-top:2px">Dashboard Pencatatan Penjualan</div>
            <div style="font-size:11px;color:var(--muted)">Pemilik: Hendra Setiawan</div>
          </div>
          <span class="badge badge-secondary" style="font-size:10px;padding:2px 6px;background:#f1f5f9;color:#475569;font-weight:700">COMPLETED</span>
        </div>
      </div>
    </div>`
  },
  {
    name: 'Kategori & Audit Log',
    note: {
      tag: 'Master Data & Keamanan',
      h: 'Master Kategori Proyek & Catatan Audit Log',
      p: [
        '<b>Sesuai Implementasi:</b> Merefleksikan tabel <code>categories</code> dan <code>audit_logs</code> di database PostgreSQL.',
        '4 Kategori resmi: <i>Web Development</i>, <i>UI/UX & Graphic Design</i>, <i>Digital Marketing & Branding</i>, dan <i>Data & AI Solutions</i>.',
        'Audit log mencatat setiap perubahan administratif, verifikasi proyek, dan pembukaan workspace untuk kepatuhan keamanan sistem.'
      ],
      src: 'Sesuai dengan Category model & AuditLog model'
    },
    tabs: 2,
    html: `
    <div class="m-appbar">
      <div>
        <h1>Master Kategori &amp; Audit Log</h1>
        <div class="sub">Integritas Data &amp; Keamanan Platform</div>
      </div>
    </div>
    <div class="m-pad" style="padding-top:14px">
      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750;margin-bottom:8px">Kategori Proyek Terdaftar:</div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line-soft)">
            <span style="font-size:12px;font-weight:600">Web Development</span>
            <span class="pill brand" style="font-size:10px">Slug: web-development</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line-soft)">
            <span style="font-size:12px;font-weight:600">UI/UX &amp; Graphic Design</span>
            <span class="pill brand" style="font-size:10px">Slug: ui-ux-design</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line-soft)">
            <span style="font-size:12px;font-weight:600">Digital Marketing &amp; Branding</span>
            <span class="pill brand" style="font-size:10px">Slug: digital-marketing</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0">
            <span style="font-size:12px;font-weight:600">Data &amp; AI Solutions</span>
            <span class="pill brand" style="font-size:10px">Slug: data-ai-solutions</span>
          </div>
        </div>
      </div>

      <div class="m-card">
        <div style="font-size:12.5px;font-weight:750;margin-bottom:6px">Audit Log Aktivitas Terakhir:</div>
        <div style="font-size:11px;color:var(--body);line-height:1.6">
          • [09:15] <code>AUTH</code>: Login berhasil - Ahmad Dhafin Al Farisy<br>
          • [08:42] <code>WORKSPACE</code>: Pembaruan tugas checklist - Kopi Kenangan<br>
          • [Yesterday] <code>APPLICATION</code>: Lamaran diserahkan ke Proyek #1
        </div>
      </div>
    </div>`
  }
];

/* ══════════════════════════════════════════════════════════════════════════════
   ROLE MAPPINGS & CONTROLLER
   ══════════════════════════════════════════════════════════════════════════════ */
const ROLE_TABS = {
  student: [
    ['home', 'Beranda'],
    ['briefcase', 'Katalog'],
    ['check', 'Ruang Kerja'],
    ['shield', 'Portofolio']
  ],
  umkm: [
    ['home', 'Beranda'],
    ['plus', 'Pasang'],
    ['users', 'Pelamar'],
    ['star', 'Ulasan']
  ],
  admin: [
    ['home', 'Dasbor'],
    ['shield', 'Moderasi'],
    ['doc', 'Kategori']
  ]
};

const ROLE_SCREENS = {
  student: STUDENT_SCREENS,
  umkm: UMKM_SCREENS,
  admin: ADMIN_SCREENS
};

let S = {
  surface: 'm',
  role: 'student',
  screen: 0,
  wnav: 'dash'
};

function surface(s) {
  S.surface = s;
  document.getElementById('surface-m').classList.toggle('hide', s !== 'm');
  document.getElementById('surface-w').classList.toggle('hide', s !== 'w');
  document.getElementById('sf-m').classList.toggle('on', s === 'm');
  document.getElementById('sf-w').classList.toggle('on', s === 'w');
  document.getElementById('chrome-note').textContent = s === 'm' ? 'simulasi mobile app' : 'dasbor web platform';
  if (s === 'w') renderWeb();
}

function pickRole(r) {
  S.role = r;
  S.screen = 0;
  ['student', 'umkm', 'admin'].forEach(x => {
    const el = document.getElementById('role-' + x);
    if (el) el.classList.toggle('on', x === r);
  });
  renderMobile();
}

function go(idx) {
  S.screen = idx;
  renderMobile();
}

function renderMobile() {
  const screens = ROLE_SCREENS[S.role] || STUDENT_SCREENS;
  const sc = screens[S.screen] || screens[0];

  // Render Left screen links
  const screenlistEl = document.getElementById('screenlist');
  if (screenlistEl) {
    screenlistEl.innerHTML = screens.map((x, i) => `
      <button class="${i === S.screen ? 'on' : ''}" onclick="go(${i})">
        <span style="width:6px;height:6px;border-radius:50%;background:${i === S.screen ? '#fff' : 'var(--muted)'}"></span>
        ${x.name}
      </button>`).join('');
  }

  // Render Phone Scroll Area
  const mscroll = document.getElementById('mscroll');
  if (mscroll) {
    mscroll.innerHTML = sc.html;

    // Apply active hero wallpaper
    const hero = mscroll.querySelector('.hero');
    if (hero) {
      const mode = WP_MODE[WP] || {};
      hero.classList.toggle('lightw', !!mode.light);
      const statusBar = document.querySelector('.screen .status');
      if (statusBar) statusBar.classList.toggle('dark', !!mode.light);

      const existingWp = hero.querySelector('.wp');
      if (existingWp) existingWp.remove();
      hero.insertAdjacentHTML('afterbegin', HERO_BG[WP]());
    }
  }

  // Render Bottom Tabbar
  const mtabs = document.getElementById('mtabs');
  if (mtabs) {
    const tabs = ROLE_TABS[S.role] || ROLE_TABS.student;
    mtabs.innerHTML = tabs.map(([icon, label], i) => `
      <button class="${i === sc.tabs ? 'on' : ''}" onclick="go(${Math.min(i, screens.length - 1)})">
        ${ic(icon, 'i-sm')}
        <span>${label}</span>
      </button>`).join('');
  }

  // Render Pitching Rationale Note
  const mnote = document.getElementById('mnote');
  if (mnote && sc.note) {
    mnote.innerHTML = `
      <span class="stakeholder-tag">${sc.note.tag || 'Fitur Sistem'}</span>
      <h5>${ic('spark','i-xs')} Implementasi Nyata SkillBridge</h5>
      <h3>${sc.note.h}</h3>
      ${sc.note.p.map(p => `<p>${p}</p>`).join('')}
      <div class="src">${sc.note.src || ''}</div>
    `;
  }
}

// Initial Run
window.addEventListener('DOMContentLoaded', () => {
  renderMobile();
});
