<template>
<div id="dashboard">
  dashboard
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Dashboard extends Vue {
  mounted () {
    this.$el.style.height = (document.body.offsetHeight - 60)+'px'

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
