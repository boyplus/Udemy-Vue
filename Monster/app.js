new Vue({
    el: '#app',
    data: {
        startgame: false,
        you: 100,
        monster: 100,
        logs: []
    },
    methods: {
        start: function() {
            this.startgame = true;
            this.you = 100;
            this.monster = 100;
        },
        attack: function() {
            const r1 = Math.floor(parseInt(Math.random() * 10)) + 1;
            const r2 = Math.floor(parseInt(Math.random() * 10)) + 1;
            this.you -= r1;
            this.monster -= r2;
            this.logs.push('MONSTER HITS PLAYER FOR ' + r1);
            this.logs.push('PLAYER HITS MONSTER FOR ' + r2);
        },
        specialAttack: function() {
            const r1 = Math.floor(parseInt(Math.random() * 15)) + 1;
            const r2 = Math.floor(parseInt(Math.random() * 15)) + 1;
            this.you -= r1;
            this.monster -= r2;
            this.hasLog = true;
        },
        heal: function() {
            const r2 = Math.floor(parseInt(Math.random() * 20)) + 1;
            this.you += 10 - r2;
            this.hasLog = true;
        },
        giveUp: function() {
            this.startgame = false;
        }
    },
    computed: {
        youStyle: function() {
            return {
                width: this.you + '%'
            };
        },
        monsterStyle: function() {
            return {
                width: this.monster + '%'
            };
        }
    }
});
