import Vue from 'vue'

export const prototype:obj = {

}

Object.keys(prototype).map(key => {
    Vue.prototype[key] = prototype[key]
})