<template>
    <div class="component" id="user">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName">Change ny name</button>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :name="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    },
    data() {
        return {
            name: 'Max',
            age: 27
        };
    },
    methods: {
        changeName() {
            this.name = 'Anna';
            console.log(this.name);
        },
        resetName() {
            this.name = 'Max';
        }
    }
};
</script>

<style scoped>
#user {
    background-color: lightblue;
}
</style>
