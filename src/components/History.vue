<template>
    <div id="history">
        <div class="history__banner"></div>
        <h1 class="display-2 text--primary font-weight-black text-center pt-6 history__heading" v-html="heading">Commemorating the Centennial</h1>
        <div class="history__content grey--text text--darken-1 text-center" v-html="body">
        </div>
        <v-row class="pa-6 history__banner">
            <v-col :md="12" class="pt-0 mt-0">
                <h2 class="text--accent text-center py-4 pt-0 mt-0 history__sub-heading">More About the 19th Amendment</h2>
            </v-col>
            <v-row class="pt-0 mt-0">
                 <v-col :md="4" :sm="12" :key="i" v-for="(item, i) in info" class="pt-0 mt-0">
                    <v-card
                    class="mx-auto d-flex pb-3 avatar"
                    max-width="344"
                    height="200"
                    light
                    hover
                    :href="item.url"
                    > 
                        <v-img class="align-end white--text" height="200" :src="item.image" gradient="to top, rgba(255,255,255,1) 15%, rgba(62,47,102,.25) 100%">
                            <v-card-text>
                                <h3 class="text--primary text-left">
                                    {{item.name}}
                                </h3>
                            </v-card-text>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
      heading: "",
      body: "",
      info: []
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
    this.info = [
        {
            name: data.title_1,
            url: data.url_1,
            image: "https://cms.kclibrary.org" + data.image_1.path
        },
        {
            name: data.title_2,
            url: data.url_2,
            image: "https://cms.kclibrary.org" + data.image_2.path
        },
        {
            name: data.title_3,
            url: data.url_3,
            image: "https://cms.kclibrary.org" + data.image_3.path
        }
    ]
  }
};
</script>

<style scoped lang="scss">
#history {
    height: 100%;
    background: white;
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.4);
}
.history {
    &__banner{
        background: #645682;
        border-bottom: double white 15px;
        border-top: double white 15px;
        padding: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
    &__heading {
        font-weight: 700 !important;
    @include respond(phone) {
        font-size: 2rem !important; 
        line-height: 1.25 !important;     
    }
    }
    &__sub-heading {
    @include respond(phone) {
        font-size: 1.25rem !important; 
        line-height: 1.25 !important;     
    }
    }
    &__content {
        margin: 1rem 2rem;
        padding: 1rem 2rem;
        font-weight: 400 !important;
        @include respond(phone) {
            font-size: .75rem !important;     
            margin: 1rem 1rem;
            padding: 0 1rem;
        }
    }
}
</style>
