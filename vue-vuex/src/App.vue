<template>
    <div id="app" class="container">
        <h1>Vuex</h1>
        <hr />
        <app-count></app-count>
        <hr />
        <app-result></app-result>
        <hr />
        <app-another-result></app-another-result>
    </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';
export default {
    components: {
        appCount: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult
    }
};
</script>

<style></style>
