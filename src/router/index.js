import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/home"),
    children: [
      {
        path: "content",
        name: "content",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/contentus"),
      },
    ],
  },
  {
    path: "/example",
    component: () => import("../views/example"),
    children: [
        {
            path: 'store',
            component: import('../views/example/store')
        },
        {
            path: 'mulitstore',
            component: import('../views/example/storemodules')
        },
        {
            path: 'empty',
            component: import('../views/example/emptyVue')
        },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//     // ...
// })

export default router;
