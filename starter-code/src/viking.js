// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);

        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        this.health >= 0;
        return `${this.name} has received ${this.damage} of damage`;

    }

}

// Saxon
class Saxon { }

// War
class War { }
