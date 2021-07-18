<template>
  <p>This is the first message</p>
  <Greeting :age="age" />
  <User :age="age" @change-age="ageIncrease" :ageIncreaseFn="ageIncreaseCb" />
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
    ageIncrease(num) {
      this.age += num;
    },
    ageIncreaseCb(ageValue) {
      this.age += ageValue;
    },
  },
};
</script>

<style lang="scss">
p {
  color: rgb(107, 16, 16);
}
</style>
