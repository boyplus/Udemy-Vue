<template>
    <div class="component" id="edit">
        <h3>You may edit the User here</h3>
        <p>user age: {{ userAge }}</p>
        <p>Edit me!</p>
        <button @click="changeAge">Edit age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {
        userAge: Number
    },
    methods: {
        changeAge() {
            this.userAge = 30;
            // this.$emit('ageWasEdited',this.userAge);
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
};
</script>

<style scoped>
#edit {
    background-color: lightgreen;
}
</style>
