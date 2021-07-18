<template>
  <p>{{ msg }}</p>
</template>
<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "this is a greeting",
    };
  },
};
</script>
<style scoped>
p {
  color: rgb(1, 153, 1);
}
</style>