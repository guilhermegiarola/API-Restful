'use strict';

module.exports = function(app){
    var library = require('../Controller/appController.js')

    app.route('/books')
        .get(library.listAllBooks)
        .post(library.createBook);
    app.route('/books/:bookId')
        .get(library.getBook)
        .put(library.changeBook)
        .delete(library.deleteBook);
};