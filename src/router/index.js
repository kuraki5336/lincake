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
      {
        path: "products",
        name: "products",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/products"),
      },
      {
        path: "product",
        name: "product",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/product"),
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
      {
        path: 'composition',
        component: import('../views/example/composition')
      },
      {
        path: 'websocket',
        component: import('../views/example/websocket')
      },
    ]
  },
  {
    path: "/health",
    component: () => import("../views/health")
  }
  ,
  {
    path: "/child",
    component: () => import("../views/child")
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
