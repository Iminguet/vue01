const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      if (this.counter < 20) {
        this.counter++;
      }
    },
    remove() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
});

app.mount('#events');
