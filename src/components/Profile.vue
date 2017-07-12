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
            <input class="form-input" type="text" id="input-name" placeholder="Name" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="input-email">Email</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="text" id="input-email" placeholder="Name" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Profile',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
