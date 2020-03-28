<template>
    <div id="quote" class="card">
        {{ msg }}
    </div>
</template>
<script>
export default {
    props: ['msg']
};
</script>

<style scoped>
#quote {
    min-height: 100px;
}
</style>
