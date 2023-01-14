<template>
<div class="userInputGroup">
    <div>用户名：</div>
    <el-input class="userdataInput" type="text" v-model="username"></el-input>
    <div>密码：</div>
    <el-input class="userdataInput" type="text" v-model="password" show-password @change="tryRegister"></el-input>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "registerPage",
  data(){
    return{
      username: null,
      password: null,
    }
  },
  methods:{
    tryRegister(){
      axios.post('/server/register',{
        username: this.username,
        password: this.password,
      })
        .then((res)=>{
          alert(res.data)
          this.$router.push('/home')
        })
    }
  }
}
</script>

<style lang="scss">
@use "@/styles/index.scss"
</style>