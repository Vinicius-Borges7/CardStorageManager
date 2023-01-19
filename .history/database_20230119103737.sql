create database if not exists cs;
USE cs;

CREATE TABLE IF NOT EXISTS users(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	pass VARCHAR(12) NOT NULL,
	email VARCHAR(30) NOT NULL,
	type VARCHAR(10) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemPokemon(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	cardType VARCHAR(10) NOT NULL, /* pokemon, supporter or item */
	pokeType VARCHAR(10) NOT NULL, /* fire, water, grass, etc */
	extras VARCHAR(30),	/* allies, fullart, etc */
	quality VARCHAR(12) NOT NULL,
	rarity VARCHAR(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemMagic(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	cardType VARCHAR(10) NOT NULL, /* monster, spell, etc*/
	color VARCHAR(50) NOT NULL,
	category VARCHAR(30),
	quality VARCHAR(12) NOT NULL,
	rarity VARCHAR(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemYugo(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	cardType VARCHAR(10) NOT NULL,	/* sincro, pendulum, xyz, etc */
	cardCategory VARCHAR(30),	/* dragon, speelcaster, machine, quick spell, etc */
	quality VARCHAR(12) NOT NULL,
	rarity VARCHAR(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);

CREATE TABLE IF NOT EXISTS itemVanguard(
	id INT(15) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	cardType VARCHAR(10) NOT NULL,
	gauge VARCHAR(30) NOT NULL,
	quality VARCHAR(12) NOT NULL,
	rarity VARCHAR(30),
	price float4 NOT NULL,
	owner INT(30) NOT NULL,
	
	primary key(id)
);