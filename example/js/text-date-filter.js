var app = angular.module('UiGridDatepicker');

app.filter('textDate', ['$filter', function ($filter) {
    return function (input, format) {
        var date = new Date(input);
        return $filter('date')(date, format);
    };
}]);