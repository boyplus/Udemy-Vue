<template>
    <div>
        <button class="btn btn-primary" @click="increase">Increase</button>
        <button class="btn btn-primary" @click="decrease">Decrease</button>
    </div>
</template>

<script>
export default {
    methods: {
        increase() {
            this.$store.state.count++;
        },
        decrease() {
            this.$store.state.count--;
        }
    }
};
</script>
