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

       function getData($target, $selector, $value){ 
            $query = "SELECT $target FROM users WHERE $selector = '$value'";
            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->execute();

            $data = json_encode($stmt->fetchAll());
            return $data;

            // var_dump($data);
            // return;
            /*
                returns a object

                target => what you want to pick
                selector => what you wll use to filter it(id or email)
                value => the value of selector, like sampleEmail@email.com
            */
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
                //throw $th;
            }
        }

        function delete($email){
            try {
                $id = \models\user\User::getData('id', 'email', $email);
                $query = "DELETE FROM users WHERE id = $id";
                $stmt = \Source\Core\Database::getinstance()->prepare($query);
                $stmt->execute();
                return true;
            } catch (\Throwable $th) {
                return false;
            }
        }
    }