USE bookstore;

DROP TABLE IF EXISTS books;
CREATE TABLE books(
  id              int NOT NULL IDENTITY(1, 1),
  title           varchar(255) NOT NULL,
  author          varchar(255) NOT NULL,
  price           decimal(10,2) NOT NULL,

  PRIMARY KEY(id)
);