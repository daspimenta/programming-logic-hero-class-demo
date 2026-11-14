class hero{
    constructor(heroName, age, type){
        this.heroName = heroName
        this.age = age
        this.type = type
    }

    attack(){
        console.log(`${this.heroName} attacked by using ${this.type}`)
    }

    use(){
        console.log(`${this.heroName} is using ${this.type}`)
    }
}

let hero1 = new hero("Wizard", 25, "magic")
let hero2 = new hero("Warrior", 30, "sword")
let hero3 = new hero("Monk", 28, "martial arts")
let hero4 = new hero("Ninja", 35, "shuriken")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()