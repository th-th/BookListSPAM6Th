<script setup>
import librosJson  from '@/data/libros.json';

const props = defineProps({
    id: String,
});


const libro = librosJson.find(libro => libro.id == props.id);
console.log(libro);  
</script>

<template>
  <div class="row">
    <div class="col-md-8">
    <h1>Detalle {{libro.title}}</h1>
    <h2>Autor(es: {{ libro.authors[0].name }})</h2>
    </div>
    <div class="col-md-4">
    <img :src="libro.image" class="img.fluid" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>