# Agus Triyadi — Portfolio

Portofolio profesional Agus Triyadi sebagai static site di GitHub Pages. Situs ini memakai HTML, CSS, JavaScript, dan file konten yang mudah diedit—tanpa Laravel dan tanpa halaman admin/login buatan.

## Choice A: edit konten melalui GitHub

Presentasi berada di `index.html`, `assets/css/site.css`, dan `assets/js/site.js`. Konten editable berada di `content/profile.json`, `content/skills.json`, `content/experience.json`, `content/focus.json`, `content/projects.json`, dan dokumentasi `content/projects/python-data-analysis.md`.

Untuk mengubah konten, buka file di GitHub, pilih ikon pensil, edit JSON/Markdown dengan hati-hati, lalu commit ke `main`. GitHub Pages akan membangun ulang situs. GitHub adalah workflow editor dan autentikasi yang digunakan; tidak ada login admin client-side yang tidak aman.

## Menjalankan lokal

Jalankan server static dari root repository (jangan membuka `index.html` langsung karena `fetch` JSON dapat diblokir):

```bash
python -m http.server 8000
```

Buka <http://localhost:8000>.

## Dokumentasi dan batasan publikasi

- Foto profil yang dipakai hanya `assets/gallery/yogyakarta.jpg`.
- Empat PDF di `assets/documents/` adalah sampel portofolio mandiri yang fiktif, bukan pekerjaan klien dan tidak memuat klaim hasil nyata.
- Dokumentasi Python/data analysis berasal dari peninjauan arsip belajar `code_snippets-master.zip` (18 notebook dan berbagai latihan). Arsip ZIP mentah tidak diunggah.
- Pengalaman kerja, belajar mandiri, sampel fiktif, dan fokus saat ini ditampilkan sebagai kategori terpisah.

## Deployment

GitHub Pages menggunakan branch `main` dengan source folder `/ (root)`. Repository: <https://github.com/agustriyadi/agustriyadi.github.io>.
