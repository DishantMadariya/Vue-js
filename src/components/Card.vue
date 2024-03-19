<template>
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-Content">
        <slot></slot>
      </div>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
</template>

<script>
export default {
    name: 'CardC',
    props :['content']
}
</script>

<style scoped>
.card{
  box-shadow: 0 4px 8px plum;
  transition: all 0.3s ease-in-out;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
}
.card:hover{
  box-shadow: 0 8px 16px 0 purple;
}


</style>
