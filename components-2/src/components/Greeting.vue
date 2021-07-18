<template>
  <p v-if="checkAge">{{ msg }}</p>
  <p v-else>You must be 25 or older to view this message</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "The user is 25 or older",
    };
  },
  computed: {
    checkAge() {
      return this.age ? this.age >= 25 : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$green: rgb(52, 184, 52);
p {
  color: $green;
}
</style>
