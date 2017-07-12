<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <span class="header">{{user.name}}'s Vuebook</span>
      </div>
      <div class="column col-12">
        <router-link :to="{ name: 'Feed' }">feed</router-link>
        /
        <router-link :to="{ name: 'Profile' }">profile</router-link>
      </div>
      <div class="column col-2"></div>
      <div class="column col-8">
        <div class="form-group">
          <input class="form-input" type="text" placeholder="Post an update..." />
        </div>
      </div>
      <div class="column col-2"></div>
      <div class="column col-3"></div>
      <div class="column col-6">
        <router-view class="view"></router-view>
      </div>
      <div class="column col-3"></div>
    </div>
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
.header {
  font-size: 2.5em;
}
</style>
