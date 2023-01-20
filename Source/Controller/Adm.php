<?php namespace Source\Controller;

session_start();

class Adm{
    public function newUser(){
        $user = new \Source\Model\User(
            NULL,
            $_POST['name'],
            $_POST['pass'],
            $_POST['email'],
            "client"
        );

        if(!$user->getId($_POST['email'])){
            $user->insert();
            echo json_encode(true);
            return;
        }

        if($user->getId($_POST['email'])){
            echo json_encode(false);
            return;
        }
    }

    public function updateUser(){
        $user = new \Source\Model\User();
        $id = $_POST['id'];
        $email = $user->getEmail($id);
        $pass = $user->getPass($id);
        $counter = false;

        if($_POST['passc'] == $pass){
            if($_POST['email']){
                if($user->getId($_POST['email']) == []){
                    $user->update($id, 'email', $_POST['email']);
                    $counter = 1;
                } else {
                    echo json_encode("email");
                    return;
                }
            }
            
            if($_POST['pass']){
                $user->update($id, 'pass', $_POST['pass']);
                $counter = 2;
            }
            
            if($_POST['name']){
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
    }

    public function deleteUser(){
        $user = new \Source\Model\User();
        if($user->delete($_POST['email'])){
            echo json_encode(true);
        } else {
            echo json_encode(false);            
        }
    }

    public function promoveUser(){
        $user = new \Source\Model\User();
        $id = $user->getId($_POST['email']);

        if($id == []){
            echo json_encode(false);            
            return;
        }

        if($user->update($id, "type", "adm")){
            echo json_encode(true);
        } else {
            echo json_encode(false);            
        }
    }

    public function downmoveUser(){
        $user = new \Source\Model\User();
        $id = $user->getId($_POST['email']);

        if($id == []){
            echo json_encode(false);            
            return;
        }

        if($user->update($id, "type", "client")){
            echo json_encode(true);
        } else {
            echo json_encode(false);            
        }
    }
}