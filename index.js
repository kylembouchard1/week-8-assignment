// Squads and Heros on those Squads

class Hero {//here is my first class//
    constructor(name, power) { 
    this.name = name;
    this.power = power;
    }
    
    describe() {
    //console.log(`${this.name} superpower is ${this.power}`)
    return `${this.name} superpower is ${this.power}`;
    }
    }
    
    class Squad { //here is a second class//
    constructor(name) {
    this.name = name;
    this.Heros = []; //Here is the first array//
    }
    
    addHero(hero) {
    if (hero instanceof Hero) {
    this.Heros.push(hero);
    } else {
    throw new Error(`You can only add an instance of Hero. 
    argument is not a Hero: ${hero}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.Heros.length} Heros.`;
    }
    }
    
    class Menu { //the beginning of the menu & third created class//
    constructor() {
    this.Squads = []; //here is a second array//
    this.selectedSquad = null; 
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createSquad();
    break;
    case '2' :
    this.viewSquad();
    break;
    case '3' :
    this.deleteSquad();
    break;
    case '4' :
    this.displaySquads();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('See You Next Time!');//this is the alert received when exiting the app//
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new Squad
    2) view a Squad
    3) delete a Squad
    4) display all Squads
    `);
    }
    
    showSquadMenuOptions(SquadInfo) {
    return prompt(`
    0) back
    1) add a new Hero
    2) delete a Hero
    -----------------
    ${SquadInfo}
    `);
    }
    
    displaySquads() {
    let SquadString = '';
    for (let i = 0; i < this.Squads.length; i++) {
    SquadString += i+ ') ' + this.Squads[i].name + '\n';
    }
    alert(SquadString);
    }
    
    createSquad() {
    let name = prompt('Enter name for new Squad: ');
    this.Squads.push(new Squad(name));
    }
    
    viewSquad() {
    let index = prompt("Enter the index of the Squad that you want to view:");
    if (index > -1 && index < this.Squads.length) {
    this.selectedSquad = this.Squads[index];
    let description = 'Squad Name: ' + this.selectedSquad.name + '\n';
    description += ' ' + this.selectedSquad.describe() + '\n ';
    for (let i = 0; i < this.selectedSquad.Heros.length; i++) {
    // description += i + ') ' + this.selectedSquad.Heros[i].name + ' - '
    // + this.selectedSquad.Heros[i].power + '\n';
    description += i + ') ' + this.selectedSquad.Heros[i].describe() + '\n';
    }
    let selection1 = this.showSquadMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createHero();
    break;
    case '2' :
    this.deleteHero();
    }
    } // validate user input
    }
    
    deleteSquad() {
    let index = prompt('Enter the index of the Squad that you wish to delete: ');
    if (index > -1 && index < this.Squads.length) {
    this.Squads.splice(index,1);
    }
    }
    
    
    createHero() {
    let name = prompt('Enter name for new Hero: ');
    let power = prompt('Enter power for new Hero: ');
    //this.selectedSquad.Heros.push(new Hero(name, power));
    this.selectedSquad.addHero(new Hero(name,power));
    }
    
    deleteHero() {
    let index = prompt('Enter the index of the Hero that you wish to delete: ');
    if (index > -1 && index < this.selectedSquad.Heros.length) { this.selectedSquad.Heros.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();
    