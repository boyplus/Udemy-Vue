<template>
    <div id="quotes">
        <h3>This is your quotes</h3>
        <br />
        <template>
            <div
                class="row"
                v-for="quote in quotes"
                :key="quote.id"
                style="margin:15px"
            >
                <div
                    class="col-3"
                    v-for="q in quote"
                    :key="q.id.id"
                    @click="removeQuote(q.quote.id)"
                >
                    <app-quote :msg="q.quote.msg"></app-quote>
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
        quotes: Array,
        removeQuote: Function
    },
    data() {
        return {};
    }
};
</script>

<style scoped></style>
