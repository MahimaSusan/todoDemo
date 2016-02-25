app.controller('completedCtrl',function($scope){
	//$scope.todos = _.filter($scope.todos, function(todo){
      //      return todo.done;
$scope.todos =[];
 $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [];
    console.log($scope.saved);

 $scope.completed = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };







     
});