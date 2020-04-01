<template>
    <div>
        <p>result: {{ counter }}</p>
    </div>
</template>
<script>
export default {
    computed: {
        counter() {
            return this.$store.state.count;
        }
    }
};
</script>
