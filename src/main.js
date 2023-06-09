import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss';

// Bootstrap
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faSolidStar, faStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
