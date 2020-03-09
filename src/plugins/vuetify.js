// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#645682', // #E53935
        secondary: '#E2C740',
        accent: '#e9dfc1', // #3F51B5
      },
    },
  },
})