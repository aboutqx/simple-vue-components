<template>
  <div id="header">

    <h1>
      <i class="el-icon-menu"></i>
      <a href="#/dashboard">小码荟--后台管理</a>
    </h1>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{username}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { useApi } from '@/api'
@Component
export default class Header extends Vue {
  get username () {
    return localStorage.getItem('ms_username')
  }
  handleCommand (command) {
    if (command == 'logout') {
      localStorage.removeItem('ms_username')
      useApi('/logout','get',() => {
        this.$message({duration:1000,message:'退出成功'})
        setTimeout(() => { this.$router.push('/login')},2000)
      })
    }
  }
}
</script>

<style lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #212121;
  position: sticky;
  top: 0;
  z-index: 99;
  color: white;
  .el-dropdown {
    cursor: pointer;
    font-size: 16px;
    color: white;
    margin-right: 50px;
  }
  a {
    color: white;
  }
  h1 {
    font-size: 20px;
    margin-left: 30px;
    i {
      margin-right: 20px;
    }
  }
}
</style>
