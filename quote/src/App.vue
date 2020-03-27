<template>
    <div class="container">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
            <component :is="selectedComponent">
                <p>Default content</p>
            </component>
        </keep-alive>

        <!-- <app-quote>
            <h2 slot="title">The Quote</h2>
            <h6 slot="sub">The subtitle here</h6>
            <p slot="content">A wonderdul quote</p>
        </app-quote> -->
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';
export default {
    components: {
        appQuote: Quote,
        appNew: New,
        appAuthor: Author
    },
    data() {
        return {
            selectedComponent: 'appQuote'
        };
    }
};
</script>

<style scoped></style>
