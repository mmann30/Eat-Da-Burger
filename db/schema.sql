CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    date TIMESTAMP,
    PRIMARY KEY(id)
);