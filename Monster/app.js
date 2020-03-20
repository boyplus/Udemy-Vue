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
        attack: function(mx) {
            const r1 = Math.floor(parseInt(Math.random() * mx)) + 1;
            const r2 = Math.floor(parseInt(Math.random() * mx)) + 1;
            this.you -= r1;
            this.monster -= r2;
            this.logs.push({
                msg: 'MONSTER HITS PLAYER FOR ' + r1,
                playerTurn: false
            });
            this.logs.push({
                msg: 'PLAYER HITS MONSTER FOR ' + r2,
                playerTurn: true
            });
            this.checkWin();
        },
        heal: function() {
            const r2 = Math.floor(parseInt(Math.random() * 20)) + 1;
            this.you += 10 - r2;
            this.hasLog = true;
            this.checkWin();
        },
        giveUp: function() {
            this.startgame = false;
        },
        checkWin: function() {
            console.log('checked');
            if (this.mosnter <= 0 && this.you <= 0) {
                this.mosnter = 0;
                this.you = 0;
                this.startgame = false;
                alert('draw');
            } else if (this.monster <= 0) {
                this.mosnter = 0;
                this.startgame = false;
                alert('You win');
            } else if (this.you <= 0) {
                this.you = 0;
                this.startgame = false;
                alert('You lose');
            }
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
