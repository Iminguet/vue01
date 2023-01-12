const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
    };
  },

  methods: {
    addGoal() {
      if (this.goals.includes(this.enteredGoalValue)) {
        return;
      } else {
        this.goals.push(this.enteredGoalValue);
      }
    },
  },
});

app.mount('#user-goals');
