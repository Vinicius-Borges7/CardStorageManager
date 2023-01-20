<?php namespace Source\Controller; 

session_start();

class Api {
    public function register() {
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

    public function login() {
        $user = new \Source\Model\User();
        $id = $user->getId($_POST['email']);
        $email = $user->getEmail($id);
        $pass = $user->getPass($id);

        if(($pass == $_POST['pass']) && ($email == $_POST['email'])){
            $_SESSION['user'] = $id;
            echo json_encode(true);
            return;
        }
        echo json_encode(false);
    }

    public function logout(){
        $_SESSION['user'] = '';
        echo json_encode(true);
    }

    public function profile(){
        $user = new \Source\Model\User();
        $id = $_SESSION['user'];
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
        
    public function profileBarrier(){
        if($_SESSION['user'] == ''){
            echo json_encode(false);
        } else {
            echo json_encode(true);
        }
    }
        
        
        
    

    public function magicNew(){
        $user;

        if(isset($_POST['user'])){
            $user = $_POST['user'];
        } else {
            $user = $_SESSION['user'];
        }

        $card = new \Source\Model\Magic(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['color'],
            $_POST['category'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $user
        );
    
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function magicDel(){
        $card = new \Source\Model\Magic();

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }

    public function magicGet(){
        $card = new \Source\Model\Magic();
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        
        echo json_encode($cards);
    }






    public function pokemonNew(){
        $card = new \Source\Model\Pokemon(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['pokeType'],
            $_POST['extras'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $_SESSION['user']
        );
    
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function pokemonDel(){
        $card = new \Source\Model\Pokemon();

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }

    public function pokemonGet(){
        $card = new \Source\Model\Pokemon();
        $cards = $card->findAll($_SESSION['user']);
    
        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }

    
    
    
    public function yugiohNew(){
        $card = new \Source\Model\Yugioh(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['cardCategory'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $_SESSION['user']
        );
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function yugiohGet(){  
        $card = new \Source\Model\Yugioh();
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }
    

    public function yugiohDel(){
        $card = new \Source\Model\Yugioh();

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }




    public function bakuganGet(){  
        $card = new \Source\Model\Bakugan();
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }

    public function bakuganNew(){
        $card = new \Source\Model\Bakugan(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['pyrus'],
            $_POST['aquos'],
            $_POST['ventus'],
            $_POST['subterra'],
            $_POST['haos'],
            $_POST['darkus'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $_SESSION['user']
        );
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function bakuganDel(){
        $card = new \Source\Model\Bakugan();

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }


    public function vanguardNew(){
        $card = new \Source\Model\Vanguard(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['gauge'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $_SESSION['user']
        );
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function vanguardGet(){  
        $card = new \Source\Model\Vanguard();
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }
    

    public function vanguardDel(){
        $card = new \Source\Model\Vanguard();

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }
}