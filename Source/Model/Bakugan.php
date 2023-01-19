<?php namespace Source\Model;
    class Bakugan{
        private $id;
        private $name;
        private $cardType;
        private $pyrus;
        private $aquos;
        private $ventus;
        private $subterra;
        private $haos;
        private $darkus;
        private $quality;
        private $rarity;
        private $price;
        private $owner;

        public function __construct(
            ?int $id = NULL,
            ?string $name = NULL,
            ?string $cardType = NULL,
            ?int $pyrus = NULL,
            ?int $aquos = NULL,
            ?int $ventus = NULL,
            ?int $subterra = NULL,
            ?int $haos = NULL,
            ?int $darkus = NULL,
            ?string $quality = NULL,
            ?string $rarity = NULL,
            ?int $price = NULL,
            ?string $owner = NULL
        )
        {
            $this->id = NULL;
            $this->name = $name;
            $this->cardType = $cardType;
            $this->pyrus = $pyrus;
            $this->aquos = $aquos;
            $this->ventus = $ventus;
            $this->subterra = $subterra;
            $this->haos = $haos;
            $this->darkus = $darkus;
            $this->quality = $quality;
            $this->rarity = $rarity;
            $this->price = $price;
            $this->owner = $owner;
        }

        function findCard($id){
            $query = "SELECT * FROM itemBakugan WHERE id = $id;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetch();
        }

        
        function findAll($owner){
            $query = "SELECT * FROM itemBakugan WHERE owner = $owner;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        function insert(){
            $query = 'INSERT INTO itemBakugan VALUES (NULL,:name,:cardType,:pyrus,:aquos,:ventus,:subterra,:haos,:darkus,:quality,:rarity,:price,:owner)';
            $stmt = \Source\Core\Database::getinstance()->prepare($query);

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":cardType", $this->cardType);
            $stmt->bindParam(":pyrus", $this->pyrus);
            $stmt->bindParam(":aquos", $this->aquos);
            $stmt->bindParam(":ventus", $this->ventus);
            $stmt->bindParam(":subterra", $this->subterra);
            $stmt->bindParam(":haos", $this->haos);
            $stmt->bindParam(":darkus", $this->darkus);
            $stmt->bindParam(":quality", $this->quality);
            $stmt->bindParam(":rarity", $this->rarity);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":owner", $this->owner);
            $stmt->execute();
        }

        function update($id, $column, $newValue){
            $query = "UPDATE itemBakugan SET $column = :newValue WHERE id = :id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":newValue", $newValue);
            $stmt->execute();
        }

        function delete($id){
            $query = "DELETE FROM itemBakugan WHERE id = $id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();

        }
    }