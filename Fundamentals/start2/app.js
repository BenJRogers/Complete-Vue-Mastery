let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            circleTextColor: '',
            size: 150,
        }

    },
    computed: {
        circleColor() {
            return { purple: this.isPurple };
        },
        circleSize() {
            return { width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px' }
        },
        circleRotation() {
            return { transform: 'rotate(30deg)' }
        }

    },
}).mount('#app')