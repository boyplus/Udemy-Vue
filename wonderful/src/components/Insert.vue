<template>
    <div id="insert">
        <div id="myInsert">
            <h6>Quote</h6>
            <textarea class="form-control" type="text" rows="5" v-model="msg" />
            <div id="addBtn">
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="addQuote(msg)"
                >
                    Add Quote
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        addQuote: Function
    },
    data() {
        return {
            msg: ''
        };
    }
};
</script>

<style scoped>
#insert {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
#myInsert {
    padding: 30px;
    width: 70%;
}
#addBtn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>
