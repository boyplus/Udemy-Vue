<template>
    <div id="app" class="container">
        <app-header></app-header>
        <appInsert :addQuote="addQuote"></appInsert>
        <app-quotes></app-quotes>
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
            masg: '',
            maxQuote: 10,
            quotes: []
        };
    },
    methods: {
        addQuote(msg) {
            console.log('hello');
            console.log(msg);
            // console.log(this.msg);
            
            // if (this.quotes.length < 10) {
            //     this.quotes.push(this.msg);
            //     this.msg = '';
            // } else {
            //     alert('You cannot add quote anymore');
            // }
        }
    }
};
</script>

<style scoped>
#app {
    margin-top: 30px;
}
</style>
