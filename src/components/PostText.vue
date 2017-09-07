<template>
  <div class="container"  @dblclick="feedAddLike({id: txtData.id})">
    <div class="content">{{txtData.data.content}}</div>
    <div class="postedBy">Posted by: {{txtData.user}}</div>
    <div class="likes">Likes: {{txtData.likes}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '@/store/types';

export default {
  props: ['txtData'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      feedAddLike: types.FEED__ADD_LIKE,
    }),
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
