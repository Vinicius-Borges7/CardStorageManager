<?php namespace Source\Model;
    class User{
        private $id;
        private $name;
        private $pass;
        public $email;
        private $type;

        public function __construct(
            ?int $id = NULL,
            ?string $name = NULL,
            ?string $pass = NULL,
            ?string $email = NULL,
            ?string $type = NULL
        )
        {
            $this->id = NULL;
            $this->name = $name;
            $this->pass = $pass;
            $this->email = $email;
            $this->type = $type;
        }

        function getId($value){ 
            $query = "SELECT id FROM users WHERE email = :value";
            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->bindParam(":value", $value);
            $stmt->execute();

            $data = $stmt->fetchAll();
            if($data){
                return $data[0]->id;
            } else {
                return false;
            }
        }

        function getEmail($value){ 
            $query = "SELECT email FROM users WHERE id = :value";
            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->bindParam(":value", $value);
            $stmt->execute();

            $data = $stmt->fetchAll();
            if($data){
                return $data[0]->email;
            } else {
                return false;
            }
        }

        function getName($value){ 
            $query = "SELECT name FROM users WHERE id = :value";
            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->bindParam(":value", $value);
            $stmt->execute();

            if($data){
                return $data[0]->name;
            } else {
                return false;
            }
        }

        function getPass($value){ 
            $query = "SELECT pass FROM users WHERE id = :value";
            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->bindParam(":value", $value);
            $stmt->execute();

            $data = $stmt->fetchAll();
            if($data){
                return $data[0]->pass;
            } else {
                return false;
            }
        }

        function insert(){
            $query = 'INSERT INTO users VALUES (NULL,:name,:pass,:email,:type)';
            $stmt = \Source\Core\Database::getinstance()->prepare($query);

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":pass", $this->pass);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":type", $this->type);

            $stmt->execute();
        }

        function update($id, $column, $newValue){
            try {
                $query = "UPDATE users SET $column = :newValue WHERE id = :id";
                $stmt = \Source\Core\Database::getinstance()->prepare($query);
                $stmt->bindParam(":id", $id);
                $stmt->bindParam(":newValue", $newValue);
                $stmt->execute();
                return true;

            } catch (\Throwable $th) {
                return false;
            }
        }

        function delete($email){
            $id = \Source\Model\User::getId($email);

            if(!$id == []){
                $query = "DELETE FROM users WHERE id = $id";
                $stmt = \Source\Core\Database::getinstance()->prepare($query);
                $stmt->execute();
                return true;
            } else {
                return false;
            }
        }
    }