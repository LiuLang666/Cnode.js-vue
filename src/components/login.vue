<template>
	<div class="login">
		<header class="login-header">
			登录
		</header>
		<p class="tips">Token:</p>
		<el-input class="elinput" v-model="text" placeholder="请输入账号"></el-input>
		<el-input class="elinput" v-model="passWord" placeholder="请输入密码"></el-input>
		<el-button type="info" @click="landing()">登录</el-button>

	</div>
</template>
<script type="text/javascript">
	 export default{
	 	data(){
	 		
	 		return{
	 			text:'',
				passWord:''
	 			/*
	 			visible:false,
	 			*/
	 		}
	 	},
	 	methods:{

            landing(){

                if(!this.text && !this.	passWord){
					alert('登陆成功')
				}
			}
	 	},
	 	mounted(){



	 		
	 	}
	 	
	 }
	 
</script>
<style lang="scss" >
.login{
	margin-top: 0.5rem;
}
	.login-header{
		height: 0.4rem;
		background: lightblue;
		text-align: left;
		width: 95%;
		line-height: 0.4rem;
		font-size: 0.14rem;
		padding-left: 0.1rem;
		margin: 0 auto;
		margin-bottom: 0.2rem;
		color: white;
	}
	.tips{
		font-size: 0.14rem;
		margin-bottom: 0.1rem;
		text-align: left;
		padding-left: 0.13rem;
	}
	.elinput{
		margin-bottom: 0.2rem;
		width:90%;
		margin-left: 0.13rem;
		display: block;
	}
	.el-button{
		display: block;
		margin-left: 0.13rem;
		
	}
	.el-button span{
		color: white ;
		
	}
	.rel-model{
		 position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.6);
    -webkit-transition: opacity 3.2s linear;
    transition: opacity 3.2s linear;
		.model-content{
			width: 70%;
			height: 1rem;
			background: white;
			position:absolute;
			left:50%;
			top:50%;
			margin-left:-35%;
			margin-top:-0.5rem;
			>p{
				height: 0.5rem;
				text-align: center;
				line-height: 0.5rem;
				
			}
			.el-button{
				margin: 0 auto;
			}
		}
		
	}
	
	
</style>