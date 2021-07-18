<template>
  <p>This is the first message</p>
  <Greeting />
</template>

<script>
import Greeting from "./components/Greeting.vue";

export default {
  name: "App",
  components: {
    Greeting,
  },
};
</script>

<style lang="scss">
p {
  color: red;
}
</style>
