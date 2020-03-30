<template>
    <div>
        <br />
        <h1>The User Page</h1>
        <hr />
        <button class="btn btn-primary" @click="maviGateToHome">
            Go to home
        </button>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        };
    },
    watch: {
        $route(to, form) {
            this.id = to.params.id;
        }
    },
    methods: {
        maviGateToHome() {
            this.$router.push('/');
        }
    }
};
</script>
