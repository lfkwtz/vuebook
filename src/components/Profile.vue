<template>
  <div class="columns">
    <div class="column col-12">{{msg}}</div>
    <div class="column col-12">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="input-name">Name</label>
          </div>
          <div class="col-9">
            <input class="form-input"
              v-model="name"
              @keyup="userUpdateUser({ name, email })"
              type="text"
              id="input-name"
              placeholder="Name" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="input-email">Email</label>
          </div>
          <div class="col-9">
            <input class="form-input"
              v-model="email"
              @keyup="userUpdateUser({ name, email })"
              type="text"
              id="input-email"
              placeholder="Email" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as types from '@/store/types';

export default {
  data() {
    return {
      msg: 'Profile',
      name: '',
      email: '',
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  methods: {
    ...mapActions({
      userUpdateUser: types.USER__UPDATE_USER,
    }),
  },
  mounted() {
    this.name = this.user.name;
    this.email = this.user.email;
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
