<template>
  <button @click.prevent="changeAge">Bump up age</button>
  <p>The user is {{ age }} old!</p>
  <p>The aged doubled {{ ageDouble }}</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["change-age"], // <--- add this line for vue 3 emits
  methods: {
    changeAge() {
      this.$emit("change-age", 3);
    },
  },
  computed: {
    ageDouble() {
      return this.age * 2;
    },
  },
};
</script>
