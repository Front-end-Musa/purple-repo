class Person {
    constructor(species, name, language) {
        this.species = species;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(this.language, this.name);
    }
}

class Orc extends Person {
    constructor(species, name, language, gun) {
        super(species, name, language);
        this.gun = gun;
    }

    hit() {
        return 'boom!';
    }
}

class Elf extends Person {
    spell;
    constructor(species, name, language, spell) {
        super(species, name, language);
        this.spell = spell;
    }

    create_spell() {
        this.spell = prompt('spell name:');
        return `${this.spell} created!`;
    }
}

const elf = new Elf('Russian', 'Vladislav', 'Russian', 'any');
const orc = new Orc('American', 'Jordan', 'English', 'sword');
