<template>
    <div id="quote">
        <div class="mytitle">
            <slot name="title"></slot>
            <slot name="sub"></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#quote {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    background-color: aliceblue;
}
h2 {
    color: red;
}
.mytitle {
    font-style: italic;
}
</style>
