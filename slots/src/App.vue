<template>
  <AppForm>
    <template v-slot:help>
      <p>{{ helpText }}</p>
    </template>
    <template class="fields" v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
    </template>
    <template class="buttons" v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>This should go in the default slot</p>
  </AppForm>
  <!-- <AppForm>
    <template v-slot:help>
      <p>This is a Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm> -->
</template>

<script>
import AppForm from "./components/AppForm.vue";
export default {
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      helpText: "This is some help text",
    };
  },
};
</script>

