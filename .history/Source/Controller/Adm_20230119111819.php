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
        function strCleanner($target, $string){
            if($target == 'id'){
                $string = substr($string, 10);
                $string = substr($string, 0, -3);
                return $string;
            }

            if($target == 'name'){
                $string = substr($string, 14);
                $string = substr($string, 0, -5);
                return $string;
            }
            
            if($target == 'email'){
                $string = substr($string, 11);
                $string = substr($string, 0, -3);
                return $string;
            }
        
            if($target == 'pass'){
                $string = substr($string, 10);
                $string = substr($string, 0, -3);
                return $string;
            }
        }

        $user = new \Source\Model\User();
        $email = $_POST['email'];
        $id = $user->getData('id', 'email', $email);
        $pass = strCleanner("pass", $user->getData('pass', 'id', $id));
        $counter = false;


        if($user->getData('id', 'email', $_POST['email']) == "[]"){
            if($_POST['passc'] == $pass){
                if($_POST['email'] != NULL){
                    $user->update($id, 'email', $_POST['email']);
                    $counter = 1;
                }
                
                if($_POST['pass'] != NULL){
                    $user->update($id, 'pass', $_POST['pass']);
                    $counter = 2;
                }
                
                if($_POST['name'] != NULL){
                    $user->update($id, 'name', $_POST['name']);
                    $counter = 3;
                }

                if($counter > 0){
                    echo json_encode(true);
                    return;
                } else {
                    echo json_encode(false);
                }
            } else {
                echo json_encode("senha");
            }
        } else {
            echo json_encode("email");
        }
    }

    public function deleteUser(){
        $user = new \Source\Model\User();
        if($user->delete($_POST['email'])){
            echo json_encode
        }
    }

    public function promoveUser(){

    }
}