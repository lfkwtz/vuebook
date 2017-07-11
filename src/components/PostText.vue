<template>
  <div class="container" @dblclick="test">
    <div class="content">{{txtData.data.content}}</div>
    <div class="postedBy">Posted by: {{txtData.user}}</div>
    <div class="likes">Likes: {{txtData.likes}}</div>
  </div>
</template>

<script>
export default {
  props: ['txtData'],
  data() {
    return {
    };
  },
  methods: {
    test() {
      console.log('hi');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: lightgrey;
  padding: 15px;
  margin: 10px 0;
}
.content {
  font-size: 1.6em;
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
