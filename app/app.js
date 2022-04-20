import Vue from 'nativescript-vue'

import App from './components/App'

import {TNSFontIcon, fonticon} from 'nativescript-fonticon'

import { CoreTypes, TouchManager } from '@nativescript/core';

TouchManager.enableGlobalTapAnimations = true;
TouchManager.animations = {
    down: {
        scale: { x: 0.75, y: 0.75 },
        duration: 200,
        curve: CoreTypes.AnimationCurve.easeInOut
    },
    up: {
        scale: { x: 1, y: 1 },
        duration: 200,
        curve: CoreTypes.AnimationCurve.easeInOut
    }  
}
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './all.min.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
Vue.config.silent = false;

new Vue({
  render: (h) => h(App),
}).$start()
