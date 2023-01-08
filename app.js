const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      num: 5,
    };
  },
  methods: {
    confirmInput(evet) {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
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
