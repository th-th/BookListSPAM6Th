<script setup>
import librosJson  from '@/data/libros.json';

const props = defineProps({
  id: String,
});

const libro = librosJson.find(libro => libro.id == props.id);
console.log(librosJson);  
console.log(libro);  
</script>

<template>
  <div v-if="libro != undefined">
    <div class="row">
      <div class="col-md-4">
      <img :src="libro.image" class="img.fluid" alt="`Imagen del libro {{libro.title}}`">
      </div>
      <div class="col-md-8">  
      <h3>Título: {{libro.title}}</h3>
      <hr>
      <h4>Autor: {{ libro.authors[0].name }}</h4>
      <hr>
      <p>Resumen: {{libro.resume}}</p>
      <p>Calificación: {{libro.rating.average*10}} ⭐️</p>
      </div>
    
    </div>
  </div>
  <p v-else>Libro no encontrado {{ props.id }}</p>
  <RouterLink class="btn btn-outline-secondary" :to="{name: 'Libros'}">Ver más libros</RouterLink>
</template>

<style scoped>

</style>