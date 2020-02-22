<template>
  <div id="app" class="container">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data: {
    message: 'Hello, Vue!'
  }
}
</script>
<style scoped>
.container{
  color: red;
}
</style>