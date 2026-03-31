<script setup>
import {ref} from 'vue';
import librosJson from '@/data/libros.json';
import Libro from '@/components/Libro.vue';

const libros = ref([]);
libros.value = librosJson;

const titulo = ref('');
const autor = ref('');
const precio = ref(0);
const stock = ref(0);

const addStock = () => {
  stock.value++;
};

const removeStock = () => {
  if (stock.value > 0) {
    stock.value--;
  } 
};

const handleSubmit = () => {
  const newBook = {
    id: crypto.randomUUID(),
    title: titulo.value,
    authors: [
      {
        name: autor.value,
      },
    ],
    price: precio.value,
    stock: stock.value,
  };

  libros.value.push(newBook);
  console.log('libro agregado existosamente');
};

// para eliminar libro 
const handleDelete = (id) =>{
  console.log(`Intentando eliminar libro con id ${id}`);
  libros.value = libros.value.filter(libro.id != id);
};
</script>

<template>
  <div class="row row-cols-md-4 g-2" v-if="libros.length">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <!-- libro es el nombre de la 'prop' -->
        <Libro :libroProp="libro" @delete="handleDelete" />
      </div>
    </div>
    <div v-else>
      <h2>No hay libros disponibles</h2>
      <h3>😔</h3>
    </div>

    <hr>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="titulo" class="form-label">Título</label>
          <input type="text" name="titulo" id="titulo" class="form-control" v-model="titulo">
        </div>
        <div class="mb-3">
          <label for="autor" class="form-label">Autor</label>
          <input type="text" name="autor" id="autor" class="form-control" v-model="autor">
        </div>
        <div class="mb-3">
          <label for="precio" class="form-label">Precio</label>
          <input type="number" name="precio" id="precio" class="form-control" v-model="precio">
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <div class="d-flex align-items-center">
            <button class="btn btn-secondary btn-sm" type="button" @click="removeStock">-</button>
            <p class="mx-2 my-0">{{stock}}</p>
            <button class="btn btn-secondary btn-sm" type="button" @click="addStock">+</button>
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Agregar libro</button>
        </div>
      </form>

    </div>
</template>

<style scoped>

</style>