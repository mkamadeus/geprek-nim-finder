## Credits

Sebelumnya, salam geprek 🍗 🔥!

Geprek NIM Finder ITB dibuat oleh :handle{name="mkamadeus" nim="13518035"}.
Terinspirasi dari beberapa NIM Finder lain yang dibuat oleh beberapa pengembang lainnya:

::inspirations
---
inspirations:
- alias: yonasadiel
  nim: "13516030"
- alias: ashura
  nim: "13517099"
- alias: jonesnapoleon
  nim: "13518086"
---
::

Geprek NIM Finder dibangun melalui bantuan dan masukan dari beberapa pihak, baik dalam implementasi maupun ide-ide fitur yang ada untuk NIM Finder ini.
Terima kasih kepada orang-orang berikut:


::supporters
---
supporters:
- alias: yonasadiel
  nim: "13516030"
  reason: pioneer, ide fitur, dll.
- alias: soikon
  nim: "18217006"
  reason: domain, implementasi teknis, versioning, dll.
- alias: graciellavl
  nim: "18219075"
  reason: ide fitur, review UI/UX, dll.
- alias: stefanuslamlo
  nim: "13519101"
  reason: ide fitur
- alias: ilovenoodles
  nim: "13520029"
  reason: scraping, data cleaning, dll.
---
::

## Fitur Geprek

Situs ini dibuat dengan tujuan untuk mencari nama dan NIM bagi mahasiswa ITB.
Tenang saja, situs ini tidak mengumbar data pribadi dari mahasiswa ITB kok :-)

Untuk mencari mahasiswa ITB yang dimaksud, bisa dilakukan pencarian terhadap nama, NIM,
fakultas, atau jurusan yang bersangkutan.

Berikut ini penjelasan terkait beberapa fitur pencarian yang bisa dilakukan.

- **Pencarian lewat NIM**
  
  Tentunya, Anda bisa mencari lewat NIM yang diberikan.
  Kalau tidak bisa ini, bukan NIM finder namanya.
  Misalnya, `13518035`.

  Diterima juga masukan berupa NIM parsial.
  Masukan yang berupa angka dan bukan tahun akan digunakan untuk mencari NIM.
  Misalnya, `13518`.

- **Pencarian lewat nama**
  
  Anda bisa melakukan pencarian lewat nama seseorang.
  Masukan nama dapat berupa potongan nama seseorang.
  Misalnya,
  `muh`,
  `muhammad`,
  `mat kev`, dll.

- **Pencarian lewat fakultas/jurusan dan tahun**
  
  Anda dapat mencari seseorang atau beberapa orang berdasarkan tahun dan fakultas/jurusannya.
  Dengan memberikan masukan ini beserta pencarian nama, akan dihasilkan hasil yang merupakan subset dari kedua pencarian tersebut.

- **Pencarian menggunakan chips/filter**
  
  Anda bisa menambahkan filter lewat chips, demi kemudahan pencarian.    
		
Terkait pencarian fakultas, saat ini bisa dilakukan lewat pencarian dari inisial suatu fakultas diikuti dengan tahunnya, seperti contoh `MA18`.

Pencarian dengan chips bisa dilakukan dengan mengetikan dalam format `?<query anda>?`.
