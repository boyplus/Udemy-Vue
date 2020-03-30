<template>
    <div id="app" class="container">
        <h1>Routing</h1>
        <!-- <appHeader></appHeader> -->
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
    components: {
        appHeader: Header
    }
};
</script>

<style></style>
