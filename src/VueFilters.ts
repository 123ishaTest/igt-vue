import Vue from 'vue'

Vue.filter('numberFormat', function (value: number) {
    if (value == undefined) {
        return "";
    }
    return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.filter('dateFormat', function (date: Date) {
    if (date == undefined) {
        return "";
    }

    const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
    const month = new Intl.DateTimeFormat('en', {month: 'long'}).format(date);
    const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);



    return `${day} ${month} ${year} ${date.getHours()}:${date.getMinutes()}`;

})

Vue.filter('humanizeString', function (string: string) {
    if (string == undefined) {
        return "";
    }
    string = string.charAt(0).toUpperCase() + string.slice(1);
    string.replace("_", " ").replace("-", " ");
    return string;
})
