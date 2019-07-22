
function Fighter(options) {
    let name = options.name;
    let damage = options.damage;
    let agility = options.agility;
    let hp = options.hp;
    let totalHp = options.hp;
    
    this.getName = function() {
        return name;        
    }

    this.getDamage = function() {
        return damage;        
    }

    this.getAgility = function() {
        return agility;        
    }

    this.getHealth = function() {
        return hp;        
    }

    this.heal = function(deltaHp) {
        hp = hp + deltaHp;
        if (hp > totalHp) {
            hp = totalHp;
        }
    }

    this.dealDamage = function(deltaHp) {
        hp = hp - deltaHp;
        if (hp < 0) {
            hp = 0;
        }
    }

}