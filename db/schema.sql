DROP DATABASE IF EXISTS virtuous_circle_db;

CREATE DATABASE virtuous_circle_db;

USE virtuous_circle_db;

CREATE TABLE foodbundles (
    id INTEGER AUTO_INCREMENT NOT NULL,
    bundle_name VARCHAR(75),
    quantity VARCHAR(30),
    claimed BOOLEAN,
    PRIMARY KEY (id)
)

