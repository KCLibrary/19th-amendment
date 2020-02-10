// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#339193', // #E53935
        secondary: '#d5654D',
        accent: '#e9dfc1', // #3F51B5
      },
    },
  },
})