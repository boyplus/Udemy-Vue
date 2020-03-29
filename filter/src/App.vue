<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col">
                <p>{{ text | toUpperCase }}</p>
                <p>{{ text | toLowerCase }}</p>
                <h3>Normal rendered</h3>
                <ul>
                    <li v-for="fruit in fruits" :key="fruit">
                        {{ fruit }}
                    </li>
                </ul>
                <input v-model="filterText" />
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">
                        {{ fruit }}
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
            text: 'Hello World',
            filterText: '',
            fruits: ['Banana', 'Apple', 'Mango', 'Melon']
        };
    },
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
                return element.match(this.filterText);
            });
        }
    }
};
</script>

<style></style>
