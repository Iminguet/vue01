const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue ',
      courseGoalB: 'Trabajar de esto y demostrar lo que valgo',
      vueLink: 'https://vuejs.org/',
      persona: {
        nombre: 'Aureliano',
        apellido: 'Buendía',
        ciudad: 'Macondo',
      },
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return `Nombre: ${this.persona['nombre']}, <br/> Apellido: ${this.persona.apellido}`;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
