# Agus Triyadi — Portfolio

Portfolio profesional Agus Triyadi, dipublikasikan sebagai static site melalui GitHub Pages.

## Struktur konten (Choice A)

Presentasi berada di `index.html`, `assets/css/site.css`, dan `assets/js/site.js`. Konten editable dipisahkan ke file JSON berikut:

- `content/profile.json` — nama, headline, lokasi, about, email, dan Instagram
- `content/skills.json` — daftar keahlian
- `content/experience.json` — pengalaman kerja dan tanggung jawab
- `content/focus.json` — area fokus saat ini
- `content/projects.json` — slot dokumentasi proyek yang belum memiliki data terkonfirmasi

Edit file JSON melalui GitHub: buka file → ikon pensil → simpan perubahan dengan commit ke branch `main`. GitHub Pages akan mempublikasikan perubahan setelah build selesai. Tidak ada login admin buatan; GitHub adalah workflow editor dan autentikasi yang digunakan.

## Menjalankan dan memeriksa lokal

Jangan membuka `index.html` langsung jika ingin memuat JSON karena browser dapat memblokir `fetch` dari `file://`. Jalankan server static:

```bash
python -m http.server 8000
```

Lalu buka <http://localhost:8000>.

## Deployment

GitHub Pages menggunakan branch `main` dengan source folder `/ (root)`.

## Batasan publikasi

Hanya `assets/gallery/yogyakarta.jpg` yang digunakan sebagai foto profil. Dokumentasi visual/gallery dihapus dari website, dan foto lain tidak disimpan di repository. Belum ada proyek selesai yang ditampilkan: `content/projects.json` hanya berisi placeholder yang ditandai. ZIP materi belajar data-analysis tidak disertakan dalam build ini.
