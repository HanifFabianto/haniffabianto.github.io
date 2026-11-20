# Portofolio Hanif Fabianto Priyodianugrah

Situs statis (HTML, CSS, JavaScript biasa). Tanpa build, tanpa server, tanpa biaya.

## 1. Online gratis dengan GitHub Pages (sekali saja, sekitar 5 menit)

1. Masuk ke GitHub (akun `HanifFabianto`), klik **New repository**.
2. Beri nama repo **`haniffabianto.github.io`** (format `username.github.io`, huruf kecil), set **Public**, klik **Create repository**.
3. Klik **uploading an existing file**, lalu seret SEMUA isi folder ini (bukan folder induknya): `index.html`, `style.css`, `app.js`, `data.js`, `CV-ATS_Hanif_Fabianto.docx`, `.nojekyll`, dan folder `images`. Klik **Commit changes**.
4. Buka **Settings > Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, klik **Save**.
5. Tunggu 1 sampai 2 menit. Situs aktif di **https://haniffabianto.github.io** dan bisa diakses kapan saja.

Alternatif gratis lain: Netlify Drop (seret folder ke netlify.com/drop) atau Cloudflare Pages.

## 2. Menambah gambar foto

Setiap poin punya folder sendiri di `images/`. Cukup simpan gambar dengan nama berurutan:

```
images/workload-pralon/1.jpg
images/workload-pralon/2.png
images/workload-pralon/3.jpg
```

Tidak perlu mengubah kode. Gambar muncul otomatis sebagai thumbnail yang bisa diperbesar.

| Poin | Folder |
|---|---|
| Supply Chain Delivery Analytics | `images/supply-chain/` |
| Analisis Beban Kerja PT Pralon | `images/workload-pralon/` |
| Kalkulator Skor Lomba 17 Agustus | `images/skor-17-agustus/` |
| Website Rental Kamera | `images/rental-kamera/` |
| Data Analytics Laboratory Assistant | `images/lab-assistant/` |
| Maintenance Intern PT Pralon | `images/pralon-maintenance/` |
| Sertifikat Data Analysis (MySkill) | `images/sertifikat-data-analysis/` |
| Sertifikat AutoCAD (Autodesk) | `images/sertifikat-autocad/` |
| Sertifikat Inventor | `images/sertifikat-inventor/` |
| Jamaah AR Fachruddin | `images/jamaah-arf/` |
| Panitia Milad ke-114 | `images/panitia-milad/` |
| Pendidikan | `images/kuliah-umm/` |

Aturan:
- Nama file `1`, `2`, `3`, ... tanpa lompatan. Ekstensi: `jpg`, `jpeg`, `png`, `webp`. Maksimal 12 gambar per poin.
- Di GitHub: buka folder poinnya, **Add file > Upload files**, lalu commit. Situs diperbarui sendiri dalam 1 sampai 2 menit.
- Kecilkan ukuran gambar (idealnya di bawah 500 KB) agar situs cepat dibuka.
- Keterangan gambar (opsional): isi `captions: ["Keterangan 1", "Keterangan 2"]` pada poin terkait di `data.js`.

Untuk melihat folder mana yang masih kosong, buka situs dengan tambahan `?edit`, contoh `https://haniffabianto.github.io/?edit`. Pengunjung biasa tidak melihat kotak kosong itu.

## 2b. Menambah poin baru kapan saja (editor admin.html)

Tanpa menyentuh kode. Buka `https://haniffabianto.github.io/admin.html` (atau klik dua kali `admin.html` di komputer):

1. Isi form **Tambah poin**: pilih bagian (atau buat bagian baru), isi judul, instansi, waktu, deskripsi, tag, dan pilih gambar foto jika ada. Klik **Tambahkan**.
2. Di kolom kanan Anda bisa mengubah, menghapus, dan mengurutkan poin. Keahlian baru ditambah lewat kotak **Tambah keahlian**.
3. Klik **Unduh pembaruan (.zip)**, lalu ekstrak.
4. Di repo GitHub, **Add file > Upload files**, seret `data.js` dan folder `images` hasil ekstrak, lalu **Commit changes**. File lama otomatis tertimpa. Situs diperbarui dalam 1 sampai 2 menit.

Catatan: halaman admin hanya menyusun file di browser Anda. Tidak ada yang tersimpan sampai Anda mengunggahnya ke GitHub, jadi aman walau alamatnya publik. Gambar otomatis dikecilkan dan diberi nama berurutan.

## 3. Mengubah teks

Semua teks ada di `data.js`. Edit langsung di GitHub (ikon pensil), lalu commit.

## 4. Catatan privasi

Situs ini publik. Sebelum mengunggah foto, pastikan tidak ada data sensitif: nama atau data pribadi karyawan, dokumen internal perusahaan (misalnya data analisis beban kerja PT Pralon), nomor identitas, atau nomor sertifikat yang tidak ingin dibagikan. Blur bagian itu atau minta izin terlebih dahulu. Nomor WhatsApp pada `data.js` juga bisa dihapus jika tidak ingin ditampilkan.

## 5. Warna dan animasi

Warna diambil dari palet karakter (variabel di bagian `:root` pada `style.css`). Ubah warna cukup di situ. Animasi otomatis mati bagi pengunjung yang mengaktifkan "kurangi gerakan" di perangkatnya.
