DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;

CREATE TABLE movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE box_office (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Stanton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
         
Use pixar;

INSERT INTO movies(title, director, year, length_minutes)
	VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
		   ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
		   ('Os Incríveis', 'Brad Bird', 2004, 116),
		   ('WALL-E', 'Pete Docter', 2008, 104);
           
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
	VALUES (9, 6.8, 450000000, 370000000);
    
SET SQL_SAFE_UPDATES = 0;

UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

UPDATE movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
	VALUES(8, 8.5, 300000000, 250000000),
	      (10, 7.4, 460000000, 510000000),
          (11, 9.9, 290000000, 280000000);
          
DELETE FROM box_office
WHERE movie_id = 11;

DELETE FROM movies
WHERE title = 'WALL-E';

SELECT id FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN (2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';

SELECT * FROM movies;