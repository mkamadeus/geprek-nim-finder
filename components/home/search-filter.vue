<script setup lang="ts">
const majors = ['Matematika',
  'Fisika',
  'Astronomi',
  'Mikrobiologi',
  'Kimia',
  'Biologi',
  'Sains dan Teknologi Farmasi',
  'Aktuaria',
  'Rekayasa Hayati',
  'Rekayasa Pertanian',
  'Rekayasa Kehutanan',
  'Farmasi Klinik dan Komunitas',
  'Teknologi Pasca Panen',
  'Teknik Geologi',
  'Teknik Pertambangan',
  'Teknik Perminyakan',
  'Teknik Geofisika',
  'Teknik Metalurgi',
  'Meteorologi',
  'Oseanografi',
  'Teknik Kimia',
  'Teknik Mesin',
  'Teknik Elektro',
  'Teknik Fisika',
  'Teknik Industri',
  'Teknik Informatika',
  'Aeronotika dan Astronotika',
  'Teknik Material',
  'Teknik Pangan',
  'Manajemen Rekayasa Industri',
  'Teknik Bioenergi dan Kemurgi',
  'Teknik Sipil',
  'Teknik Geodesi dan Geomatika',
  'Arsitektur',
  'Teknik Lingkungan',
  'Perencanaan Wilayah dan Kota',
  'Teknik Kelautan',
  'Rekayasa Infrastruktur Lingkungan',
  'Teknik dan Pengelolaan Sumber Daya Air',
  'Fakultas Matematika dan Ilmu Pengetahuan Alam',
  'Sekolah Ilmu Teknologi Hayati - Sains',
  'Sekolah Farmasi',
  'Fakultas Ilmu dan Teknologi Kebumian',
  'Fakultas Teknik Pertambangan dan Perminyakan',
  'Sekolah Teknik Elektro dan Informatika - Rekayasa',
  'Fakultas Teknik Sipil dan Lingkungan',
  'Fakultas Teknik Industri',
  'Fakultas Seni Rupa dan Desain',
  'Fakultas Teknik Mesin dan Dirgantara',
  'Seni Rupa',
  'Desain',
  'Kriya',
  'Desain Interior',
  'Desain Komunikasi Visual',
  'Desain Produk',
  'Teknik Tenaga Listrik',
  'Teknik Telekomunikasi',
  'Sistem Teknologi dan Informasi',
  'Teknik Biomedis',
  'Manajemen',
  'Kewirausahaan',
  'Sekolah Teknik Elektro dan Informatika - Komputasi',
  'Sekolah Bisnis dan Manajemen',
  'Sekolah Ilmu Teknologi Hayati - Rekayasa',
  'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan'
]
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
</script>

<template>
  <DialogRoot>
    <div h-10 w-10 aspect-ratio="1">
      <DialogTrigger

        bg="gray-200/70 dark:gray-700/70 hover:gray-200 hover:dark:gray-700"
        transition="~ duration-150"
        text="gray-500 dark:gray-500"

        h-full
        flex
        items-center
        rounded-full
        p-3
        space-x-1
      >
        <div class="i-carbon-settings-adjust" />
        <!-- <div>Filter</div> -->
      </DialogTrigger>
    </div>
    <DialogPortal>
      <DialogOverlay
        fixed
        inset-0
        z-30
        bg="black/20"
      />
      <DialogContent
        pos="left-[50%] top-[50%]"
        max-h="85vh"
        max-w="450px"
        translate="x-[-50%] y-[-50%]"
        bg="white dark:gray-800"
        p="5"

        fixed
        z-100
        w="90%"
        rounded
        shadow
        focus:outline-none
      >
        <DialogTitle
          text="black dark:gray-100 lg"
          font="semibold"
        >
          Filter
        </DialogTitle>
        <DialogDescription
          text="gray-400 dark:gray-500 sm"
        >
          Filter pencarian berdasarkan jurusan, angkatan, dan lain-lain.
        </DialogDescription>
        <form mt-5>
          <fieldset class="mb-[15px] items-center gap-5">
            <label class="w-24" text="right sm gray-700 dark:gray-300" for="name">
              Fakultas atau Jurusan
            </label>
            <Dropdown placeholder="Pilih fakultas/jurusan..." :options="majors" :values="majors" />
          </fieldset>
          <fieldset class="mb-[15px] items-center gap-5">
            <label class="w-24" text="right sm gray-700 dark:gray-300" for="username"> Tahun </label>
            <Dropdown placeholder="Pilih angkatan..." :options="years" :values="years" />
          </fieldset>
          <div class="mt-5 flex justify-end">
            <DialogClose as-child>
              <button

                bg="teal-500 hover:teal-600"
                text="white dark:"
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                p="x-2"
                focus:outline-none
                shadow="none focus:~"
              >
                Save changes
              </button>
            </DialogClose>
          </div>
        </form>
        <DialogClose
          class="absolute right-2 top-2 h-5 w-5 inline-flex appearance-none items-center justify-center rounded-full text-white hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none"
          aria-label="Close"
        >
          <div class="i-carbon-close" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
