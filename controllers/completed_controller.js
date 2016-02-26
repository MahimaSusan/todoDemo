app.controller('completedCtrl',function($scope){
	//$scope.todos = _.filter($scope.todos, function(todo){
      //      return todo.done;
$scope.todos =[];
 $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [];
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
    	
        var i = $scope.todos.indexOf(item);
        $scope.todos.splice(i, 1);
       // localStorage.setItem('todos', JSON.stringify($scope.todos));

    };

$scope.remaining = function() {
         $scope.completedToDo = [];
        angular.forEach($scope.todos, function(todo) {
            obj = todo.completed ? todo.text : 0;
            if(obj!=0){
            $scope.completedToDo.push(obj);
            }
            console.log($scope.completedToDo);
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        });
       
    };
$scope.remaining();

 //console.log($scope.completedToDo);
     
});