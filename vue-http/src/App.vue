<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col">
                <h1>Vue-HTTP</h1>
                <div class="form-group">
                    <label>Username </label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="user.username"
                    />
                </div>
                <div class="form-group">
                    <label>Email </label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                    />
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                email: ''
            }
        };
    },
    methods: {
        submit() {
            this.$http
                .post(
                    'https://vue-http-e0103.firebaseio.com/data.json',
                    this.user
                )
                .then(
                    response => {
                        console.log(response);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }
};
</script>

<style></style>
