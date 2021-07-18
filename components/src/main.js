import { createApp } from 'vue'
import App from './App.vue'
//import Greeting from './Components/Greeting.vue';

const vm = createApp(App);

//vm.component('Greeting', Greeting);

vm.mount("#app")

