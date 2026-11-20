/*
  DATA PORTOFOLIO
  ----------------
  Ubah teks di sini. Gambar bukti TIDAK perlu didaftarkan di sini:
  cukup simpan sebagai  images/<id>/1.jpg, 2.jpg, 3.jpg ...  (urut tanpa lompat).
  Ekstensi yang dikenali: jpg, jpeg, png, webp.
  Keterangan gambar (opsional) diisi lewat "captions", urut sesuai nomor gambar.
*/
window.PORTFOLIO = {
  profile: {
    name: "Hanif Fabianto Priyodianugrah",
    tagline: "Mahasiswa Teknik Industri yang mendalami Data Analytics dan Machine Learning.",
    summary:
      "Berpengalaman dalam pengolahan data, analisis statistik, pemodelan prediktif, dan operasi industri melalui proyek akademik, kegiatan laboratorium, dan magang. Menguasai Python, Microsoft Office, dan berbagai metode analitis.",
    facts: [
      { label: "Program studi", value: "Teknik Industri (S1), 2023 sampai sekarang" },
      { label: "Universitas", value: "Universitas Muhammadiyah Malang" },
      { label: "Lokasi", value: "Malang, Indonesia" },
      { label: "Fokus", value: "Data Analytics, Machine Learning" }
    ],
    cv: "CV-ATS_Hanif_Fabianto.docx",
    contacts: [
      { label: "Email", href: "mailto:haniff274@gmail.com", text: "haniff274@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/hanif-fabianto", text: "linkedin.com/in/hanif-fabianto" },
      { label: "GitHub", href: "https://github.com/HanifFabianto", text: "github.com/HanifFabianto" },
      {
        label: "WhatsApp",
        href: "https://wa.me/6287733150346?text=Halo%2C%20saya%20telah%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20mengetahui%20lebih%20lanjut.",
        text: "+62 877-3315-0346"
      }
    ]
  },

  sections: [
    {
      id: "proyek",
      title: "Proyek",
      entries: [
        {
          id: "supply-chain",
          title: "Supply Chain Delivery Analytics",
          org: "Proyek analitik data",
          when: "2026",
          text:
            "Menganalisis 180.519 data transaksi e-commerce dengan Python: data cleaning, exploratory data analysis, feature engineering, dan regresi machine learning untuk memprediksi durasi pengiriman.",
          tags: ["Python", "EDA", "Machine Learning"],
          figure: { value: "180.519", label: "data transaksi dianalisis" },
          captions: []
        },
        {
          id: "workload-pralon",
          title: "Analisis Beban Kerja",
          org: "PT Pralon",
          when: "2025",
          text:
            "Mengevaluasi beban kerja karyawan dengan metode %CVL, NASA-TLX, dan WLA. Hasilnya menunjukkan potensi penurunan beban kerja dari 107,95% menjadi 71,97% melalui redistribusi tenaga kerja.",
          tags: ["%CVL", "NASA-TLX", "WLA"],
          bars: {
            max: 120,
            mark: 100,
            markLabel: "100%",
            rows: [
              { label: "Beban kerja saat ini", value: 107.95, tone: "before" },
              { label: "Potensi setelah redistribusi", value: 71.97, tone: "after" }
            ]
          },
          captions: []
        },
        {
          id: "skor-17-agustus",
          title: "Website Kalkulator Skor Lomba 17 Agustus",
          org: "Desa Munjungan",
          when: "2025",
          text:
            "Membuat kalkulator skor berbasis web untuk mempermudah perhitungan nilai lomba dan pengelolaan hasil pada perayaan Hari Kemerdekaan di Desa Munjungan.",
          tags: ["Web"],
          captions: []
        },
        {
          id: "rental-kamera",
          title: "Website Rental Kamera",
          org: "Proyek pengembangan web",
          when: "2025",
          text:
            "Membuat aplikasi rental kamera berbasis web dengan PHP dan XAMPP, lengkap dengan fitur pengelolaan penyewaan dan integrasi database.",
          tags: ["PHP", "XAMPP"],
          captions: []
        }
      ]
    },

    {
      id: "pengalaman",
      title: "Pengalaman kerja",
      entries: [
        {
          id: "lab-assistant",
          title: "Data Analytics Laboratory Assistant",
          org: "Universitas Muhammadiyah Malang",
          when: "2026",
          text:
            "Membantu kegiatan laboratorium yang meliputi pengolahan data, metode analitis, dan praktik komputasi.",
          tags: [],
          captions: []
        },
        {
          id: "pralon-maintenance",
          title: "Maintenance Intern",
          org: "PT Pralon",
          when: "2025",
          text:
            "Terlibat dalam kegiatan perawatan industri serta mempelajari perawatan peralatan dan proses operasional.",
          tags: [],
          captions: []
        }
      ]
    },

    {
      id: "sertifikasi",
      title: "Sertifikasi",
      entries: [
        {
          id: "sertifikat-data-analysis",
          title: "Data Analysis",
          org: "MySkill",
          when: "2026",
          text: "Sertifikat pelatihan analisis data.",
          tags: [],
          captions: ["Sertifikat Data Analysis"]
        },
        {
          id: "sertifikat-autocad",
          title: "AutoCAD 2D & 3D Modelling",
          org: "Autodesk",
          when: "2025",
          text: "Sertifikat pemodelan 2D dan 3D menggunakan AutoCAD.",
          tags: [],
          captions: ["Sertifikat AutoCAD"]
        }
      ]
    },

    {
      id: "organisasi",
      title: "Organisasi dan kepanitiaan",
      entries: [
        {
          id: "jamaah-arf",
          title: "Kepala Bidang Minat dan Bakat",
          org: "Jamaah AR Fachruddin",
          when: "2025 sampai 2026",
          text:
            "Mengorganisasi dan mengoordinasi kegiatan panahan serta kegiatan lain untuk mendukung minat dan bakat anggota.",
          tags: [],
          captions: []
        },
        {
          id: "panitia-milad",
          title: "Relawan, kru lapangan panahan",
          org: "Panitia Milad ke-114 Muhammadiyah Kota Malang",
          when: "2026",
          text:
            "Bertugas sebagai kru lapangan panahan, mendukung operasional acara dan koordinasi kegiatan.",
          tags: [],
          captions: []
        }
      ]
    },

    {
      id: "pendidikan",
      title: "Pendidikan",
      entries: [
        {
          id: "kuliah-umm",
          title: "Sarjana Teknik Industri",
          org: "Universitas Muhammadiyah Malang",
          when: "2023 sampai sekarang",
          text: "Mata kuliah relevan:",
          tags: [
            "Data Analytics",
            "Statistics",
            "Machine Learning",
            "Probability Theory",
            "Fuzzy Decision Making",
            "Quality Control",
            "Computer Programming"
          ],
          captions: []
        }
      ]
    },

    {
      id: "keahlian",
      title: "Keahlian",
      type: "skills",
      groups: [
        {
          name: "Data dan machine learning",
          items: ["Python", "Data Analytics", "EDA", "Machine Learning", "MatLab", "MySQL", "Google Colab"]
        },
        { name: "Teknik dan desain", items: ["AutoCAD", "Canva"] },
        { name: "Pengembangan web", items: ["HTML CSS", "Visual Studio Code"] },
        { name: "Perkantoran", items: ["Microsoft Word", "Microsoft Excel", "Microsoft Power Point"] }
      ]
    }
  ]
};
