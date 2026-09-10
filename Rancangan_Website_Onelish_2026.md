# Blueprint Rancangan Website Onelish (Periode 2026)

## 1. Informasi Umum
* **Nama Klub:** Onelish - English Club (Satu University Bandung)
* **Periode Kepengurusan:** 2026 (Februari 2026 - Januari 2027)
* **Ketua (President):** Russell Reece
* **Visi 2026:** Mewujudkan Onelish sebagai UKM yang inklusif, fleksibel, dan interaktif berbasis *fun learning* untuk meningkatkan kemampuan dan kepercayaan diri berbahasa Inggris serta mengembangkan karier mahasiswa.
* **Tagline:** "It's learning, but make it fun!"

## 2. Identitas Visual (Brand Identity)
* **Mascot:** Oniel (Karakter yang cerdas, penuh semangat, dan selalu ingin tahu).
* **Palet Warna Utama:**
  * **Grounded Teal:** `#4d8f81` (Warna dominan untuk background atau header)
  * **Intelligent Blue:** `#3a55a5` (Untuk teks utama atau elemen aksen)
  * **Expressive Coral:** `#f3765a` (Untuk tombol Call-to-Action sekunder / hover)
  * **Friendly Yellow:** `#ffcb96` (Untuk tombol Call-to-Action utama atau highlight)
* **Bentuk & Gaya (Shapes & Lines):** 
  * Menggunakan *rounded shapes* (sudut melingkar/tumpul) yang melambangkan keterbukaan dan keamanan.
  * Garis tegas namun lembut (*bold yet soft lines*).

## 3. Struktur Halaman Website (Sitemap & Content)

### A. Beranda (Home)
* **Hero Banner:** Menyapa pengunjung dengan maskot Oniel dan pesan "Speak Boldly, Think Sharply, and Never Stop Learning!".
* **Value Proposition:** Penjelasan singkat tentang keunggulan Onelish di periode 2026, seperti "Weekly Shift System" (jadwal fleksibel) dan metode gamifikasi.
* **Call to Action (CTA):** Tombol "Join Onelish" (menuju form pendaftaran) dan tombol sekunder "Play Now" (menuju halaman Games Lobby).

### B. Tentang Kami (About Us)
* **Visi & Misi 2026:** Penjabaran komitmen untuk *Career-Ready Members* dan *Sustainable Community*.
* **Struktur Organisasi (Periode 2026):** Menampilkan kepengurusan yang diketuai oleh Russell Reece, beserta jajaran Divisi (Akademik, Business Development, HRD, Project Officer, Humas, dan Publikasi/Dokumentasi).

### C. Games Lobby (The Playground)
* Berisi antarmuka yang menampilkan kumpulan permainan (*boardgame* fisik yang bisa dimainkan di *stand* kampus, maupun *mini-games* digital interaktif).
* Data game diambil langsung dari *sheet* **Games** di Google Sheets.

### D. Program & Events
* Menampilkan acara-acara unggulan periode 2026 seperti:
  * **Bi-Monthly Skill Up** (Seminar 2 bulanan seperti *English for Interview* / *Public Speaking 101*).
  * **Onelish Internal Competition**.
  * **Fun-Raising Stand (Boardgame Station)**.
* Mengambil data dari *sheet* **Events** beserta galeri dokumentasinya.

## 4. Arsitektur Database (Google Sheets API)
Menggunakan arsitektur *Single Fetch* via Google Apps Script (GAS) dengan implementasi `CacheService`.
* **Sheet 1: Games** (`Game_ID`, `Nama`, `Tipe`, `Deskripsi`, `Thumbnail_URL`, `Game_Link`)
* **Sheet 2: Members** (`Member_ID`, `Nama`, `Divisi`, `Shift_Preference`, `Foto_URL`, `Quote`)
* **Sheet 3: Events** (`Event_ID`, `Nama_Event`, `Tanggal`, `Deskripsi`, `Galeri_Foto`)
