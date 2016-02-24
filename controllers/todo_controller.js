app.controller('todoCtrl',function($scope){
       $scope.todos =[];
        /*$scope.saved = localStorage.getItem('todos');
         $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [];
         console.log($scope.saved);*/
       $scope.addToDo = function(){
       //	$scope.todos.push({todoText: $scope.new_todo, done :false});
		//$scope.new_todo ='';
        $scope.todos.push({id:Date.now(),text:$scope.new_todo,done:false});
		$scope.new_todo ='';
		console.log($scope.todos);
     // localStorage.setItem('todos',JSON.stringify($scope.todos));

};
$scope.removeToDo = function(item){
		var i = $scope.todos.indexOf(item);
		$scope.todos.splice(i,1);
	};  


	$scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return todo.done;
        });
    };
});







