DROP Database Library;
CREATE Database Library;

USE Library;

CREATE TABLE books (
  id int(11) NOT NULL,
  bookName varchar(200) NOT NULL,
  author varchar(200) NOT NULL
);

ALTER TABLE books ADD PRIMARY KEY (id);
ALTER TABLE books MODIFY id int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO books (id, bookName, author) VALUES
(1, 'O Nome do Vento','Patrick Rothfuss'),
(2, 'O Temor do Sábio','Patrick Rothfuss'),
(3, 'A Batalha do Apocalipse','Eduardo Spohr');

SELECT * from books WHERE id = 3;
