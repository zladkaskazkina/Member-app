import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Members from "../pages/MemberList.vue";
import Member from "../pages/MemberDetail.vue";
import Contact from "../pages/ContactForm.vue";
import Register from "../pages/Registration.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/members",
    name: "Members",
    component: Members
  },
  {
    path: "/members/:id",
    name: "Member",
    component: Member,
    props:true,
    children: [
      { path: "contact",
        component: Contact}
    ]
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
