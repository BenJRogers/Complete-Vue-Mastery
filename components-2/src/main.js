import { createApp } from "vue";
import App from "./App.vue";
// import Greeting from "./components/Greeting.vue"

const vm = createApp(App);

//Making a global component
// vm.component('Greeting', Greeting);

vm.mount("#app");
