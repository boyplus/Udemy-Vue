<template>
    <div id="quotes">
        <h3>This is your quotes</h3>
        <br />
        <template>
            <div class="row" v-for="quote in quotes" :key="quote" style="margin:15px">
                <div class="col-3" v-for="q in quote" :key="q">
                    <app-quote :msg="q"></app-quote>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import Quote from './Quote.vue';
export default {
    components: {
        appQuote: Quote
    },
    props: {
        quotes: Array
    },
    data() {
        return {};
    },
    updated() {
        console.log('updated');
        console.log(this.quotes);
    }
};
</script>

<style scoped>
#quotes {
    /* box-sizing: border-box; */
}
</style>
