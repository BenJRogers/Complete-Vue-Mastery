<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "this is a message",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$green: green;
p {
  color: $green;
}
</style>
