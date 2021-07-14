const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ben",
            lastName: "Rogers",
            url: "https://google.com"
        }
    },
    methods: {
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Anne'
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: "Liam",
//             lastName: "Rogers"
//         }
//     }
// }).mount('#secondApp');