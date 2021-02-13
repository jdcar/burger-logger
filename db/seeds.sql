INSERT INTO burgers (burger_name, devoured) VALUES ("Swiss", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheddar", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("American", true);

UPDATE burgers SET devoured= false WHERE burger_name = "Cheddar";
