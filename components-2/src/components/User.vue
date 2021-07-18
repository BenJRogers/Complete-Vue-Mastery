<template>
  <p>The user is {{ age }} old!</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>

<style>
</style>