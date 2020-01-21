/* eslint-disable no-magic-numbers */
/* Your code goes here */
function Fighter(obj){
     let name = obj.name;
     let damage = obj.damage;
     let hp = obj.hp;
     let strength = obj.strength;
     let agility = obj.agility;
     let wins = 0;
     let losses = 0;
     let maxHealth=100;
     let minHealth=0;

     this.getName = function () {
          return name;
     }
     this.getDamage = function () {
          return damage;
     }
     this.getStrength = function () {
          return strength;
     }
     this.getAgility = function () {
          return agility;
     }
     this.getHealth = function () {
          return hp;
     }
     this.logCombatHistory = function () {
          console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
          console.log(`Name: ${name} heals ${hp}`)
     }
     this.heal = function (plusHealth) {
          if(hp + plusHealth > maxHealth){
               hp = maxHealth;
          }else{
               hp += plusHealth
          }
     }
     this.dealDamage = function (minusHealth) {
          if(hp - minusHealth < minHealth){
               hp = minHealth
          }else{
               hp -= minusHealth
          }

     }
     this.addWin = function () {
          wins++;
     }
     this.addLoss = function () {
          losses++;
     }
     this.successfulAttack = function (enemy) {
          return (enemy.getStrength() + enemy.getAgility()) / maxHealth <= Math.random();
     }
     this.attack = function (enemy) {
          if (this.successfulAttack(enemy)) {
               enemy.dealDamage(this.getDamage());
               console.log(`${this.getName()} makes ${this.getDamage()} damage to ${enemy.getName()}.`);
          } else {
               console.log(`${this.getName()} attack missed.`);
          }
     }
}
function battle(Maximus, Commodus) {
     if (Maximus.getHealth() && Commodus.getHealth()) {
          while (Maximus.getHealth() && Commodus.getHealth()) {
               Maximus.attack(Commodus);
               if (!Commodus.getHealth()) {
                    console.log(`${Maximus.getName()} has won!`);
                    Maximus.addWin();
                    Commodus.addLoss();
                    break;
               }
               Commodus.attack(Maximus);
               if (!Maximus.getHealth()) {
                    console.log(`${Commodus.getName()} has won!`);
                    Commodus.addWin();
                    Maximus.addLoss();
               }
          }

     }else{
          console.log(`${Maximus.getHealth() ? Commodus.getName() : Maximus.getName()} is dead and can't fight`);
     }
}

const Maximus = new Fighter(
     {
          name : 'Maximus',
          damage : 20,
          hp : 100,
          strength : 20,
          agility : 15
     });

const Commodus = new Fighter(
     {
          name : 'Commodus',
          damage : 25,
          hp : 90,
          strength : 25,
          agility : 20
     });

battle(Maximus, Commodus);
Maximus.logCombatHistory();
Commodus.logCombatHistory();