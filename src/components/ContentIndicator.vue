<template>
  <div id="empty-content" v-if="show">
    <div v-if="type==='message'">{{message}}</div>
    <div v-else>
      <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
        <circle id="loading-inner" cx="75" cy="75" r="60" />
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class EmptyContent extends Vue {
  @Prop() items
  @Prop() type
  message = '加载中'
  show = true
  @Watch('items')
  onItemsChange (val, oldVal) {
    if (oldVal === null && val.length < 1) {
      this.message = '暂无内容'
    } else if (oldVal === null) {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
#empty-content {
  #load {
    width: 50px;
    animation: loading 3s linear infinite;
    #loading-inner {
      stroke: {
        dashoffset: 0;
        dasharray: 300;
        width: 10;
        miterlimit: 10;
        linecap: round;
      }
      animation: loading-circle 2s linear infinite;
      stroke: rgb(114, 117, 117);
      fill: transparent;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-circle {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -600;
    }
  }
}
</style>
