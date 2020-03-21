<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Click me</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Normal";
    }
  }
};
</script>
