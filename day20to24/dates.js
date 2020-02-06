'use strict'

let date = new Date();
let bday = new Date('06-15-1992 11:22:00');

bday = new Date('june/15/1992 12:00')

bday = date.getHours()
console.log(date);
console.log(typeof date)

console.log(bday);

(function(name = 'Niko'){
    console.log(`Hello ${name}`)
})();


const todo = {
    add: function(){
        console.log('Add todo ...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

 todo.delete = function(id){
    console.log(`Delete todo ${id}`)
 }

 todo.add()
 todo.delete(33)
 todo.edit(12)