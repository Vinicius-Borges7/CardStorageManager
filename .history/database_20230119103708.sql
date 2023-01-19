create database if not exists cs;
USE cs;

CREATE TABLE IF NOT EXISTS users(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	pass varchar(12) NOT NULL,
	email varchar(30) NOT NULL,
	type varchar(10) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemPokemon(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	cardType varchar(10) NOT NULL, /* pokemon, supporter or item */
	pokeType varchar(10) NOT NULL, /* fire, water, grass, etc */
	extras varchar(30),	/* allies, fullart, etc */
	quality varchar(12) NOT NULL,
	rarity varchar(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemMagic(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	cardType varchar(10) NOT NULL, /* monster, spell, etc*/
	color varchar(50) NOT NULL,
	category varchar(30),
	quality varchar(12) NOT NULL,
	rarity varchar(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemYgo(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name (30) NOT NULL,
	cardType varchar(10) NOT NULL,	/* sincro, pendulum, xyz, etc */
	cardCategory varchar(30),	/* dragon, speelcaster, machine, quick spell, etc */
	quality varchar(12) NOT NULL,
	rarity varchar(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemVanguard(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	cardType varchar(10) NOT NULL,
	gauge varchar(30) NOT NULL,
	quality varchar(12) NOT NULL,
	rarity varchar(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);