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
                <hr />
                <button class="btn btn-primary" @click="fetchData">
                    Get Data
                </button>
                <br /><br />
                <input type="text" v-model="node" />
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="u in users"
                        :key="u.username"
                    >
                        {{ u.username }} - {{ u.email }}
                    </li>
                </ul>
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
            },
            users: [],
            resource: {},
            node: 'data'
        };
    },
    methods: {
        submit() {
            // this.$http.post('', this.user).then(
            //     response => {
            //         console.log(response);
            //     },
            //     error => {
            //         console.log(error);
            //     }
            // );
            // this.resource.save({}, this.user);
            this.resource.saveAlt(this.user);
        },
        fetchData() {
            // this.$http
            //     .get('')
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(data => {
            //         let result = [];
            //         for (let key in data) {
            //             result.push(data[key]);
            //         }
            //         this.users = result;
            //     });
            this.resource
                .getData({ node: this.node })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let result = [];
                    for (let key in data) {
                        result.push(data[key]);
                    }
                    this.users = result;
                });
        }
    },
    created() {
        const customActions = {
            saveAlt: { method: 'POST', url: 'alternative.json' },
            getData: { method: 'GET' }
        };
        this.resource = this.$resource('{node}.json', {}, customActions);
    }
};
</script>

<style></style>
