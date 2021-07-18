
<template>
  <p>This is a test for scoped styles</p>
  <Greeting />
</template>

<script>
import Greeting from "./Components/Greeting.vue";
export default {
  name: "App",
  components: {
    Greeting,
  },
};
</script>