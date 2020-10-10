import Vue from 'vue'

Vue.filter('numberFormat', function (value: number) {
    return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})
