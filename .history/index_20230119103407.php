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

$router->post("/mgc", "Api:magicgcNew");
$router->post("/mgcDel", "Api:mgcDel");
$router->post("/mgcGet", "Api:mgcGet");

$router->post("/pkm", "Api:pkmNew");
$router->post("/pkmDel", "Api:pkmDel");
$router->post("/pkmGet", "Api:pkmGet");

$router->post("/ygo", "Api:ygoNew");
$router->post("/ygoDel", "Api:ygoDel");
$router->post("/ygoGet", "Api:ygoGet");

$router->post("/bakugan", "Api:bakuganNew");
$router->post("/bakuganDel", "Api:bakuganDel");
$router->post("/bakuganGet", "Api:bakuganGet");

$router->dispatch();