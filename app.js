const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
    };
  },
  methods: {
    add(num) {
      if (this.counter < 20) {
        this.counter += this.num;
      }
    },
    remove(num) {
      if (this.counter > 0) {
        this.counter -= this.num;
      }
    },
  },
});

app.mount('#events');
