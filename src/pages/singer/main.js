import Vue from 'vue'
import Singer from './singer'
import 'stylus/index.styl'
// add this to handle exception

const singer = new Vue(Singer)
singer.$mount()
