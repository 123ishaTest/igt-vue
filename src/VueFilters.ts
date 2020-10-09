import Vue from 'vue'

Vue.filter('twoDigits', function (value: number) {
    return value.toFixed(2)
})
