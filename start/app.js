const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ben",
            lastName: "Rogers",
            url: "https://google.com",
            rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        changeAge(addOrSubtract) {
            addOrSubtract ? this.age++ : this.age--;
        },
        updateLastName(event) {
            this.lastName = event.target.value;
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