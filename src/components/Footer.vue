<template>
<div id="footer">
  <v-footer
    absolute
    padless
    color="primary"
  >
    <v-card
      flat
      tile
      class="primary text--accent text-center"
      width="100vw"
    >
      <v-card-text class="text--accent">
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
    background: #755373;
    height: 100%;
}
.v-list-item__title, .v-list-item__subtitle {
  overflow: unset !important;
  text-overflow: unset !important;
  white-space: unset !important;
}
</style>
