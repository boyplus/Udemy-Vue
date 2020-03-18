<template>
    <div id="app">
        <h1>Bitcoin Price Index</h1>
        <div v-if="error">Error for feting data from api</div>
        <div v-else>
            <div v-if="loading">
                <p>Loading...</p>
            </div>
            <div v-else>
                <div
                    v-for="currency in info"
                    :key="currency.description"
                    class="currency"
                >
                    {{ currency.description }}:
                    <span class="lighten">
                        <span v-html="currency.symbol"></span
                        >{{ currency.rate_float | currencydecimal }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            info: null,
            loading: true,
            error: false
        };
    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2);
        }
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.info = response.data.bpi;
            })
            .catch(error => {
                console.log(error);
                this.error = true;
            })
            .finally(() => {
                this.loading = false;
            });
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
