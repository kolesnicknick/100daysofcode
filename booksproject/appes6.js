class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = ""
    };

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    };

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    };

    addBookToList(book) {
        console.log(book);

        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href=# class='delete'>Del</a></td>
    `;

        list.appendChild(row);
    };

}

class Store{
    static displayBooks(){
        let books = Store.getBooks();
        let ui = new UI();
        books.forEach(i => ui.addBookToList(i));
    }

    static getBooks(){
        let books = localStorage.getItem('books');
        return books === null ? [] : JSON.parse(books);
    }

    static addBook(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        console.log(isbn);
        let books = Store.getBooks();
        books.forEach(function (book, i) {
            if(book.isbn === isbn){
                books.splice(i, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//EventListeners

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.getElementById("book-form").addEventListener("submit", function (e) {

    const book = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("isbn").value
    );

    const ui = new UI();

    //Validation of fields
    if(book.title === '' || book.isbn === '' || book.author === ''){
        ui.showAlert('Please fill in all fields', 'error');
    }
    else {
        ui.addBookToList(book);

        Store.addBook(book);

        ui.clearFields();

        ui.showAlert('Book added!', 'success')
    }
    //Preventing default behavior
    e.preventDefault();
});

// Event listener for DELETE
document.getElementById('book-list').addEventListener("click", function (e) {
    console.log('123');
    const ui = new UI();
    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('book removed', 'success');


    e.preventDefault();
});
