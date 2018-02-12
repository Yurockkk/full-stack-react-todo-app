$(document).ready(function(){
   ///api/todos 
   $.getJSON("/api/todos")
   .then(addTodos)
   .catch(function(err){
       console.log(err);
   });
   
   $('.list').on('click','span',function(){
        console.log("clicked");
        removeTodo($(this).parent());
    });
    
    $('#todoInput').on('keypress',function(event){
       if(event.which == 13){
        //   console.log("YOU HIT ENTER");
           createTodo();
       } 
    });
    
    $('.list').on('click','li',function(){
        console.log('li clicked');
        updateTodo($(this));
    })
});

function addTodos(todos){
    todos.forEach(todo => {
        addTodo(todo);
    })
    
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name +'<span>X</span></li>');
    newTodo.data('id',todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}



function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = "api/todos/"+clickedId;
    todo.remove();
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(message){
        console.log(message);
    })
    .catch(function(err){
        console.log(err);
    })
}

function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('api/todos',{name: usrInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function updateTodo(todo){
    var updateUrl = "api/todos/"+ todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};

    $.ajax({
       method: 'PUT',
       url: updateUrl,
       data: updateData
    })
    .then(function(updatedTodo){
        // console.log(updatedTodo);
        todo.toggleClass("done");
        todo.data('completed', isDone);
    })
    .catch(function(err){
        console.log(err);
    })
}