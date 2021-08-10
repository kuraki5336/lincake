import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/home"),
    children: [
      {
        path: "purchase",
        name: "purchase",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/purchase"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/contact"),
      },
      {
        path: "liff",
        name: "liff",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/liff"),
      },
      {
        path: "products",
        name: "products",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/products"),
        children: [
          {
            path: "product",
            name: "product",
            component: () => import(/* webpackChunkName: "auth" */ "../views/Auth/product"),
          },
        ]
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
  history: createWebHistory('/lincake/'),
  routes,
});

export default router;
