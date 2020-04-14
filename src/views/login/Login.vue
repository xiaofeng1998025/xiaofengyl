<template>
	<div class="login">
		<div class="login_body">
			<el-col :xs="20"  :sm="6" type="flex" justlif="center">
				<div class="logind">
					<el-input size="medium" placeholder="请输入账号" prefix-icon="el-icon-user" v-model="input2"> </el-input>
					<el-input size="medium" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="input3"> </el-input>
					<el-button type="primary">登 录</el-button>
					<p> <span><router-link to="/regis">去注册</router-link></span><span><router-link to="/findback">忘记密码？</router-link></span></p>
					<i><img src="@img/103.gif" alt=""></i>
				</div>
			</el-col>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">
	.login{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.login:after{
		content: "";
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg,#c9e8dd, #1ea391);
		position: absolute;
		top:0;
		z-index: -1;
	}
	.login_body{
		display: flex;
		justify-content: center;
		.logind{
			background: rgba(250,250,250,0.6);
			border-radius: 5px;
			padding: 20px;
			position: relative;
			.el-input{
				margin-bottom: 20px;
			}
			.el-button{
				width: 100%;
			}
			p{
				text-align: right;
				cursor: pointer;
				font-size: 12px;
				margin-top: 5px;
				span{
					margin-left: 10px;
					a{
						color: #003830;
					}
				}
			}
			i{
				width: 100%;
				display: flex;
				justify-content: center;
				position: absolute;
				top:-58px;
				left: 0;
			}
		}
	}
</style>