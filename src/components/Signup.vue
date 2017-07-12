<template>
  <div class="columns">
    <div class="column col-12">{{msg}}</div>
    <div class="column col-12">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="input-name">Name</label>
          </div>
          <div class="col-7">
            <input class="form-input" v-model="name" type="text" id="input-name" placeholder="Name" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="input-email">Email</label>
          </div>
          <div class="col-7">
            <input class="form-input" v-model="email" type="text" id="input-email" placeholder="Email" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-12">
            <button @click="joinVuebook" type="button" class="btn btn-primary" :class="{'loading' : loading}">Join</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '@/router';
import * as types from '@/store/types';

export default {
  data() {
    return {
      msg: 'Signup',
      name: '',
      email: '',
      loading: false,
    };
  },
  methods: {
    ...mapActions({
      userUpdateUser: types.USER__UPDATE_USER,
    }),
    joinVuebook() {
      this.loading = true;
      this.userUpdateUser({
        name: this.name,
        email: this.email,
      })
      .then(() => {
        this.loading = false;
        router.push({ path: 'feed' });
      });
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
