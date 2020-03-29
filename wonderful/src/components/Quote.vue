<template>
    <div id="quote" class="card">
        <h5>{{ msg }}</h5>
    </div>
</template>
<script>
export default {
    props: {
        msg: String,
        removeQuote: Function
    }
};
</script>

<style scoped>
#quote {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    transition: 0.4s;
}
#quote:hover {
    box-shadow: 2px 2px 2px #ccc;
    transition: 0.4s;
}
</style>
