const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },

  // los métodos computed se interpretan como propiedades, no como funciones.
  // Es esencial no llamarlos desde el html con los parentesis ()
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + '' + 'Buendía';
    },
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
