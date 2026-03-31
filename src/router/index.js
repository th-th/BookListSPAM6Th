import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/libros',
        name: 'Libros',
        component: () => import('@/views/LibrosView.vue'),
    },
    {
        path: '/libros/:id',
        name: 'DetalleLibro',
        component: () => import('@/views/DetalleView.vue'),
        props: true,
    }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});