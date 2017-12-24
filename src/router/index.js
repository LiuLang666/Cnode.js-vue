//const routes=[{
//	
//	
//}]
import Home from "../components/home.vue"
import Login from "../components/login.vue"
import Article from "../components/article.vue"
export default[{
	path:"/home",
	component: Home
},{
	path:"/login",
	component:Login
},
{	
	name:"article",
	path:"/article/:id",
	component:Article
},
{
	path:'/',
	redirect:'/home'
}
]
