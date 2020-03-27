<template>
    <div id="app" class="container">
        <app-header></app-header>
        <appInsert></appInsert>
        <appFooter></appFooter>
    </div>
</template>
<script>
import Header from './components/Header.vue';
import Insert from './components/Insert.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        appHeader: Header,
        appInsert: Insert,
        appFooter: Footer
    }
};
</script>

<style scoped>
#app {
    margin-top: 30px;
}
</style>
