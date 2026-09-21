/* ─── SkillBridge Hub: Desktop Web Surface ─────────────────────────────────────
   Reflecting EXACT Blade Views & Controllers of SkillBridge:
   - home.blade.php (Landing, Hero, Stats Counters, How It Works)
   - projects/index.blade.php (Katalog Proyek & Filter Kategori)
   - projects/candidates.blade.php (SkillMatch NLP Decision Support Engine)
   - workspaces/show.blade.php (Ruang Kerja Kolaboratif & Task Checklist)
   - admin/dashboard.blade.php (Dasbor Tata Kelola & Moderasi)
   - profile/show.blade.php (Profil Mahasiswa, Skor Portofolio 450 & Review)
────────────────────────────────────────────────────────────────────────────── */

const WSECT = [
  ['utama', 'grid', 'Utama', [
    ['dash', 'grid', 'Beranda & Platform', ''],
    ['katalog', 'briefcase', 'Katalog Proyek', '3'],
  ]],
  ['kolaborasi', 'users', 'Kolaborasi & NLP', [
    ['candidates', 'cpu', 'Ranking Pelamar NLP', '3'],
    ['workspace', 'check', 'Workspace Aktif', '67%'],
  ]],
  ['kelola', 'shield', 'Tata Kelola', [
    ['admin', 'shield', 'Admin Governance', '5 Akun'],
    ['profil', 'grad', 'Profil & Portofolio', '450'],
  ]],
];

const WTITLE = {
  dash: 'Platform Kolaborasi Proyek Akademik & Digitalisasi UMKM',
  katalog: 'Katalog Proyek & Kebutuhan Solusi Digital UMKM',
  candidates: 'Pemeringkatan Pelamar: SkillMatch NLP Decision Support Engine',
  workspace: 'Ruang Kerja Kolaboratif (Workspace #1) — Redesain UI/UX Kopi Kenangan',
  admin: 'Dasbor Tata Kelola Administrator & Moderasi Konten',
  profil: 'Profil Pengguna & Akumulasi Skor Portofolio'
};

