<template>
    <div id="app" class="container">
        <h1>Vuex</h1>
        <hr>
        <app-count></app-count>
        <hr>
        <app-result></app-result>
    </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';
export default {
    components: {
        appCount: Counter,
        appResult: Result
    }
};
</script>

<style></style>
