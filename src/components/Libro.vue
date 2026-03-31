<script setup>
import {computed} from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
 libroProp: {
    type: Object,
    requiered: true,
    },
});

// evento personalizado para pedirle a App.vue que elimine al libro
const emit = defineEmits(['delete']);

const handleDelete = () => {
    emit('delete', props.libroProp.id); 
};

const mensajeStock = computed(()=> props.libroProp.stock ? `Hay ${props.libroProp.stock} libros en stock` : `No hay libros en stock`); 

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="props.libroProp.image" class="card-img-top" :alt="`Imagen del libro ${props.libroProp.title}`">
        <div class="card-body">
            <h5 class="card-title">{{props.libroProp.title}}</h5>
            <p class="card-text">${{props.libroProp.price}}</p>
        </div>
    <div class="card-footer bg-transparent border-top-0">
        <p class="small">{{mensajeStock}} </p> 
        <div class="d-flex justify-content-between">
            <RouterLink class="btn btn-outline-secondary" :to="{name: 'DetalleLibro', params: {id: props.libroProp.id}}">Ver detalle</RouterLink>
            <button class="btn btn-outline-danger" @click="handleDelete">
                <Icon icon="lucide:trash-2" width="24" height="24" />
            </button>
    </div>
    </div>
    </div>
</template>

<style scoped>
img {
    height: 400px;
    object-fit: cover;
}
</style>