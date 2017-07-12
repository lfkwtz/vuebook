<template>
  <div class="container">
    <img class="image" :src="imgData.data.link">
    <div class="caption">{{imgData.data.caption}}</div>
    <div class="postedBy">Posted by: {{imgData.user}}</div>
    <div class="likes">Likes: {{imgData.likes}}</div>
  </div>
</template>

<script>
export default {
  props: ['imgData'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: lightgrey;
  padding: 20px;
  margin: 10px 0;
}
.image {
  height: auto;
  max-width: 100%;
}
.caption {
  font-size: 1.3em;
  font-weight: bold;
  padding-bottom: 10px;
}
.postedBy {
  float: left;
}
.likes {
  float: right;
}
</style>
