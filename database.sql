CREATE DATABASE IF NOT EXISTS cs;
USE cs;

CREATE TABLE IF NOT EXISTS users(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	pass varchar(12) not null,
	email varchar(30) not null,
	
	primary key(id)
);

create table if not exists itemPokemon(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null, /* pokemon, supporter or item */
	pokeType varchar(10) not null, /* fire, water, grass, etc */
	extras varchar(30),	/* allies, fullart, etc */
	quality varchar(12) not null,
	rarity varchar(30),
	price int(20),
	owner int(30) not null,
	
	primary key(id),
	foreign key(owner) references users(id)
);

create table if not exists itemMagic(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null, /* monster, spell, etc*/
	color varchar(50) not null,
	category varchar(30),
	quality varchar(12) not null,
	rarity varchar(30),
	price int(20),
	owner int(30) not null,
	
	primary key(id),
	foreign key(owner) references users(id)
);

create table if not exists itemYgo(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null,	/* sincro, pendulum, xyz, spell, trap, etc */
	cardCategory varchar(30),	/* dragon, spellcaster, machine, quick spell, etc */
	quality varchar(12) not null,
	rarity varchar(30),
	price int(20),
	owner int(30) not null,
	
	primary key(id),
	foreign key(owner) references users(id)
);