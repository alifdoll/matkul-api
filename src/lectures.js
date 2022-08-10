const lectures = [
  {
    id: 2902,
    kode: "1605B072",
    nama: "Keselamatan Kesehatan Kerja dan Lingkungan",
    sks: "2",
    ujian: "Ujian minggu ke-1 Kamis 13:30",
    kelas: [
      {
        kode: "-",
        kuota: "30",
        jadwal: [
          { hari: "Senin", waktuMulai: "14.50", waktuBerakhir: "16.40" },
        ],
      },
    ],
  },
  {
    id: 2903,
    kode: "1605B073",
    nama: "Kerja Praktek",
    sks: "2",
    ujian: "Ujian minggu ke-3 Sabtu 07:30",
    kelas: [
      {
        kode: "MA",
        kuota: "20",
        jadwal: [
          { hari: "Sabtu", waktuMulai: "07.00", waktuBerakhir: "08.50" },
        ],
      },
    ],
  },
  {
    id: 2906,
    kode: "1605B082",
    nama: "Tugas Akhir",
    sks: "5",
    ujian: "Ujian minggu ke-2 Sabtu 16:00",
    kelas: [
      {
        kode: "-",
        kuota: "20",
        jadwal: [
          { hari: "Sabtu", waktuMulai: "13.00", waktuBerakhir: "18.30" },
        ],
      },
      {
        kode: "MA",
        kuota: "10",
        jadwal: [
          { hari: "Sabtu", waktuMulai: "13.00", waktuBerakhir: "18.30" },
        ],
      },
    ],
  },
];

module.exports = lectures;
