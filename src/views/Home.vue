<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <span v-if="user.name" class="header">{{user.name}}'s Vuebook</span>
        <span v-else class="header">Join Vuebook</span>
      </div>
      <div v-if="user.name" class="container">
        <div class="columns">
          <div class="column col-12">
            <router-link :to="{ name: 'Feed' }">feed</router-link>
            /
            <router-link :to="{ name: 'Profile' }">profile</router-link>
          </div>
          <div class="column col-2"></div>
          <div class="column col-8">
            <div class="input-group">
              <input class="form-input"
                type="text"
                v-model="update"
                placeholder="Post an update..." />
                <button @click="submitPost" type="button" class="btn btn-primary input-group-btn">Post</button>
            </div>
          </div>
          <div class="column col-2"></div>
        </div>
      </div>
      <div class="column col-3"></div>
      <div class="column col-6">
        <router-view class="view"></router-view>
      </div>
      <div class="column col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as types from '@/store/types';

export default {
  data() {
    return {
      update: '',
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  methods: {
    ...mapActions({
      feedUpdateFeed: types.FEED__UPDATE_FEED,
    }),
    submitPost() {
      this.feedUpdateFeed({
        user: this.user.name,
        content: this.update,
        type: 'txt',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 2.5em;
}
</style>
