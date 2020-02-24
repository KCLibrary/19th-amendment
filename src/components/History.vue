<template>
    <div id="history">
        <div class="history__banner"></div>
        <h1 class="display-2 text--primary font-weight-black text-center pa-6" v-html="heading">Commemorating the Centennial</h1>
        <div class="history__content grey--text text--darken-2" v-html="body">
         </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
      heading: "",
      body: ""
  }),
  async created() {
    const { data } = await axios.post(
      process.env.VUE_APP_HISTORY_SECTION,
      JSON.stringify({}),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    this.heading = data.heading;
    this.body = data.body;
  }
};
</script>

<style scoped lang="scss">
#history {
    height: 100%;
    background: #E9DEC1;
}
.history {
    &__banner{
        background: #339193;
        border-bottom: double #E9DEC1 15px;
        border-top: double #E9DEC1 15px;
        padding: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
    &__content {
        margin: 1rem 2rem;
        padding: 1rem 2rem;
    }
}
</style>
