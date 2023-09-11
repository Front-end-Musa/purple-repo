const Person = function(species, name, language) {
    this.species = species;
    this.name = name;
    this.language = language;
}

Person.prototype.speak = function () {
    console.log(this.language, this.name);
}

let orc = new Person('American', 'Robert', 'English');

orc.gun = 'sword';

orc.hit = function () {
    return 'ha!';
}

let elf = new Person('Chinese', 'Jackson', 'Chinese');

elf.create_spell = function () {
    return elf.spell = 'spell';
}
