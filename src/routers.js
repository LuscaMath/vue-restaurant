import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name:"HomePage",
        component: HomePage,
        path:"/",
    },
    {
        name:"SignUp",
        component: SignUp,
        path:"/sign-up",
    },
    {
        name:"LoginPage",
        component: LoginPage,
        path:"/login",
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router
