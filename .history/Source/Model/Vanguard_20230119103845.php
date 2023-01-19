<?php namespace Source\Model;
    class Yugioh{
        private $id;
        private $name;
        private $cardType;
        private $cardCategory;
        private $quality;
        private $rarity;
        private $price;
        private $owner;

        public function __construct(
            ?int $id = NULL,
            ?string $name = NULL,
            ?string $cardType = NULL,
            ?string $cardCategory = NULL,
            ?string $quality = NULL,
            ?string $rarity = NULL,
            ?string $price = NULL,
            ?int $owner = null
        )
        {
            $this->id = NULL;
            $this->name = $name;
            $this->cardType = $cardType;
            $this->cardCategory = $cardCategory;
            $this->quality = $quality;
            $this->rarity = $rarity;
            $this->price = $price;
            $this->owner = $owner;
        }

        function findCard($id){
            $query = "SELECT * FROM itemYgo WHERE id = $id;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetch();
        }

        function findAll($owner){
            $query = "SELECT * FROM itemYgo WHERE owner = $owner;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        function insert(){
            $query = 'INSERT INTO itemYgo VALUES (NULL,:name,:cardCategory,:cardType,:quality,:rarity,:price,:owner)';
            $stmt = \Source\Core\Database::getinstance()->prepare($query);

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":cardType", $this->cardType);
            $stmt->bindParam(":cardCategory", $this->cardCategory);
            $stmt->bindParam(":quality", $this->quality);
            $stmt->bindParam(":rarity", $this->rarity);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":owner", $this->owner);
            
            $stmt->execute();
        }

        function update($id, $column, $newValue){
            $query = "UPDATE itemYgo SET $column = :newValue WHERE id = :id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":newValue", $newValue);
            $stmt->execute();
        }

        function delete($id){
            $query = "DELETE FROM itemYgo WHERE id = $id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();

        }
    }