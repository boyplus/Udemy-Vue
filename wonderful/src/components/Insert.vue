<template>
    <div id="insert">
        <div id="myInsert">
            <h6>Quote</h6>
            <textarea class="form-control" type="text" rows="5" />
            <div id="addBtn">
                <button type="button" class="btn btn-primary">Add Quote</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style scoped>
#insert {
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
#myInsert {
    /* background-color: aliceblue; */
    padding: 30px;
    width: 70%;
}
#addBtn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>
