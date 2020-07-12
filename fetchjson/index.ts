import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url)
    .then(res => {
        const todo: ITodo = res.data;
        logTodo(todo);
    });


const logTodo = ({ id, title, completed }: ITodo): void  => {
    console.log(`
            Todo id is: ${id}
            What should you do? - ${title}
            Is it completed? - ${completed ? 'Yes' : 'No'}
        `);
}