const WSCREEN = {
  dash: `
  <div class="wpad">
    <!-- Hero Banner directly matching home.blade.php -->
    <div style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4338ca 100%);border-radius:22px;padding:32px 36px;color:#fff;position:relative;overflow:hidden;box-shadow:0 20px 25px -5px rgba(30,27,75,.25);margin-bottom:24px">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);padding:4px 14px;border-radius:99px;font-size:11.5px;font-weight:700;margin-bottom:14px">
        <span style="color:#38bdf8">⚡ Berbasis NLP SkillMatch Engine</span>
        <span style="opacity:.6">•</span>
        <span>Supabase Cloud PostgreSQL</span>
      </div>
      <h1 style="font-size:26px;font-weight:900;letter-spacing:-.02em;line-height:1.25;max-width:760px;margin-bottom:10px">
        Jembatani Talenta Akademik dengan <span style="background:linear-gradient(to right,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Kebutuhan Riil UMKM</span>
      </h1>
      <p style="font-size:13.5px;opacity:.9;line-height:1.6;max-width:680px;margin-bottom:18px">
        Platform kolaborasi proyek terpadu. Bantu digitalisasi unit usaha lokal, peroleh kompensasi stipend nyata, dan bangun rekam jejak portofolio terverifikasi industri.
      </p>
      <div style="display:flex;gap:10px">
        <button class="btn sm" style="background:#38bdf8;color:#0f172a;font-weight:800;border-radius:10px;padding:0 18px" onclick="pickWNav('katalog')">
          🚀 Eksplorasi Katalog Proyek
        </button>
        <button class="btn sm" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);font-weight:700;border-radius:10px;padding:0 18px" onclick="pickWNav('candidates')">
          ⚡ Demo SkillMatch Ranking
        </button>
      </div>
    </div>

    <!-- Platform Stats Counters directly matching home.blade.php -->
    <div class="stats">
      <div class="stat">
        <div class="lbl">🎓 Talenta Mahasiswa</div>
        <div class="num">3</div>
        <div class="delta" style="color:var(--brand)">
          Ahmad Dhafin, Citra, Budi (UNAIR)
        </div>
      </div>
      <div class="stat">
        <div class="lbl">🏢 Mitra UMKM Aktif</div>
        <div class="num">2</div>
        <div class="delta" style="color:var(--ok)">
          CV Kreasi Digital &amp; Kopi Kenangan
        </div>
      </div>
      <div class="stat">
        <div class="lbl">💼 Brief Proyek Publik</div>
        <div class="num">3</div>
        <div class="delta" style="color:#4f46e5">
          Web Dev, UI/UX, Cloud Dashboard
        </div>
      </div>
      <div class="stat">
        <div class="lbl">⚡ Workspace Berjalan</div>
        <div class="num">1</div>
        <div class="delta" style="color:#d97706">
          Dynamic Progress 67%
        </div>
      </div>
    </div>

    <!-- Featured Projects Preview -->
    <div class="panel" style="margin-top:20px">
      <div class="panel-h">
        <h3>Proyek Pilihan Terbuka (Katalog Terkini)</h3>
        <div class="act"><span class="chip on" onclick="pickWNav('katalog')">Buka Semua Katalog (3)</span></div>
      </div>
      <table>
        <tr>
          <th>Nama Proyek &amp; Pemilik UMKM</th>
          <th>Kategori</th>
          <th>Required Skills</th>
          <th>Stipend</th>
          <th>Durasi</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <b>Pengembangan Website Katalog Digital &amp; Sistem Order UMKM</b><br>
            <small class="muted">CV Kreasi Digital Nusantara · Surabaya</small>
          </td>
          <td><span class="pill brand">Web Development</span></td>
          <td style="font-size:11.5px;color:var(--muted)">Laravel, Blade, PHP, PostgreSQL</td>
          <td><b style="color:#059669">Rp 2.000.000</b></td>
          <td>4 Minggu</td>
          <td><span class="pill ok">PUBLISHED</span></td>
        </tr>
        <tr>
          <td>
            <b>Redesain UI/UX Web &amp; Desain Kemasan Kopi Kenangan Rasa</b><br>
            <small class="muted">Kedai Kopi Kenangan Rasa · Malang</small>
          </td>
          <td><span class="pill purple">UI/UX Design</span></td>
          <td style="font-size:11.5px;color:var(--muted)">Figma, UI/UX, Branding, Wireframing</td>
          <td><b style="color:#059669">Rp 1.500.000</b></td>
          <td>3 Minggu</td>
          <td><span class="pill brand">ACTIVE</span></td>
        </tr>
      </table>
    </div>
  </div>`,

  katalog: `
  <div class="wpad">
    <div class="panel">
      <div class="panel-h">
        <h3>Katalog Kebutuhan Proyek Digitalisasi UMKM</h3>
        <div class="act">
          <span class="chip on">Semua Kategori (3)</span>
          <span class="chip">Web Development</span>
          <span class="chip">UI/UX Design</span>
          <span class="chip">Digital Marketing</span>
        </div>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Judul Proyek</th>
          <th>Mitra UMKM</th>
          <th>Kategori</th>
          <th>Keahlian Wajib (Required Skills)</th>
          <th>Kompensasi</th>
          <th>Aksi</th>
        </tr>
        <tr>
          <td><b>#1</b></td>
          <td>
            <b>Pengembangan Website Katalog Digital &amp; Sistem Order UMKM</b><br>
            <small class="muted">Katalog interaktif terhubung WhatsApp bisnis dan panel admin barang.</small>
          </td>
          <td>Hendra Setiawan<br><small class="muted">CV Kreasi Digital</small></td>
          <td><span class="pill brand">Web Development</span></td>
          <td style="font-size:11.5px;color:var(--muted)">Laravel, Blade, PHP, PostgreSQL, Tailwind</td>
          <td><b style="color:#059669">Rp 2.000.000</b></td>
          <td>
            <button class="pill brand" style="cursor:pointer" onclick="pickWNav('candidates')">⚡ Ranking NLP</button>
          </td>
        </tr>
        <tr>
          <td><b>#2</b></td>
          <td>
            <b>Redesain UI/UX Aplikasi Web &amp; Desain Kemasan Kopi Kenangan</b><br>
            <small class="muted">Menu digital modern dan mockup packaging pouch kopi 250g.</small>
          </td>
          <td>Sari Wahyuni<br><small class="muted">Kedai Kopi Kenangan</small></td>
          <td><span class="pill purple">UI/UX Design</span></td>
          <td style="font-size:11.5px;color:var(--muted)">Figma, UI/UX, Branding, Wireframing</td>
          <td><b style="color:#059669">Rp 1.500.000</b></td>
          <td>
            <button class="pill ok" style="cursor:pointer" onclick="pickWNav('workspace')">💼 Workspace</button>
          </td>
        </tr>
        <tr>
          <td><b>#3</b></td>
          <td>
            <b>Implementasi Dashboard Pencatatan Penjualan Harian Berbasis Cloud</b><br>
            <small class="muted">Modul ringkasan kas masuk/keluar toko cabang secara terpusat.</small>
          </td>
          <td>Hendra Setiawan<br><small class="muted">CV Kreasi Digital</small></td>
          <td><span class="pill brand">Web Development</span></td>
          <td style="font-size:11.5px;color:var(--muted)">Laravel, PostgreSQL, Blade, Charts</td>
          <td><b style="color:#059669">Rp 1.800.000</b></td>
          <td>
            <span class="pill gold">COMPLETED</span>
          </td>
        </tr>
      </table>
    </div>
  </div>`,

  candidates: `
  <div class="wpad">
    <!-- Header mirroring projects/candidates.blade.php -->
    <div style="background:#fff;border-radius:16px;border:1px solid var(--hair);padding:20px 24px;margin-bottom:18px">
      <div style="display:inline-flex;align-items:center;gap:6px;background:#eef2ff;color:#4338ca;padding:3px 12px;border-radius:99px;font-size:11.5px;font-weight:750;margin-bottom:8px">
        ⚡ SkillMatch NLP Decision Support Engine
      </div>
      <h2 style="font-size:20px;font-weight:800;color:var(--ink)">
        Pemeringkatan Pelamar: Pengembangan Website Katalog Digital UMKM
      </h2>
      <p style="font-size:12px;color:var(--muted);margin-top:3px">
        Total Pelamar: <b>3 Mahasiswa</b> • Model Komputasi: <em>FastAPI TF-IDF Vectorizer &amp; Cosine Similarity</em>
      </p>
    </div>

    <!-- Candidate List directly matching candidates.blade.php -->
    <div style="display:flex;flex-direction:column;gap:14px">
      <!-- Rank #1: Ahmad Dhafin -->
      <div class="panel" style="border-left:6px solid #10b981;padding:18px 22px;position:relative">
        <span style="position:absolute;top:-10px;right:24px;background:linear-gradient(135deg,#4f46e5,#0ea5e9);color:#fff;font-size:10px;font-weight:800;padding:2px 12px;border-radius:99px">
          ⭐ Rekomendasi Utama (Rank #1)
        </span>
        <div style="display:grid;grid-template-columns:52px 1fr auto;gap:18px;align-items:center">
          <div style="width:52px;height:52px;border-radius:50%;background:#ecfdf5;color:#10b981;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:20px;border:2px solid #10b981">
            #1
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:10px">
              <h3 style="font-size:16px;font-weight:800">Ahmad Dhafin Al Farisy</h3>
              <span class="pill brand">🎓 Universitas Airlangga · S1 Sistem Informasi</span>
              <span class="pill gold">⭐ Skor Portofolio: 450</span>
            </div>
            <div style="margin:8px 0;max-width:440px">
              <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700">
                <span style="color:#10b981">Kesesuaian SkillMatch</span>
                <span style="font-weight:800">92.5% Cocok</span>
              </div>
              <div class="bar" style="height:8px;margin-top:4px"><i style="width:92.5%;background:#10b981"></i></div>
            </div>
            <div style="background:#f8fafc;border-left:3px solid var(--hair);padding:6px 10px;font-size:11.5px;color:#475569;font-style:italic">
              "Saya berpengalaman membangun aplikasi Laravel 11 dengan performa tinggi dan tata letak Blade responsif. Portofolio saya siap diaplikasikan langsung untuk katalog UMKM Anda."
            </div>
            <div class="skill-tags" style="margin-top:8px">
              <span class="skill-pill match">Laravel</span>
              <span class="skill-pill match">Blade</span>
              <span class="skill-pill match">PHP</span>
              <span class="skill-pill match">PostgreSQL</span>
              <span class="skill-pill match">FastAPI</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <button class="btn sm" style="background:#16a34a;color:#fff;font-weight:750;border-radius:8px;padding:0 16px" onclick="pickWNav('workspace')">
              ✓ Terima &amp; Buka Workspace
            </button>
            <button class="btn sm ghost" style="color:#dc2626;border-color:#fecaca;border-radius:8px">
              Tolak Pelamar
            </button>
          </div>
        </div>
      </div>

      <!-- Rank #2: Citra Lestari -->
      <div class="panel" style="border-left:6px solid #3b82f6;padding:16px 20px">
        <div style="display:grid;grid-template-columns:46px 1fr auto;gap:16px;align-items:center">
          <div style="width:46px;height:46px;border-radius:50%;background:#eff6ff;color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;border:2px solid #3b82f6">
            #2
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:8px">
              <h3 style="font-size:14.5px;font-weight:750">Citra Lestari</h3>
              <span class="pill brand" style="font-size:10px">UNAIR · UI/UX Designer</span>
              <span class="pill gold" style="font-size:10px">Skor: 320</span>
            </div>
            <div style="margin:6px 0;max-width:380px">
              <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700">
                <span style="color:#3b82f6">Kesesuaian SkillMatch</span>
                <span>54.0% Cocok</span>
              </div>
              <div class="bar" style="height:6px;margin-top:3px"><i style="width:54%;background:#3b82f6"></i></div>
            </div>
          </div>
          <button class="btn sm ghost" style="border-radius:8px">Tinjau Profil</button>
        </div>
      </div>

      <!-- Rank #3: Budi Pratama -->
      <div class="panel" style="border-left:6px solid #f59e0b;padding:16px 20px">
        <div style="display:grid;grid-template-columns:46px 1fr auto;gap:16px;align-items:center">
          <div style="width:46px;height:46px;border-radius:50%;background:#fffbeb;color:#f59e0b;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;border:2px solid #f59e0b">
            #3
          </div>
          <div>
            <div style="display:flex;align-items:center;gap:8px">
              <h3 style="font-size:14.5px;font-weight:750">Budi Pratama</h3>
              <span class="pill brand" style="font-size:10px">UNAIR · Manajemen Bisnis</span>
              <span class="pill gold" style="font-size:10px">Skor: 210</span>
            </div>
            <div style="margin:6px 0;max-width:380px">
              <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:700">
                <span style="color:#f59e0b">Kesesuaian SkillMatch</span>
                <span>28.5% Cocok</span>
              </div>
              <div class="bar" style="height:6px;margin-top:3px"><i style="width:28.5%;background:#f59e0b"></i></div>
            </div>
          </div>
          <button class="btn sm ghost" style="border-radius:8px">Tinjau Profil</button>
        </div>
      </div>
    </div>
  </div>`,

  workspace: `
  <div class="wpad">
    <!-- Header mirroring workspaces/show.blade.php -->
    <div style="background:#fff;border-radius:16px;border:1px solid var(--hair);padding:20px 24px;margin-bottom:18px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div style="display:inline-flex;align-items:center;gap:6px;background:#e0e7ff;color:#3730a3;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:750;margin-bottom:6px">
            💼 Ruang Kerja Kolaboratif (Workspace #1)
          </div>
          <h2 style="font-size:20px;font-weight:800;color:var(--ink)">
            Redesain UI/UX Web &amp; Desain Kemasan Kopi Kenangan Rasa
          </h2>
          <div style="display:flex;gap:14px;font-size:12px;color:var(--muted);margin-top:4px">
            <span>Mitra: <b>Sari Wahyuni (Kedai Kopi Kenangan)</b></span>
            <span>•</span>
            <span>Talenta: <b>Citra Lestari (UNAIR)</b></span>
            <span>•</span>
            <span>Kompensasi: <b style="color:#059669">Rp 1.500.000</b></span>
          </div>
        </div>
        <span class="pill ok" style="font-size:12px;padding:6px 14px">⚡ Sedang Berjalan (ACTIVE)</span>
      </div>

      <!-- Dynamic Progress -->
      <div style="margin-top:16px;background:#f8fafc;border:1px solid var(--hair);border-radius:12px;padding:14px 18px">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:750">
          <span>Pelacakan Kemajuan Proyek (Dynamic Progress)</span>
          <span style="color:var(--brand)">67% Tuntas</span>
        </div>
        <div class="bar" style="height:10px;margin-top:6px"><i style="width:67%;background:linear-gradient(90deg,#4f46e5,#0ea5e9)"></i></div>
      </div>
    </div>

    <!-- 2 Column Workspace Grid -->
    <div style="display:grid;grid-template-columns:1.8fr 1fr;gap:18px">
      <!-- Left: Checklist Tasks -->
      <div class="panel">
        <div class="panel-h">
          <h3>Checklist Tugas Milestone</h3>
          <div class="act"><span class="chip on">+ Tambah Tugas</span></div>
        </div>
        <div style="padding:16px 20px">
          <div class="task-item">
            <div class="task-check done">${ic('check','i-xs')}</div>
            <div style="flex:1">
              <div class="task-title done">Kick-off dan Pengumpulan Aset Identitas Brand Kopi</div>
              <div class="task-meta">Tuntas 10 hari lalu · Diverifikasi Mitra</div>
            </div>
          </div>
          <div class="task-item">
            <div class="task-check done">${ic('check','i-xs')}</div>
            <div style="flex:1">
              <div class="task-title done">Penyusunan User Flow dan Wireframe Antarmuka Menu</div>
              <div class="task-meta">Tuntas 5 hari lalu · Draf Figma Disetujui</div>
            </div>
          </div>
          <div class="task-item">
            <div class="task-check" onclick="this.classList.toggle('done')"></div>
            <div style="flex:1">
              <div class="task-title">Perancangan Visual High-Fidelity &amp; Desain Kemasan Vektor</div>
              <div class="task-meta" style="color:#b45309;font-weight:700">Tenggat: 4 Hari Lagi</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Deliverables & Complete Action -->
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="panel">
          <div class="panel-h">
            <h3>Penyerahan Luaran (Deliverables)</h3>
          </div>
          <div style="padding:16px 18px">
            <div style="font-size:11.5px;color:var(--muted);font-weight:700">Tautan Berkas Kerja:</div>
            <div style="background:#f1f5f9;border-radius:8px;padding:8px 10px;font-size:11.5px;margin-top:4px;word-break:break-all">
              <a href="https://figma.com/file/sample-kopi-kenangan-redesign" target="_blank" style="color:var(--brand);font-weight:700">figma.com/file/sample-kopi-kenangan-redesign</a>
            </div>
            <div style="font-size:11.5px;color:#475569;margin-top:8px;font-style:italic">
              "Telah diselesaikan rancangan draf utama UI menu digital dan mockup packaging pouch kopi."
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-h">
            <h3>Aksi Selesaikan Proyek</h3>
          </div>
          <div style="padding:16px 18px">
            <p style="font-size:12px;color:var(--body);line-height:1.5;margin-bottom:12px">
              Menandai proyek sebagai tuntas akan mengunci workspace dan membuka lembar evaluasi ulasan dua arah.
            </p>
            <button class="btn sm" style="background:#16a34a;color:#fff;font-weight:800;border-radius:8px;width:100%" onclick="pickWNav('profil')">
              ✓ Selesaikan Proyek &amp; Beri Review
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,

  admin: `
  <div class="wpad">
    <!-- Header mirroring admin/dashboard.blade.php -->
    <div style="background:#fff;border-radius:16px;border:1px solid var(--hair);padding:20px 24px;margin-bottom:18px">
      <div style="display:inline-flex;align-items:center;gap:6px;background:#fef3c7;color:#92400e;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:750;margin-bottom:6px">
        🛡️ Platform Governance &amp; Oversight Center
      </div>
      <h2 style="font-size:20px;font-weight:800;color:var(--ink)">
        Dasbor Tata Kelola Administrator
      </h2>
      <p style="font-size:12px;color:var(--muted);margin-top:3px">
        Monitoring statistik ekosistem, moderasi konten brief proyek, dan pencatatan audit aktivitas keamanan.
      </p>
    </div>

    <!-- 4 Stats Cards from admin/dashboard.blade.php -->
    <div class="stats" style="margin-bottom:20px">
      <div class="stat">
        <div class="lbl">TOTAL PENGGUNA</div>
        <div class="num">5</div>
        <div class="delta muted">3 Mahasiswa • 2 UMKM</div>
      </div>
      <div class="stat">
        <div class="lbl">TOTAL PROYEK</div>
        <div class="num" style="color:#4f46e5">3</div>
        <div class="delta muted">Semua brief terdaftar</div>
      </div>
      <div class="stat">
        <div class="lbl">WORKSPACE AKTIF</div>
        <div class="num" style="color:#0284c7">1</div>
        <div class="delta muted">Sedang berkolaborasi</div>
      </div>
      <div class="stat">
        <div class="lbl">PROYEK TUNTAS</div>
        <div class="num" style="color:#16a34a">1</div>
        <div class="delta muted">Terselesaikan &amp; diulas</div>
      </div>
    </div>

    <!-- Moderation Table from admin/dashboard.blade.php -->
    <div class="panel">
      <div class="panel-h">
        <h3>Moderasi &amp; Manajemen Proyek Publik</h3>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Judul Proyek</th>
          <th>Pemilik UMKM</th>
          <th>Kategori</th>
          <th>Status Publikasi</th>
          <th style="text-align:right">Aksi Moderasi</th>
        </tr>
        <tr>
          <td><b>#1</b></td>
          <td><b>Pengembangan Website Katalog Digital &amp; Sistem Order UMKM</b></td>
          <td>Hendra Setiawan (CV Kreasi Digital)</td>
          <td><span class="pill brand">Web Development</span></td>
          <td><span class="pill ok">PUBLISHED</span></td>
          <td style="text-align:right"><button class="pill bad" style="cursor:pointer">Nonaktifkan</button></td>
        </tr>
        <tr>
          <td><b>#2</b></td>
          <td><b>Redesain UI/UX Web &amp; Desain Kemasan Kopi Kenangan</b></td>
          <td>Sari Wahyuni (Kedai Kopi Kenangan)</td>
          <td><span class="pill purple">UI/UX Design</span></td>
          <td><span class="pill brand">ACTIVE</span></td>
          <td style="text-align:right"><button class="pill bad" style="cursor:pointer">Nonaktifkan</button></td>
        </tr>
        <tr>
          <td><b>#3</b></td>
          <td><b>Implementasi Dashboard Pencatatan Penjualan Harian</b></td>
          <td>Hendra Setiawan (CV Kreasi Digital)</td>
          <td><span class="pill brand">Web Development</span></td>
          <td><span class="pill gold">COMPLETED</span></td>
          <td style="text-align:right"><button class="pill ok" style="cursor:pointer">Tinjau</button></td>
        </tr>
      </table>
    </div>
  </div>`,

  profil: `
  <div class="wpad">
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px">
      <!-- Left Column: User Card -->
      <div class="panel" style="padding:24px;text-align:center">
        <div style="width:64px;height:64px;border-radius:20px;background:linear-gradient(135deg,#312e81,#4338ca);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;margin-bottom:12px">
          AD
        </div>
        <h2 style="font-size:18px;font-weight:800;color:var(--ink)">Ahmad Dhafin Al Farisy</h2>
        <div style="font-size:12.5px;color:var(--muted);margin-top:2px">NIM: 187241057 · S1 Sistem Informasi</div>
        <div style="font-size:12px;color:var(--brand);font-weight:750;margin-top:2px">Universitas Airlangga</div>
        <div style="margin-top:14px;padding:8px 14px;background:#fef3c7;border:1px solid #fde68a;border-radius:12px;display:inline-flex;align-items:center;gap:6px;color:#92400e;font-weight:800;font-size:14px">
          ⭐ Skor Portofolio: 450
        </div>
        <p style="font-size:12.5px;color:var(--body);line-height:1.6;margin-top:14px">
          Mahasiswa S1 Sistem Informasi Universitas Airlangga. Fullstack Software Engineer menguasai Laravel, Blade, PostgreSQL, dan FastAPI.
        </p>
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--hair)">
          <button class="btn sm" style="background:var(--brand);color:#fff;border-radius:8px;width:100%;font-weight:750">
            📄 Unduh CV (Supabase Storage)
          </button>
        </div>
      </div>

      <!-- Right Column: Skills & Two-Way Reviews -->
      <div style="display:flex;flex-direction:column;gap:18px">
        <div class="panel">
          <div class="panel-h">
            <h3>Taksonomi Keterampilan Teknis (Skills)</h3>
          </div>
          <div style="padding:16px 20px">
            <div class="skill-tags">
              <span class="skill-pill match">Laravel</span>
              <span class="skill-pill match">Blade</span>
              <span class="skill-pill match">PHP</span>
              <span class="skill-pill match">PostgreSQL</span>
              <span class="skill-pill match">FastAPI</span>
              <span class="skill-pill match">Python</span>
              <span class="skill-pill match">HTML/CSS</span>
              <span class="skill-pill match">Tailwind CSS</span>
              <span class="skill-pill match">REST API</span>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-h">
            <h3>Ulasan &amp; Evaluasi Mitra UMKM Terverifikasi</h3>
          </div>
          <div style="padding:18px 20px">
            <div style="border-left:4px solid #10b981;padding-left:14px">
              <div style="display:flex;justify-content:space-between;align-items:baseline">
                <b>Hendra Setiawan — CV Kreasi Digital Nusantara</b>
                <span style="color:#f59e0b;font-weight:800">⭐⭐⭐⭐⭐ 5.0 / 5.0</span>
              </div>
              <div style="font-size:11.5px;color:var(--muted);margin-top:2px">Proyek: Dashboard Pencatatan Penjualan Harian Berbasis Cloud</div>
              <div style="font-size:12.5px;color:var(--body);line-height:1.6;margin-top:8px;font-style:italic">
                "Pengerjaan dashboard penjualan harian toko kami selesai tepat waktu dan kodenya sangat rapi. Sangat merekomendasikan talenta ini untuk UMKM lain."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
};

