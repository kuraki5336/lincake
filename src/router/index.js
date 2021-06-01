import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: import(/* webpackChunkName: "default" */ '../views/Auth/home'),
        children: [
            {
                path: '/content',
                component: import(/* webpackChunkName: "default" */ '../views/Auth/contentus')
            },
        ]
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "default" */ '../views/Login')
    }
]


const router = createRouter({
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes,
});


// router.beforeEach((to, from, next) => {
//     // ...
// })

export default router

