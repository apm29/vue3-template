import { createRouter, createWebHashHistory } from 'vue-router'

export const constRoutes = [
  {
    path: "/",
    name: "Dashboard",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      hideInMenu: true,
      title: "登录"
    }
  }
];

export const functionalRoutes = [
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/functional/401.vue"),
    meta: { hideInMenu: true, title: "401" }
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/functional/500.vue"),
    props: route => ({ code: route.query.code, desc: route.query.desc }),
    meta: { hideInMenu: true, title: "500" }
  },
  {
    path: "/:path(.*)",
    name: "404",
    props:(route)=>({
      path:route.params.path
    }),
    component: () => import("@/views/functional/404.vue"),
    meta: { hideInMenu: true, title: "404" }
  }
];

export const router =  createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes:[
    ...constRoutes,
    ...functionalRoutes
  ]
})

export function resetRouter() {
  //将路由matcher重置为仅支持初始路由
  const newRouter = createRouter({
    routes: constRoutes
  });
  router.matcher = newRouter.matcher; // the relevant part
}


