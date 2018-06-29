<template>
  <div class="custom-dialog" v-show="customVisible">
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
  @Prop() customVisible

  handleClose () {
    this.$emit('update:customVisible', false)
  }
}
</script>
<style lang="scss">
.custom-dialog {
  position: absolute;
  width:30%;
  #custom-dialog-content {
    position: absolute;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 6px rgba(10,16,20,.15), 0 0 12px rgba(10,16,20,.12);
    border-radius: 4px;
    padding: 20px 30px;
    animation: custom-dialog-in .3s ease-out;
    animation-fill-mode: forwards;
    transform: translate(-50%, -50%);
    opacity: 0;
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
@keyframes custom-dialog-in {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;

  }
}
</style>
