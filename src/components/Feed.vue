<template>
  <div>
    <div>{{msg}}</div>
    <div v-for="post in feed">
      <post-image v-if="post.type === 'img'"
        :img-data="post">
      </post-image>
      <post-text v-if="post.type === 'txt'"
        :txt-data="post">
      </post-text>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PostImage from './PostImage';
import PostText from './PostText';

export default {
  components: {
    PostImage,
    PostText,
  },
  data() {
    return {
      msg: 'Feed',
    };
  },
  computed: {
    ...mapState([
      'feed',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
