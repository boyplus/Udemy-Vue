<template>
    <div>
        <p>result: {{result}}</p>
    </div>
</template>
<script>
export default {
    computed:{
        result(){
            return this.$store.state.count;
        }
    }
}
</script>