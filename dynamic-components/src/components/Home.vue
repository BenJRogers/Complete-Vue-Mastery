<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log("component was unmounted");
  },

  deactivated() {
    console.log("component was deactivated");
  },
};
</script>