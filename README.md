# SkillBridge Hub — Prototipe Antarmuka Pitching Stakeholder
### Sistem Informasi Kolaborasi Proyek Akademik dan UMKM Berbasis NLP SkillMatch Engine
**Fakultas Sains dan Teknologi · Universitas Airlangga**

---

## 🌟 Tentang Prototipe Ini
Prototipe ini merefleksikan arsitektur dan modul nyata yang telah dikembangkan pada proyek **SkillBridge Hub**:
1. **Mahasiswa (Talenta — Persona: Ahmad Dhafin Al Farisy)**: Eksplorasi katalog proyek, analisis kedekatan vektor NLP SkillMatch (TF-IDF & Cosine Similarity), pengajuan lamaran pitching, pengelolaan checklist tugas milestone di ruang kerja (Workspace), dan akumulasi skor portofolio terverifikasi.
2. **Mitra UMKM (Persona: Hendra Setiawan — CV Kreasi Digital Nusantara & Sari Wahyuni — Kedai Kopi Kenangan)**: Penerbitan brief proyek terpandu, pemeringkatan pelamar cerdas (*Candidate Ranking*), inisiasi workspace kolaboratif, verifikasi deliverables, serta pemberian ulasan rating bintang 1-5.
3. **Administrator Tata Kelola (Admin SkillBridge Hub)**: Pengawasan statistik ekosistem, moderasi status publikasi brief proyek (PUBLISHED/DRAFT/ACTIVE), manajemen master kategori, dan pencatatan audit log keamanan.

---

## 🚀 Fitur Utama

### 1. Mode Surface Ganda (*Dual Surface Showcase*)
- 📱 **Aplikasi Mobile**: Simulasi smartphone interaktif untuk 3 peran sistem (*Mahasiswa*, *Mitra UMKM*, dan *Administrator*) lengkap dengan kartu penjelasan implementasi arsitektur di sisi kanan.
- 💻 **Dashboard Web Platform**: Dasbor web eksekutif (Sidebar Rail + Subnav + Main Canvas) yang merefleksikan tampilan blade Laravel (`home.blade.php`, `projects/candidates.blade.php`, `workspaces/show.blade.php`, `admin/dashboard.blade.php`).

### 2. Pilihan Tema Visual Hero (6 Varian)
- **1 · Vibrant Blue**: Identitas resmi SkillBridge modern & dinamis.
- **2 · UNAIR Gold**: Aksen keilmuan dan identitas almamater Universitas Airlangga.
- **3 · Emerald Tech**: Visual pertumbuhan ekonomi dan digitalisasi UMKM.
- **4 · Cyber Slate**: Gaya tech enterprise dan analitik data.
- **5 · Clean White**: Tampilan terang dan jernih untuk presentasi di ruangan terang.
- **6 · AI Violet**: Sentuhan modernitas algoritma kecerdasan buatan (*NLP Engine*).

---

## 🌐 Cara Menjalankan & Deploy ke GitHub Pages (`github.io`)

### 1. Jalankan di Lokal (Localhost)
Cukup buka file `index.html` di peramban web modern (Google Chrome / Microsoft Edge / Firefox), atau buka melalui web server lokal.

### 2. Status Deploy GitHub Pages
Repository ini telah terhubung ke `https://github.com/Dhafin-dev/prototypeSkillBridge.git` dan telah dilengkapi dengan GitHub Actions workflow `.github/workflows/deploy.yml`.

Untuk mengaktifkan GitHub Pages:
1. Di repository GitHub Anda (**Dhafin-dev/prototypeSkillBridge**), masuk ke menu **Settings** → **Pages**.
2. Pada bagian **Build and deployment** → **Source**, pilih **GitHub Actions**.
3. Website prototipe Anda akan otomatis aktif di:
   ```
   https://dhafin-dev.github.io/prototypeSkillBridge/
   ```

---

*Disusun oleh:*
**Ahmad Dhafin Al Farisy (187241057)**  
*Fullstack Software Engineer · S1 Sistem Informasi Universitas Airlangga*
