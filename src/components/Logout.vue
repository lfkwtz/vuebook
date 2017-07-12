<template>
  <div v-if="user.name">
    <span>Logout of {{user.name}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
