// Book constructor
function Book(title, author, isbn) {
    this.author =  author;
    this.title = title;
    this.isbn = isbn;
}

//  UI-constructor
function UI() {
}
UI.prototype.addBookToList = function(book){
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

UI.prototype.clearFields = function(){
    document.getElementById("title").value = "",
    document.getElementById("author").value = "",
    document.getElementById("isbn").value = ""
}

//EventListeners
document.getElementById("book-form").addEventListener("submit", function (e) {

    const book = new Book(
            document.getElementById("title").value,
            document.getElementById("author").value,
            document.getElementById("isbn").value
            );

    const ui = new UI();
    ui.addBookToList(book);

    ui.clearFields();
    //Preventing default behavior
    e.preventDefault();
});