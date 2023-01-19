<?php namespace Source\Controller;

session_start();

class Adm{
    public function newUser(){
        function strCleanner($string){
            $string = substr($string, 7);
            $string = substr($string, 0, -2);
            return $string;
        }

        $user = new \Source\Model\User(NULL, $_POST['name'], $_POST['pass'], $_POST['email'], "client");

        if($user->getData('id', 'email', $_POST['email']) === "[]"){
            $user->insert();
            echo json_encode(true);
            return;
        }

        if($user->getData('id', 'email', $_POST['email']) !== "[]"){
            echo json_encode(false);
            return;
        }
    }

    public function updateUser(){

    }

    public function deleteUser(){

    }

    public function promoveUser(){

    }
}