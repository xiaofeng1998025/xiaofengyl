<template>
	<div class="Regis">
		<div class="login_body">
			<el-col :xs="20"  :sm="6" type="flex" justlif="center">
				<div class="logind">
					<el-input size="medium" placeholder="请输入账号" prefix-icon="el-icon-user" v-model="mber"> </el-input>
					<el-input size="medium" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="password"> </el-input>
					<div class="mailbox">
						<el-input size="medium" placeholder="请输入注册邮箱" prefix-icon="el-icon-message" v-model="mailbox"> </el-input>
						<el-button type="primary" size="mini">{{yanztitl}}</el-button>
					</div>
					<el-input size="medium" placeholder="请输入验证码" prefix-icon="el-icon-chat-line-round" v-model="verification"> </el-input>
					<el-button type="primary">注 册</el-button>

					<i><img src="@img/103.gif" alt=""></i>
				</div>
			</el-col>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Regis",
	    data(){
            return{
                mber:'',         //账号
                password:'',       //密码
                mailbox:'',        //邮箱
                yanztitl:'获取验证码',
                verification:'',      //验证码
            }
	    }
    }
</script>

<style scoped lang="scss">
	.Regis{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.Regis:after{
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
			>.el-button{
				width: 100%;
			}
			p{
				text-align: right;
				cursor: pointer;
				font-size: 12px;
				margin-top: 5px;
				span{
					margin-left: 10px;
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
			.mailbox{
				display: flex;
				margin-bottom: 20px;
				.el-input{
					margin-bottom: 0;
					margin-right: 10px;
				}
			}
		}
	}
</style>