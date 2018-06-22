<template>
  <div id="aside">
    <el-menu router :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#424242" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>社区管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/community">所有社区</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/community/new">创建社区</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>社区内容管理</span>
        </template>
        <el-menu-item-group>
          <template>
            <el-menu-item v-for="com in communities" :key="com.id" :index="`/content/${com.name}/${com.id}`">{{com.name}}</el-menu-item>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="3">
        <template slot="title" >
          <i class="el-icon-service"></i>
          <span>发布人管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/publisher">所有发布人</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-menu-item index="/banner">
        <i class="el-icon-setting"></i>
        <span slot="title">导航图设置</span>
      </el-menu-item>
      <el-menu-item disabled>
        <i class="el-icon-info"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
@Component
export default class Aside extends Vue {
  @Getter('community/communities') communities
  page: number = 1
  pageSize: number = 10
  get onRoutes() {
    return this.$route.path
  }
  created() {
    this.$store.dispatch('community/setCommunities', {
      page: this.page,
      pageSize: this.pageSize
    })
  }
}
</script>

<style lang="scss">
#aside {
  width: 250px;
  height: 100%;
  background: #424242;
  position: fixed;
  top: 60px;
  left: 0;
  color: white;
  overflow: auto;
  .el-menu {
    border-right: solid 3px #d5b948;
  }
  .el-menu-vertical-demo {
    margin: 40px 0 0 0;
  }
}
</style>
