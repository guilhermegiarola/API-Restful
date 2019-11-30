var Book = require('../Model/appModel.js');

exports.listAllBooks = function(req, res) {
  Book.getAllBooks(function(err, book) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', book);
    res.send(book);
  });
};



exports.createBook = function(req, res) {
  var newBook = new Book(req.body);

  //handles null error 
   if(!newBook.nameBook || !newBook.author){

            res.status(400).send({ error:true, message: 'Please provide name/author' });

        }
else{
  
  Book.createBook(newBook, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.getBook = function(req, res) {
  Book.getBookById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.changeBook = function(req, res) {
  Book.updateById(req.params.id, new Book(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.deleteBook = function(req, res) {


  Book.remove( req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};