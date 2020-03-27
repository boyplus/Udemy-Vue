<template>
    <div class="component" id="detail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>user age: {{ userAge }}</p>
        <button @click="resetName">reset name</button>
        <button @click="resetFn()">reset name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        name: {
            type: String
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        resetName() {
            this.$emit('nameWasReset', 'Max');
        }
    },
    created() {
        eventBus.$on('ageWasEdited', data => {
            this.userAge = data;
        });
    }
};
</script>

<style scoped>
#detail {
    background-color: lightcoral;
}
</style>
