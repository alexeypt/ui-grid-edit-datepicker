# ui-grid-edit-datepicker

This directive provides ability to use [Bootstrap datepicker](https://angular-ui.github.io/bootstrap/#/datepicker) for editing dates in [UI Grid](http://ui-grid.info/)


### Dependencies:

  - Angular
  - Angular UI
  - Angular UI Grid
  - jQuery (jQuery is used only for setting correct position of datepicker inside the grid) **Note!** From Angular UI Grid 1.2 jQuery is completely unnecessary because *popup-placement* attribute has been added to Angular UI Datepicker. Plunker link: http://plnkr.co/edit/KHGb6BU0KAHEVfPlxnzU

### How to use it

  Simply set the following **editableCellTemplate** for date fields in columnDefs:

  ```
  {
    name: 'Date',
    field: 'date',
    cellFilter: 'date:"M/d/yyyy"',
    editableCellTemplate: '<div><form name="inputForm"><div ui-grid-edit-datepicker ng-class="\'colt\' + col.uid"></div></form></div>'
  }
  ```

  If you'd like to specify additional settings for [Bootstrap Datepicker](https://angular-ui.github.io/bootstrap/#/datepicker), you should declare object with settings in Grid scope and pass object's name in **datepicker-options** attribute like in the following example (it works only from Angular UI Grid 1.2 ):

  ```
    $scope.datepickerOptions = {
        maxDate: new Date(2020, 1, 1),
        minDate: new Date(2010, 1, 1)
    };

    ...

    $scope.gridOptions = {
        columnDefs: [
            ...
            { name: 'Date',
                field: 'date',
                cellFilter: 'textDate:"M/d/yyyy"',
                editableCellTemplate: '<div><form name="inputForm"><div ui-grid-edit-datepicker datepicker-options="datepickerOptions" ng-class="\'colt\' + col.uid"></div></form></div>'
            }
        ],
        enableCellEditOnFocus: true
    };
  ```
Full Plunker example: http://plnkr.co/edit/lMrVPfLuHfSgWmtlxG9G

**Note!** If you don't use jQuery, you should comment calling the `setCorrectPosition()` in directive. In this case datepicker will be placed in grid according to the standard behavior.

Plunker example: ~~http://plnkr.co/edit/4mNr86cN6wFOLYQ02QND~~ http://plnkr.co/edit/K64eD0COYBvwwZIq57wZ