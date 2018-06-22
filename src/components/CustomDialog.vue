<template>
  <div class="custom-dialog" v-if="visible">
    <div id="custom-dialog-content">
      <slot></slot>
      <i class="el-icon-close" @click="handleClose"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class CustomDialog extends Vue {
  @Prop() visible = false

  created() {}

  handleClose() {
    this.$emit('update:visible', false)
    this.$emit('close')
  }
}
</script>
<style lang="scss">
.custom-dialog {
  position: relative;
  #custom-dialog-content {
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 6px rgba(10,16,20,.15), 0 0 12px rgba(10,16,20,.12);
    border-radius: 4px;
    padding: 20px 30px;
    animation: fadeIn 0.6s;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index:999;
    > img {
      cursor: auto;
    }
    i.el-icon-close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      cursor: pointer;
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
}
</style>
