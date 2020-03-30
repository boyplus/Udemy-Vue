<template>
    <div id="intro">
        <h1>{{ timestamp }}</h1>
        <div id="app">
            <span>{{ datenow }}</span>
        </div>
    </div>
</template>

<script>
var moment = require('moment');
export default {
    data() {
        return {
            datenow: ''
        };
    },
    methods: {
        time() {
            var self = this;
            this.datenow = moment().format();
            setTimeout(self.time, 1000);
        }
    },
    mounted: function() {
        this.time();
    }
};
</script>

<style></style>
