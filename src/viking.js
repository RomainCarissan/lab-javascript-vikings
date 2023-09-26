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

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(Vicking) {
    this.vikingArmy.push(Vicking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[saxonIndex];
    const result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health < 1) this.saxonArmy.splice(saxonIndex, 1);
    return result;
  }

  saxonAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[vikingIndex];
    const result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health < 1) this.vikingArmy.splice(vikingIndex, 1);
    return result;
  }
}
