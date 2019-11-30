'user strict';

var sql = require('./db.js');

var Book = function(book){
    this.id = book.id;
    this.book = book.nameBook;
    this.author = book.author;
};

Book.createBook = function(newBook, result){
    sql.query("INSERT INTO books set ?", newBook, function(err, res){
        if(err){
            console.log("error" + err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Book.getBookById = function(bookId, result){
    sql.query("SELECT * from books WHERE id = $", bookId, function(err, res){
        if(err){
            console.log("error" + err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Book.getAllBooks = function(result){
    sql.query("Select * from books", function (err, res){
        if (err) {
            console.log("error" + err);
            result(err, null);
        } else {
            console.log("Books: ", res);
            result(null, res);
        }
    });
};

Book.updateById = function(id, name, result){
    sql.query("Update books set bookName = ? where id = ?", [book.name, id], function (err,res){
    if(err){
        console.log("error:", err);
        result(null, err);
        } else {
        result(null, res);
        }
    });
};

Book.remove = function(id, result){
    sql.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};

module.exports = Book;