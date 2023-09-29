import { createRouter,createWebHistory } from "vue-router"

import LandingPage from "./../components/LandingPage.vue"
import Aboutus from "./../components/Aboutus.vue"
import Signup from "./../components/Signup.vue"
import Login from "./../components/Login.vue"
import Register from"./../components/register.vue"




const routes =[
    {
        path:'/',
        name:'landingpage',
        component: LandingPage,
    },

{   
    path:'/aboutus',
    name:'aboutus',
    component:Aboutus,

},
{ 
    path:'/signup',
    name:'signup',
    component: Signup,


},
{  path:'/login',
   name:'login',
   component:Login,

    },
    { path:'/register',
      name:'/register',
      component:Register,

    }
]
const router =createRouter({
    history: createWebHistory(),
    routes,
})
export default router