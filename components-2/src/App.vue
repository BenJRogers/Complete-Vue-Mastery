<template>
  <p>This is the first message</p>
  <button @click.prevent="ageIncrease">Bump up age</button>
  <Greeting :age="age" />
  <User :age="age" />
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 22,
    };
  },
  methods: {
    ageIncrease() {
      this.age++;
    },
  },
};
</script>

<style lang="scss">
p {
  color: rgb(107, 16, 16);
}
</style>
