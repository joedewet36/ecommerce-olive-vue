import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2bgzZwpX5JOr7klxmnq32_LensQFdIh8",
  authDomain: "online-store-a6adf.firebaseapp.com",
  projectId: "online-store-a6adf",
  storageBucket: "online-store-a6adf.firebasestorage.app",
  messagingSenderId: "831175743582",
  appId: "1:831175743582:web:fac2345c3c69e402cefccf",
};

initializeApp(firebaseConfig);

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/",
          redirect: "/products",
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
