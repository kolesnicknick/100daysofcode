'use strict '

//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//function to load all event listeners
loadEventListeners();

    //Store task in Local storage

let storeTaskInLocalStorage = function(task){
    console.log('start');
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem('tasks')));
}

function showTaskFromLS(e, taskText){
    const li = document.createElement('li');
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskText));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"><i>';
    li.appendChild(link);
    
    //Append li to ul
    taskList.appendChild(li);
}

function removeTaskFromLS(task){
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks.length)
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks.length)
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Do you want to delete this item?')){
            e.target.parentElement.parentElement.remove();
        }
    };
    removeTaskFromLS(task);
}

function addTask(e){
    if (taskInput.value === ''){alert('Put task name to input')};

    const li = document.createElement('li');
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"><i>';
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);

    // Clear the input
    taskInput.value = '';

    e.preventDefault();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(i){
        console.log(i.textContent);
        console.log(i.firstChild.textContent === text);
        if(i.firstChild.textContent.toLowerCase().indexOf(text) === -1){
            i.style.display = "none";
        }
        else {            
            i.style.display = "block";
        };
    })
}


function loadEventListeners(){

    //polute task list with tasks
    window.addEventListener("load", function(e) {
        JSON.parse(this.localStorage.getItem('tasks')).forEach(taskItem => {
            showTaskFromLS(e, taskItem);
        })

    });

    //Add task event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear tasks
    clearBtn.addEventListener('click', function(){
        //taskList.innerHTML = '';

        //Faster

        while(taskList.firstChild){
            task = taskList.firstChild.textContent;
            taskList.removeChild(taskList.firstChild)
            console.log('CLEAR '+task);
            removeTaskFromLS(task)
        };
        
    })

    //Filter Tasks
    filter.addEventListener('keyup', filterTasks);


}