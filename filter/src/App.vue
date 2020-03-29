<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col">
                <p>{{ text | toUpperCase }}</p>
                <p>{{ text | toLowerCase }}</p>
                <input v-model="filterText" />
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">
                        {{ fruit }}
                    </li>
                </ul>
            </div>
        </div>
        <app-list></app-list>
    </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js';
export default {
    mixins: [fruitMixin],
    data() {
        return {
            text: 'Hello World'
        };
    },
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        appList: List
    }
};
</script>

<style></style>
