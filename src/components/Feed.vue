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
      feed: [
        {
          id: 1,
          type: 'img',
          likes: 1,
          user: 'John Smith',
          data: {
            caption: 'This is my cute pup',
            link: 'http://loremflickr.com/320/320/dog',
          },
        },
        {
          id: 2,
          type: 'txt',
          likes: 1,
          user: 'Robert Davenport',
          data: {
            content: 'Thank you for all the birtday wishes',
          },
        },
        {
          id: 3,
          type: 'img',
          likes: 1,
          user: 'John Smith',
          data: {
            caption: 'Do you like this cute pup?',
            link: 'http://loremflickr.com/320/320/dog',
          },
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
