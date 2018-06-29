<template>
  <el-dialog title="提示" :visible.sync="cVisible" width="30%">
    <span>{{message}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:confirmVisible', false)">取 消</el-button>
      <el-button type="primary" @click="handleComfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ComfirmDialog extends Vue {
  @Prop() confirmVisible
  @Prop() message
  @Prop() callback
  // 用一个新变量接受prop,作为内部状态,好传递父组件confirmVisible和子组件visible的修改
  get cVisible () {
    return this.confirmVisible
  }
  set cVisible (val) {
    this.$emit('update:confirmVisible', val)
  }

  handleComfirm () {
    this.$emit('update:confirmVisible', false)
    if (typeof this.callback === 'function') {
      this.callback()
    }
  }
}
</script>
<style>
  .el-dialog__body{
    font-size:16px;
  }
</style>
