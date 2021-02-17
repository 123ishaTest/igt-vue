import Vue from 'vue'

Vue.filter('numberFormat', function (value: number) {
    if (value == undefined) {
        return "";
    }
    return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.filter('humanizeString', function (string: string) {
    if (string == undefined) {
        return "";
    }
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string.replace("_", " ").replace("-", " ");
    return string;
})
