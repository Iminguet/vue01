const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      num: 5,
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      if (this.counter < 20) {
        this.counter += this.num;
      }
    },
    remove() {
      if (this.counter > 0) {
        this.counter -= this.num;
      }
    },
  },
});

app.mount('#events');
