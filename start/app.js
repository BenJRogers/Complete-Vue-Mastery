const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ben",
            middleName: "",
            lastName: "Rogers",
            url: "https://google.com",
            rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        getFullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        changeAge(addOrSubtract) {
            addOrSubtract ? this.age++ : this.age--;
        },
        updateLastName(msg, event) {
            //not needed because Vue can handle in the template with .prevent
            // event.preventDefault;
            this.lastName = event.target.value;
            console.log(msg);
        },
        addMiddleName(event) {
            this.middleName = event.target.value;
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