<template>
    <div>
        <button
            class="btn btn-primary"
            @click="asyncIncrement({ by: 50, duration: 500 })"
        >
            Increase
        </button>
        <button
            class="btn btn-primary"
            @click="asyncDecrement({ by: 100, duration: 500 })"
        >
            Decrease
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions(['asyncIncrement', 'asyncDecrement'])
    }
};
</script>
