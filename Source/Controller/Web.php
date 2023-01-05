<?php

namespace Source\Controller;

class Web {
    public function __construct($path) {
        $this->view = new \Source\Core\View('/Source/View/Html/');
    }

    public function home() {
        $this->view->render('index', []);
    }

    public function login() {
        $this->view->render('login', []);
    }

    public function register() {
        $this->view->render('register', []);
    }

    public function newCard() {
        $this->view->render('newCard', []);
    }

    public function profile() {
        $this->view->render('user', []);
    }
}