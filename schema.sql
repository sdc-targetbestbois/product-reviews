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
  (1, 'this is the best!', 'Karen', 5, "wow I never thought that a pointy helmet would be as useful as it is!"),
  (1, 'pretty dope', 'Steve Jobs', 4, "Not as good as an apple computer though."),
  (1, 'ehhhh OK', 'Your Mom', 3, "I'd enjoy it more if Josh got his HW done, but now he just stares at his armour all the time.")