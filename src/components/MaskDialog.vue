<template>
  <div class="mask-dialog">
    <div id="mask-dialog-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class MaskDialog extends Vue {
  @Prop() maskVisible
  mask: HTMLElement
  @Watch('maskVisible')
  onMaskVisibleChanged(val: boolean, oldVal: boolean) {
    if (val && !oldVal) {
      this.mask = document.querySelector('.mask') || document.createElement('div')
      this.mask.classList.add('mask')
      document.querySelector('.mask') || document.body.appendChild(this.mask)

      this.$el.classList.add('show')
    }
  }
  created () {
    this._hideDialog = this._hideDialog.bind(this)
  }
  mounted () {
    this.$el.addEventListener('click', this._hideDialog)
  }
  _hideDialog (e) {
    if (!e.target.classList.contains('mask-dialog')) return
    document.body.removeChild(this.mask)
    this.$el.classList.remove('show')

    this.$emit('update:maskVisible', false)
    // document.body.style.overflow = 'auto'
  }
  destroyed() {}
}
</script>
<style lang="scss">
.mask-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  &.show {
    display: flex;
  }
  #mask-dialog-content {
    animation: fadeIn 0.6s;
    max-height: 90%;
    > img {
      cursor: auto;
    }
  }
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 99;
  animation: mask-fade-in 0.4s;
}
@keyframes mask-fade-in {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
}
</style>
