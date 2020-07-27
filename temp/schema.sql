DROP DATABASE IF EXISTS h8w4d5i3f861xtjp;

CREATE DATABASE h8w4d5i3f861xtjp;

USE h8w4d5i3f861xtjp;

CREATE TABLE foodbundles (
    id INTEGER AUTO_INCREMENT NOT NULL,
    bundle_name VARCHAR(75),
    quantity VARCHAR(30),
    claimed BOOLEAN,
    PRIMARY KEY (id)
)
