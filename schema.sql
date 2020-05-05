create database rex_component;

use rex_component;

create table reviews
(
  id int,
  title varchar(150),
  user varchar(150),
  stars int,
  reviewText varchar(350)
);

insert into reviews (id, title, user, stars, reviewText) values
  (1, 'this is the best!', 'Karen', 5, "wow I never thought that a pointy helmet would be as useful as it is!");