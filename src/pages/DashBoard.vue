<template>
<div id="dashboard">
  <el-button @click="confirmVisible=true"> comfirm dialog</el-button>
  <ConfirmDialog :confirmVisible.sync="confirmVisible" :message="comfirmMessage" :callback="callback"></ConfirmDialog>

  <el-button @click="customVisible=true">custom dialog</el-button>
  <CustomDialog :customVisible.sync="customVisible"><img src="../assets/logo.png" alt=""><p>dialog</p></CustomDialog>
  <br>
  <el-button @click="maskVisible=true">mask dialog</el-button>
  <MaskDialog :maskVisible.sync="maskVisible"><img src="../assets/logo.png" alt=""><p>dialog</p></MaskDialog>

  <ContentIndicator :items="items" ></ContentIndicator>
  <div v-if="items&&items.length>0">内容为:{{items}}</div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import CustomDialog from '@/components/CustomDialog.vue'
import MaskDialog from '@/components/MaskDialog.vue'
import ContentIndicator from '@/components/ContentIndicator.vue'
@Component({
  components: { ConfirmDialog, CustomDialog, MaskDialog, ContentIndicator }
})
export default class Dashboard extends Vue {
  confirmVisible = false
  comfirmMessage = '确认删除'
  callback = () => { this.$message('删除成功') }

  customVisible = false

  maskVisible = false

  items = null

  mounted () {
    this.$el.style.height = (document.body.offsetHeight - 60) + 'px'
    setTimeout(() => {
      this.items = [1, 2, 3]
    }, 2000)
  }
}
</script>
<style lang="scss">
@import '../assets/scss/index';
#dashboard{
  @include flex-center();
  width:100%;
  a {
    color: $baseColor;
    text-decoration:underline;
  }
  >div{
    flex: 1;
  }
}
</style>