function pickWNav(k) {
  S.wnav = k;
  renderWeb();
}

function renderWeb() {
  const wrailEl = document.getElementById('wrail');
  if (wrailEl) {
    wrailEl.innerHTML = WSECT.map(([sid, icon, label]) => `
      <div class="r ${SECT_OF[S.wnav] === sid ? 'on' : ''}" onclick="pickWNav('${WSECT.find(x => x[0] === sid)[3][0][0]}')">
        ${ic(icon, 'i-sm')}
        <span>${label}</span>
      </div>`).join('');
  }

  const activeSect = WSECT.find(x => x[0] === (SECT_OF[S.wnav] || 'utama'));
  const wmhEl = document.getElementById('wmh');
  const wnavEl = document.getElementById('wnav');
  if (wmhEl && activeSect) {
    wmhEl.innerHTML = `<b>${activeSect[2]}</b><span class="cnt">${activeSect[3].length}</span>`;
  }
  if (wnavEl && activeSect) {
    wnavEl.innerHTML = `
      <div class="lbl">Menu Modul</div>
      ${activeSect[3].map(([k, icon, title, cnt]) => `
        <button class="nav ${S.wnav === k ? 'on' : ''}" onclick="pickWNav('${k}')">
          ${ic(icon, 'i-sm')}
          <span>${title}</span>
          ${cnt ? `<span class="cnt">${cnt}</span>` : ''}
        </button>`).join('')}
    `;
  }

  const wmainEl = document.getElementById('wmain');
  if (wmainEl) {
    wmainEl.innerHTML = `
      <div class="topbar">
        <div>
          <h2>${WTITLE[S.wnav] || 'Dashboard'}</h2>
          <div class="sub">SkillBridge Hub · Academic &amp; Industry Collaboration Platform with NLP SkillMatch</div>
        </div>
        <div class="search">
          ${ic('search','i-xs')}
          <input type="text" placeholder="Cari proyek, keahlian, UMKM..." style="border:0;outline:0;font:inherit;font-size:12px;width:100%">
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="pill ok" style="font-size:11px">⚡ FastAPI NLP Connected</span>
        </div>
      </div>
      ${WSCREEN[S.wnav] || WSCREEN.dash}
    `;
  }
}

const SECT_OF = {};
WSECT.forEach(([sid, , , items]) => items.forEach(([k]) => { SECT_OF[k] = sid; }));
