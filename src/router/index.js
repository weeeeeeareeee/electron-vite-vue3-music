import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory('/'),
	routes: [
		{
			path: '/',
			name: 'Recommend',
			component: () => import('../pages/Recommend/index.vue'),
		},
		{
			path: '/MusicHall',
			name: 'MusicHall',
			component: () => import('../pages/MusicHall/index.vue'),
		},
	],
})

export default router
