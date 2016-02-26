app.controller('todoCtrl', function($scope, $timeout) {
    $scope.todos = [];
    $scope.saved = localStorage.getItem('todos');
    $scope.todos = (localStorage.getItem('todos') !== "undefined") ? JSON.parse($scope.saved) : [];
    console.log($scope.saved);
    $scope.addToDo = function() {
        $scope.index = $scope.todos.length;
        $scope.todos.push({
            id: $scope.index,
            text: $scope.new_todo,
            timer: $scope.counter,
            completed: false,
            counts : $scope.count,
            completedtodo: $scope.completedToDo
        });
        $scope.new_todo = '';
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    //localStorage.clear();
    $scope.removeToDo = function(item) {
    	 $scope.completed = !$scope.completed;
        var i = $scope.todos.indexOf(item);
        $scope.todos.splice(i, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    /*$scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
            console.log(todo.done);
        });
    };*/
    var timer;
    $scope.counter = 0;
    $scope.play = function(id) {
    	$scope.played = !$scope.played;
        $scope.countId = id;
        if (timer == null) {
            updateCounter();
        }
    };
    $scope.pause = function(id) {
    	  $scope.played = !$scope.played;
        $scope.todos[id].timer = $scope.counter;
        console.log($scope.todos);
        $timeout.cancel(timer);
        timer=null;
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    var updateCounter = function() {
        $scope.counter++;
        timer = $timeout(updateCounter, 1000);
        console.log($scope.counter);
        
    };
    //updateCounter(id);
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.completed ? 0 : 1;
        });
        return count;
    };

   

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
    $scope.selectedRow = null; // initialize our variable to null
    $scope.setClickedRow = function(index) { //function that sets the value of selectedRow to current index
        $scope.selectedRow = index;
    }
    $('.list').on('click', function() {
        $(this).parent().prepend(this);
    });
    $scope.changeTodo = function() {
        this.todo.completed = !this.todo.completed;
        $scope.completed = _.where($scope.todos, {
            completed: true
        }).length;
        //console.log($scope.completed);
                localStorage.setItem('todos', JSON.stringify($scope.todos));

    };
    $scope.completed = 0;
    $scope.onCompleteTodo = function(todo) {
        console.log("onCompleteTodo -done: " + !todo.completed + " : " + todo.text);
        $scope.doneAfterClick = todo.completed;
        $scope.todoText = todo.text;
    };
    console.log("todo.completed");
    /*$scope.completed = function(){
    	 $scope.completed = !$scope.completed;
    }*/
    $scope.completedToDo = [];
    
     $scope.complete=function(todo){
         // $scope.completed = !$scope.completed;

         todo.completed = true;
         console.log($scope.todos);
         $scope.completedToDo.push(todo);
         console.log($scope.completedToDo);
         
         

        localStorage.setItem('todos', JSON.stringify($scope.todos));
       

       };



      // $scope.completedToDos =[];
// $scope.saved = localStorage.getItem('completedToDos');
   // $scope.completedToDos = (localStorage.getItem('completedToDos') !== null) ? JSON.parse($scope.saved) : [];
   // console.log($scope.saved);
   // $scope.count = $scope.completedToDos.length;
    //console.log(   $scope.count);
       //console.log($scope.completedToDo);






       
});