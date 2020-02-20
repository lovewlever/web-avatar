import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: "/", redirect: "/app"},
  {path: "/app", component: ()=> import('../App.vue')},
  {
    path: "/home", component: () => import('../views/Home.vue'), children: [
      {path: "/recommend", component: ()=> import("../components/EmoticonRecommend")},
      {path: "/emoticon", component: () => import("../components/EmoticonContent")},
      {path: "/emo_hot", component: () => import("../components/EmoticonHot")},
      {path: "/upload_emoticon", component: () => import("../components/EmoticonUpload")}
    ]
  },
  {path: "/welcome", component: () => import("../views/Welcome")},
  {path: "/login", component: () => import("../views/Login")},
  {path: "/registered", component: () => import("../views/Registered")},
  {path: "/navigation", component: () => import("../components/Navigation")},
  {path: "/user_center", component: () => import("../views/UserCenter"),children:[
      {path:"/mod_user_info" ,component:()=> import("../components/ModifyUserInfo")},
      {path:"/mod_pwd" ,component:()=> import("../components/ModifyPwd")}
    ]}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
