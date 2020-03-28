<template>
    <div id="header">
        <h3>Quotes Added</h3>
        <div class="progress" style="height: 20px;">
            <div class="progress-bar" role="progressbar" :style="progressClass">
                {{ size }}/10
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        size: Number
    },
    computed: {
        progressClass() {
            return {
                width: (this.size / 10) * 100 + '%'
            };
        }
    }
};
</script>

<style scoped></style>
