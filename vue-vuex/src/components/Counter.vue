<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increase</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrease</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['increment', 'decrement'])
    }
};
</script>
