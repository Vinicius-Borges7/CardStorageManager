<?php

// show php errors
ini_set("display_errors",1);
ini_set("display_startup_errors",1);
error_reporting(E_ALL);

// composer autoload
require __DIR__ . "/vendor/autoload.php";
// autoload from project
require __DIR__ . "/Source/autoload.php";

use CoffeeCode\Router\Router;
$router = new Router("");

// controller routes
$router->namespace("Source\Controller");

// web routes
$router->get("/", "Web:home");
$router->get("/cadastro", "Web:register");
$router->get("/entrar", "Web:login");
$router->get("/nova_carta", "Web:newCard");
$router->get("/perfil", "Web:profile");
//a

// api routes
$router->post("/login", "Api:login");
$router->post("/register", "Api:register");
$router->post("/profile", "Api:profile");
$router->post("/logout", "Api:logout");
$router->post("/profileBarrier", "Api:profileBarrier");

$router->post("/magic", "Api:magicNew");
$router->post("/magicDel", "Api:magicDel");
$router->post("/magicGet", "Api:magicGet");

$router->post("/pokemon", "Api:pokemonNew");
$router->post("/pokemonDel", "Api:pokemonDel");
$router->post("/pokemonGet", "Api:pokemonGet");

$router->post("/yugioh", "Api:yugiohNew");
$router->post("/yugiohDel", "Api:yugiohDel");
$router->post("/yugiohGet", "Api:yugiohGet");

$router->post("/bakugan", "Api:bakuganNew");
$router->post("/bakuganDel", "Api:bakuganDel");
$router->post("/bakuganGet", "Api:bakuganGet");

$router->post("/vanguard",    "Api:vanNew");
$router->post("/vanguardDel", "Api:vanDel");
$router->post("/vanguardGet", "Api:vanGet");

$router->dispatch();