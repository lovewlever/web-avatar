import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: "/", redirect: "/app"},
  {path: "/app", component: ()=> import('../App.vue')},
  {
    path: "/home", component: () => import('../views/Home.vue'), children: [
      {path: "/recommend", component: ()=> import("../components/Recommend")},
      {path: "/emoticon", component: () => import("../components/EmoticonContent")},
      {path: "/upload_emoticon", component: () => import("../components/UploadEmoticon")}
    ]
  },
  {path: "/welcome", component: () => import("../views/Welcome")},
  {path: "/login", component: () => import("../views/Login")},
  {path: "/registered", component: () => import("../views/Registered")},
  {path: "/navigation", component: () => import("../components/Navigation")}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
