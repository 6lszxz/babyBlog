<template>
    <div>
        <el-button type="danger" @click="logout">
            退出登录
        </el-button>
    </div>
    
</template>

<script>
export default{
    name: "mySpacePage",
    data(){
        return{

        }
    },
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$store.state.userId = null;
        }
    }
}
</script>

<style lang="scss">
@use "@/styles/index.scss"
</style>