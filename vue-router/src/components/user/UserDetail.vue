<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded id: {{ id }}</p>
        <router-link
            tag="button"
            class="btn btn-primary"
            :to="{
                name: 'userEdit',
                params: { id: id },
                query: { locale: 'en', q: '100' }
            }"
            >Edit user detail</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        };
    }
};
</script>
