<template>
    <div>
        <p>Double Counter is: {{ doubleCounter }}</p>
        <p>Clicks is: {{ stringCounter }}</p>
        {{ owncomputed }}
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['doubleCounter', 'stringCounter']),
        owncomputed(){
            return "some thing";
        }
    }
};
</script>
