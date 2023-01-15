getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 1,
      potions: 2,
      winner: null,
      restartButtonStatus: null,
      logMessages: [],
    };
  },

  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 5 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = 'draw';

        this.restartButtonStatus = true;
      } else if (value <= 0) {
        //player lost
        this.winner = 'monster';

        this.restartButtonStatus = true;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.winner = 'draw';

        this.restartButtonStatus = true;
      } else if (value <= 0) {
        // moster lost
        this.winner = 'player';

        this.restartButtonStatus = true;
      }
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.addLogMessage('monster', 'attack', attackValue);
      this.playerHealth -= attackValue;
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    healthPlayer() {
      const healValue = getRandomValue(20, 8);

      if (this.potions > 0) {
        if (this.playerHealth + healValue > 100) {
          this.playerHealth = 100;
        } else {
          this.playerHealth += healValue;
        }
        this.addLogMessage('player', 'heal', healValue);
        this.potions--;
        this.currentRound++;
        this.attackPlayer();
      }
    },

    restartGame() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.currentRound = 1),
        (this.potions = 2),
        (this.winner = null),
        (this.buttonStatusDuringGame = true),
        (this.restartButtonStatus = null),
        (this.logMessages = []);
    },
    surrender() {
      this.winner = 'monster';
      this.restartButtonStatus = true;
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
