<template>
  <div class="userInputGroup">
    <div>用户名：</div>
    <el-input class="userdataInput" type="text" v-model="username"></el-input>
    <div>密码：</div>
    <el-input class="userdataInput" type="text" v-model="password" show-password @change="tryLogin"></el-input>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "loginPage",
  data(){
    return{
      username: null,
      password: null,
    }
  },
  methods:{
    tryLogin(){
      axios.post('/server/login',{
        username: this.username,
        password: this.password,
      })
          .then((res)=>{
            alert(res.data);
            if(res.data === 'login successfully'){
              window.sessionStorage.setItem('username',this.username);
              this.$store.state.userId=this.username;
              this.$router.push('/home');
            }
          })
    }
  }
}
</script>

<style lang="scss">

.userInputGroup{
  flex-direction: column;
}
.userdataInput{

}

</style>