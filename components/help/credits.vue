<script setup lang="ts">
const AUTHOR = ['mkamadeus', '13518035']
const INSPIRATION = [
  ['yonasadiel', '13516030'],
  ['ashura', '13517099'],
  ['jonesnapoleon', '13518086']
]
const SUPPORTERS = [
  ['yonasadiel', '13516030', 'pioneer, ide fitur, dll.'],
  ['soikon', '18217006', 'domain, implementasi teknis, versioning, dll.'],
  ['graciellavl', '18219075', 'ide fitur, review UI/UX, dll.'],
  ['stefanuslamlo', '13519101', 'ide fitur'],
  ['ilovenoodles', '13519101', 'ide fitur']
]
</script>

<template>
  <section mb-2>
    <h3 text-xl font-bold>
      Credits
    </h3>
    <p my-2>
      Sebelumnya, salam geprek 🍗 🔥!
    </p>
    <p my-2>
      Geprek NIM Finder ITB dibuat oleh <Handle :name="AUTHOR[0]" :nim="AUTHOR[1]" />. Terinspirasi
      dari beberapa NIM Finder lain yang dibuat oleh beberapa pengembang lainnya:
      <template v-for="[name, nim] in INSPIRATION">
        <Handle :name="name" :nim="nim" />&nbsp;
      </template>
    </p>
    <p my-2>
      Geprek NIM Finder dibangun melalui bantuan dan masukan dari beberapa pihak, baik dalam
      implementasi maupun ide-ide fitur yang ada untuk NIM Finder ini. Terima kasih kepada nama-nama
      berikut:
      <ul my-1 pl-6>
        <li v-for="[name, nim, reason] in SUPPORTERS" my-1 list-disc>
          <Handle :name="name" :nim="nim" /> ({{ reason }})
        </li>
      </ul>
    </p>
  </section>
</template>
