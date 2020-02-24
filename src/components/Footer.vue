<template>
<div id="footer">
  <v-footer
    absolute
    padless
    color="secondary"
  >
    <v-card
      flat
      tile
      class="secondary text--accent text-center"
      width="100vw"
    >
      <v-card-text class="text--accent cursive-font display-1 pt-12">
        <a href="https://kclibrary.org" style="text-decoration: none;" class="text--accent">&copy;{{ new Date().getFullYear() }} — <strong>Kansas City Public Library</strong></a>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
#footer {
    background: #d5654D;
    height: 100%;
}
.v-footer {
    height: 20vh !important;
}
</style>
