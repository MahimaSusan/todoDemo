app.controller('completedCtrl',function($scope){
	//$scope.todos = _.filter($scope.todos, function(todo){
      //      return todo.done;
$scope.completedToDos =[];
 $scope.saved = localStorage.getItem('completedToDos');
    $scope.completedToDos = (localStorage.getItem('completedToDos') !== null) ? JSON.parse($scope.saved) : [];
    console.log($scope.saved);

 /*$scope.completed = function() {
        var oldTodos = $scope.completedToDos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(completedToDos) {
            if (!todo.done) $scope.completedToDos.push(completedToDos);
        });
        localStorage.setItem('todos', JSON.stringify($scope.completedToDos));
    };*/


$scope.removeCompleted = function(item) {
    	
        var i = $scope.completedToDos.indexOf(item);
        $scope.completedToDos.splice(i, 1);
        localStorage.setItem('completedToDos', JSON.stringify($scope.completedToDos));
    };




     
});