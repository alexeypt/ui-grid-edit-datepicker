var app = angular.module('UiGridDatepicker', [
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.cellNav',
    'ui.grid.moveColumns'
]);

app.controller('GridController', ['$scope', function ($scope) {

    $scope.data = [];

    $scope.datepickerOptions = {
        maxDate: new Date(2020, 1, 1),
        minDate: new Date(2010, 1, 1)
    };

    var generateData = function() {
      for (var i = 0, i_length = 30; i < i_length; i++)   {
          $scope.data.push({
              "firstName": "Cox",
              "lastName": "Carney",
              "company": "Enormo",
              "date": '10/14/2015 02:45:33 AM'
          });
          $scope.data.push({
              "firstName": "Lorraine",
              "lastName": "Wise",
              "company": "Comveyer",
              "date": '10/15/2015 10:52:54 AM'
          });
          $scope.data.push({
              "firstName": "Nancy",
              "lastName": "Waters",
              "company": "Fuelton",
              "date": '09/09/2014 07:32:11 AM'
          });
      }
    }();

    $scope.gridOptions = {
        enableGridMenu: true,
        data: 'data',
        columnDefs: [
            { name: 'First Name', field: 'firstName' },
            { name: 'Last Name', field: 'lastName'},
            { name: 'Company', field: 'company' },
            { name: 'Date',
                field: 'date',
                cellFilter: 'textDate:"M/d/yyyy"',
                editableCellTemplate: '<div><form name="inputForm"><div ui-grid-edit-datepicker datepicker-options="datepickerOptions" ng-class="\'colt\' + col.uid"></div></form></div>'
            }
        ],
        enableCellEditOnFocus: true
    };
}]);