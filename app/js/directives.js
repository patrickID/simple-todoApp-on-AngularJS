angular.module( 'todoDirectives', [] )

.directive('inline', ['$http', function ($http) {
  return {
    template: '<span ng-switch on="edit" >' +
              '<span ng-switch-default>{{value}}  <small><span class="glyphicon glyphicon-pencil"></span></small></span>' +
              '<input ng-switch-when="true" type="text" ng-model="$parent.value"/>' +
              '</span>',
    restrict: 'A',
    scope: {
      inline: '='
    },
    link: function (scope, element, attribs) {
      scope.value = scope.inline;

      /* watch for changes from the controller */
      scope.$watch('inline', function (val) {
        scope.value = val;
      });

    /* enable inline editing functionality */
      var enablingEditing = function () {
        scope.edit = true;
        scope.original = scope.value;
        setTimeout(function () {
          element.children().children('input')[0].focus();
          element.children().children('input').bind('blur', function (e) {
            scope.$apply(function () {
              disablingEditing();
            });
          });
        }, 100);
      };


      /* disable inline editing functionality */
      var disablingEditing = function () {
        scope.edit = false;
        scope.inline = scope.value;

        if (scope.inline && scope.inline != scope.original){
            $http.put("todoApp.php", scope.inline).success(function (data, status, headers, config) {  })
        }
      };


      /* set up the default */
      disablingEditing();


      /* when the element with the inline attribute is clicked, enable editing */
      element.bind('click', function (e) {
        if ((e.target.nodeName.toLowerCase() === 'span') || (e.target.nodeName.toLowerCase() === 'img')) {
          scope.$apply(function () { // bind to scope
            enablingEditing();
          });
        }
      });

      /* allow editing to be disabled by pressing the enter key */
      element.bind('keypress', function (e) {

        if (e.target.nodeName.toLowerCase() != 'input') return;

        var keyCode = (window.event) ? e.keyCode : e.which;

        if (keyCode === 13) {
          scope.$apply(function () { 
            disablingEditing();
          });
        }
      });
    }
  }
}]);