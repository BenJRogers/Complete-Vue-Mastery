<template>
  <div>
    <!-- <button type="button" @click.prevent="flag = !flag">Toggle</button>
    <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">Hello World!</h2>
      <h2 v-else key="second">Another Hello</h2>
    </transition> -->

    <button type="button" @click.prevent="flag = !flag">Toggle</button>
    <transition name="zoom" type="animation" appear>
      <h2 v-if="flag">This is CSS animations</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s linear;
}
.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
