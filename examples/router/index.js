import VueRouter from 'vue-router'

const routes=[
    {
        path:'/',
        component:()=>import('../demo/Home.vue')
    },
    {
        path:'/card',
        component:()=>import('../demo/Card.vue')
    }
]

const router=new VueRouter({
    routes
})

export default router