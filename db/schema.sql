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

CREATE TABLE contacts (
    contact_id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    position VARCHAR(50),
    organization VARCHAR(75),
    email VARCHAR(75),
    phone VARCHAR(20),
    contact_type VARCHAR(20),
    PRIMARY KEY (id)
)

CREATE TABLE transactions (
    trans_id INTEGER AUTO_INCREMENT NO NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    transaction_type VARCHAR(30),
    notes VARCHAR(100),
    PRIMARY KEY (id)
    contact_id INTEGER,
    trans_type_id INTEGER,
    foodbundle_id INTEGER,
    FOREIGN KEY (trans_type_id) REFERENCES types(type_id)
)

CREATE TABLE types (
    type_id INTEGER AUTO_INCREMENT NO NULL,
    type_name VARCHAR(20),
    related_table VARCHAR(20)
)