-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

use burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY(id)
);
