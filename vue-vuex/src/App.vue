<template>
    <div id="app" class="container">
        <h1>Vuex</h1>
        <hr />
        <app-count></app-count>
        <app-another-count></app-another-count>
        <hr />
        <app-result></app-result>
        <hr />
        <app-another-result></app-another-result>
        <hr />
        <!-- <input type="text" :value="value" v-on:input="updateValue" />
        <p>{{ value }}</p> -->

        <input type="text" v-model="value" />
        <p>{{ value }}</p>
    </div>
</template>

<script>
import Counter from './components/Counter.vue';
import AnotherCounter from './components/AnotherCounter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';
export default {
    components: {
        appCount: Counter,
        appAnotherCount: AnotherCounter,
        appResult: Result,
        appAnotherResult: AnotherResult
    },
    // computed: {
    //     value() {
    //         return this.$store.getters.value;
    //     }
    // },
    // methods: {
    //     updateValue(event) {
    //         this.$store.dispatch('updateValue', event.target.value);
    //     }
    // }

    computed: {
        value: {
            get() {
                return this.$store.getters.value;
            },
            set(value) {
                this.$store.dispatch('updateValue', value);
            }
        }
    }
};
</script>

<style></style>
