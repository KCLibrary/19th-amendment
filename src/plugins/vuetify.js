// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#755373', // #E53935
        secondary: '#dea62c',
        accent: '#e9dfc1', // #3F51B5
      },
    },
  },
})