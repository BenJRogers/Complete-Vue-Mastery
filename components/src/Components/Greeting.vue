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
<style scoped lang="scss">
$color: red;
p {
  color: $color;
}
</style>