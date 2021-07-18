<template>
  <button @click.prevent="changeAge">Bump up age EVENT</button>
  <button @click.prevent="ageIncreaseFn(5)">Bump up age CB</button>
  <p>The user is {{ age }} old!</p>
  <p>The aged doubled {{ ageDouble }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //   required: true,
      //   default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageIncreaseFn: Function,
  },
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
