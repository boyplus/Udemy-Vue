<template>
    <div>
        <p>Double Counter is: {{ doubleCounter }}</p>
        <p>Clicks is: {{ stringCounter }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    // computed: {
    //     counter() {
    //         return this.$store.getters.doubleCounter;
    //     },
    //     clicks(){
    //         return this.$store.getters.stringCounter;
    //     }
    // }
    computed: { ...mapGetters(['doubleCounter', 'stringCounter']) }
};
</script>
