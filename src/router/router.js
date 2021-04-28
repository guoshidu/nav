import {createRouter, createWebHistory} from 'vue-router'



const routerHistory = createWebHistory()
 
const router = createRouter({
    history: routerHistory,
    routes: [
        { 
            path: '/', 
            component: () => import("@/view/index/index.vue")
        },
        {
            path: "/:catchAll(.*)",
            redirect: "404",
            component: () => import("@/view/index/index.vue")
        },
    ]
})

export default router;