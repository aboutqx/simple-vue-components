<template>
  <div id="home">
    <div class="container">
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Home extends Vue {

}
</script>

<style lang="scss">
#home{
  width:100%;
  .container {

  }
}
.move-enter-active,.move-leave-active {
    transition: opacity .5s
}

.move-enter,.move-leave {
    opacity: 0
}
</style>
