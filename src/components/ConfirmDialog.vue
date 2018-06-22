<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <span>{{message}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:dialogVisible', false)">取 消</el-button>
      <el-button type="primary" @click="handleComfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ComfirmDialog extends Vue {
    @Prop() dialogVisible = false
    @Prop() message = ''
    @Prop() callback = () => {}

    handleComfirm(){
      this.$emit('update:dialogVisible', false)
      console.log(this.callback)
      this.callback()
    }
  };
</script>
