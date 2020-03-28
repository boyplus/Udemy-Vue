<template>
    <div id="app" class="container">
        <app-header :size="quotes.length"></app-header>
        <appInsert :addQuote="addQuote"></appInsert>
        <app-quotes :quotes="rows"></app-quotes>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from './components/Header.vue';
import Insert from './components/Insert.vue';
import Quotes from './components/Quotes.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        appHeader: Header,
        appInsert: Insert,
        appQuotes: Quotes,
        appFooter: Footer
    },
    data() {
        return {
            maxQuote: 10,
            quotes: [],
            rows: [[], [], []]
        };
    },
    methods: {
        addQuote(msg) {
            console.log(msg);
            if (this.quotes.length < 10) {
                this.quotes.push(msg);
                let index = 0;
                this.rows = [[], [], []];
                for (let i = 0; i < this.quotes.length; i++) {
                    if (this.rows[index].length >= 4) {
                        index++;
                        this.rows[index].push(this.quotes[i]);
                    } else {
                        this.rows[index].push(this.quotes[i]);
                    }
                }
                console.log(this.quotes);
            } else {
                alert('You cannot add quote anymore');
            }
        }
    }
};
</script>

<style scoped>
#app {
    margin-top: 30px;
}
</style>
<style>
*{
    box-sizing: border-box;
}
</style>
