create database library;

use library;

CREATE TABLE books (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    description text,
    price int,
    created_at date,
    updated_at date,
    PRIMARY KEY (id)
);

CREATE TABLE authors (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    biography text,
    PRIMARY KEY (id)
);

CREATE TABLE book_author (
    id int NOT NULL AUTO_INCREMENT,
    book_id int,
    author_id int,
    PRIMARY KEY (id)
);