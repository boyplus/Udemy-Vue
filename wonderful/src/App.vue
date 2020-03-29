<template>
    <div id="app" class="container">
        <app-header :size="quotes.length"></app-header>
        <appInsert :addQuote="addQuote"></appInsert>
        <app-quotes :quotes="rows" :removeQuote="deleteQuote"></app-quotes>
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
            rows: [[], [], []],
            nowId: 0
        };
    },
    methods: {
        addQuote(msg) {
            if (this.quotes.length < 10) {
                this.quotes.push({ id: this.nowId, msg: msg });
                this.nowId++;
                this.updateRow();
            } else {
                alert('You cannot add quote anymore');
            }
        },
        deleteQuote(id) {
            for (let i = 0; i < this.quotes.length; i++) {
                if (this.quotes[i].id == id) {
                    this.quotes.splice(i, 1);
                    break;
                }
            }
            this.updateRow();
        },
        updateRow() {
            let index = 0;
            this.rows = [[], [], []];
            for (let i = 0; i < this.quotes.length; i++) {
                if (this.rows[index].length >= 4) {
                    index++;
                    this.rows[index].push({
                        id: index,
                        quote: this.quotes[i]
                    });
                } else {
                    this.rows[index].push({
                        id: index,
                        quote: this.quotes[i]
                    });
                }
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
* {
    box-sizing: border-box;
}
</style>
