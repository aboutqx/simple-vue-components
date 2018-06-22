<template>
  <div id="empty-content">
    <div v-if="show">{{message}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator'
@Component
export default class EmptyContent extends Vue {
  @Prop() items = undefined
  message = '' // '加载中'
  show = true
  @Watch('items')
  onItemsChange (val, oldVal) {
    if (oldVal !== undefined && val.length < 1) {
      this.message = ''
    } else if (oldVal !== undefined) {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
#empty-content {
}
</style>
