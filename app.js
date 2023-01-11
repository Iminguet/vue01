const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
      random: 0,
    };
  },
  watch: {
    // name(value) {
    //   this.random = Math.random();
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },

  // los métodos computed se interpretan como propiedades, no como funciones.
  // Es esencial no llamarlos desde el html con los parentesis ()
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
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
      this.lastName = '';
    },
  },
});

app.mount('#events');
