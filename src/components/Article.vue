<template>
  <div>
    <h2>Article Component</h2>
    <h2>{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ Published ? 'Yes' : 'No' }}</h2>
  </div>
</template>
  
  <script>
export default {
  name: "ArticleComponent",
  props: {
    title: {
        type : String,
        required : true,
        default : 'Article Default Title'
    },
    likes: Number,
    Published : Boolean
  },
};
</script>
  
  <style scoped>
h2 {
  color:blueviolet;
}
</style>
  