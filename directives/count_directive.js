app.directive('myDirective', function() {
  return {
    template: '<span ng-model ="count">{{todo.timer}}</span>'
  };
});