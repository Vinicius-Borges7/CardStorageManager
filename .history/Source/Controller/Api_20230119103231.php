<?php namespace Source\Controller; 

session_start();

class Api {
    public function a(){
        echo "a";
    }

    public function register() {
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

    public function login() {
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
        
        $user = new \Source\Model\User(NULL, NULL, NULL, NULL);
        $id = strCleanner("id", json_encode($user->getData('id', 'email', $_POST['email'])));
        $email = strCleanner("email", $user->getData('email', 'id', $id));
        $pass = strCleanner("pass", $user->getData('pass', 'id', $id));

        if(($pass == $_POST['pass']) && ($email == $_POST['email'])){

            $_SESSION['user'] = (int)strCleanner("id", json_encode(($user->getData('id', 'email', $email))));
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
        $id = $_SESSION['user'];
        // $id = 10;
        $email = strCleanner("email", $user->getData('email', 'id', $id));
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
        
    public function profileBarrier(){
        if($_SESSION['user'] == ''){
            echo json_encode(false);
        } else {
            echo json_encode(true);
        }
    }
        
        
        
    

    public function magicNew(){
        $card = new \Source\Model\Mgc(
            NULL,
            $_POST['name'],
            $_POST['cardType'],
            $_POST['color'],
            $_POST['category'],
            $_POST['quality'],
            $_POST['rarity'],
            $_POST['price'],
            $_SESSION['user']
        );
    
        $card->insert();
        echo json_encode($_POST['name'] . " created sucessfuly");
    }

    public function mDel(){
        $card = new \Source\Model\Mgc(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }

    public function mGet(){
        $card = new \Source\Model\Mgc(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        
        echo json_encode($cards);
    }






    public function pkmNew(){
        $card = new \Source\Model\Pkm(
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

    public function pkmDel(){
        $card = new \Source\Model\Pkm(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

        if($card->findCard($_POST['id']) == false){
            echo json_encode(false);
        } else {
            $card->delete($_POST['id']);
            echo json_encode(true);
        }
    }

    public function pkmGet(){
        $card = new \Source\Model\Pkm(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
        $cards = $card->findAll($_SESSION['user']);
    
        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }





    public function ygoGet(){  
        $card = new \Source\Model\Ygo(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
        $cards = $card->findAll($_SESSION['user']);

        if($cards == []){
            echo json_encode(false);
            return;
        }
        echo json_encode($cards);
    }
    
    public function ygoNew(){
        $card = new \Source\Model\Ygo(
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

    public function ygoDel(){
        $card = new \Source\Model\Ygo(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

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

}