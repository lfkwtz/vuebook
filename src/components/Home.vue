<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">{{user.name}}'s Vuebook</div>
      <div class="column col-2"></div>
      <div class="column col-8">
        <div class="form-group">
          <input class="form-input" type="text" placeholder="Post an update..." />
        </div>
      </div>
      <div class="column col-2"></div>
      <div class="column col-3"></div>
      <div class="column col-6">
        <feed></feed>
      </div>
      <div class="column col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Feed from './Feed';

export default {
  components: {
    Feed,
  },
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
