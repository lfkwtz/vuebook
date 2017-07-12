<template>
  <div>
    <span class="header">Vuebook</span>
    <logout></logout>
  </div>
</template>

<script>
import Logout from './Logout';

export default {
  components: {
    Logout,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 2.5em;
}
</style>
