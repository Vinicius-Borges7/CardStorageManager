<?php namespace Source\Model;
    class Pokemon{
        private $id;
        private $name;
        private $cardType;
        private $pokeType;
        private $extras;
        private $quality;
        private $rarity;
        private $price;
        private $owner;

        public function __construct(
            ?int $id = NULL,
            ?string $name = NULL,
            ?string $cardType = NULL,
            ?string $pokeType = NULL,
            ?string $extras = NULL,
            ?string $quality = NULL,
            ?string $rarity = NULL,
            ?string $price = NULL,
            ?int $owner = NULL
        )
        {
            $this->id = $id;
            $this->name = $name;
            $this->cardType = $cardType;
            $this->pokeType = $pokeType;
            $this->extras = $extras;
            $this->quality = $quality;
            $this->rarity = $rarity;
            $this->price = $price;
            $this->owner = $owner;
        }

        function findCard($id){
            $query = "SELECT * FROM itempokemon WHERE id = $id;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetch();
        }

        function findAll($owner){
            $query = "SELECT * FROM itempokemon WHERE owner = $owner;";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        function insert(){
            $query = 'INSERT INTO itemPokemon VALUES (NULL, :name, :cardType, :pokeType, :extras, :quality, :rarity, :price, :owner)';

            $stmt = \Source\Core\Database::getinstance()->prepare($query);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":cardType", $this->cardType);
            $stmt->bindParam(":pokeType", $this->pokeType);
            $stmt->bindParam(":extras", $this->extras);
            $stmt->bindParam(":quality", $this->quality);
            $stmt->bindParam(":rarity", $this->rarity);
            $stmt->bindParam(":price", $this->price);
            $stmt->bindParam(":owner", $this->owner);
            
            $stmt->execute();
        }

        function update($id, $column, $newValue){
            $query = "UPDATE itempokemon SET $column = :newValue WHERE id = :id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":newValue", $newValue);
            $stmt->execute();
        }

        function delete($id){
            $query = "DELETE FROM itempokemon WHERE id = $id";
            $stmt = \Source\Core\Database::getInstance()->prepare($query);
            $stmt->execute();
        }
    }