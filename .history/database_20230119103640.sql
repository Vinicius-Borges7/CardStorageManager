create database if not exists cs;
USE cs;

 users(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	pass varchar(12) not null,
	email varchar(30) not null,
	type varchar(10) not null,
	
	primary key(id)
);

 itemPokemon(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null, /* pokemon, supporter or item */
	pokeType varchar(10) not null, /* fire, water, grass, etc */
	extras varchar(30),	/* allies, fullart, etc */
	quality varchar(12) not null,
	rarity varchar(30),
	price float4 not null,
	owner int(30) not null,
	
	primary key(id)
);

 itemMagic(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null, /* monster, spell, etc*/
	color varchar(50) not null,
	category varchar(30),
	quality varchar(12) not null,
	rarity varchar(30),
	price float4 not null,
	owner int(30) not null,
	
	primary key(id)
);

 itemYgo(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null,	/* sincro, pendulum, xyz, etc */
	cardCategory varchar(30),	/* dragon, speelcaster, machine, quick spell, etc */
	quality varchar(12) not null,
	rarity varchar(30),
	price float4 not null,
	owner int(30) not null,
	
	primary key(id)
);

 itemVanguard(
	id int(15) NOT null AUTO_INCREMENT,
	name varchar(30) not null,
	cardType varchar(10) not null,
	gauge varchar(30) not null,
	quality varchar(12) not null,
	rarity varchar(30),
	price float4 not null,
	owner int(30) not null,
	
	primary key(id)
);