//object structure with key value pairs
let thingsToDo ={
    firstNum:1,
    secondNum:2
}

function try1(){
    firstNum + secondNum;    
}
//destructre to extract var from objects
let {firstNum,secondNum} = thingsToDo
thirdNum = 3;
firstNum = thirdNum; // change var value

console.log(firstNum+secondNum);

let uniStudent = ({name,university}) =>{
    console.log(`${name} from ${university}`);
}

uniStudent({
    name:'Ryan',
    university:'PLM'
});

let [, secondObject] = ['apple','orange','bananas'];
console.log(secondObject);

//Restructure

var mountain = 'Everest';
var height = 8848;
var output = function(){
    console.log(`Mt. ${mountain} is ${height} meters tall.`);
};

var adventureClimbing = {mountain,height,output};
adventureClimbing.output();

var adventureClimbing2 = {
    mountain2: 'Everest',
    height2: 8848,
    output2(){
       console.log(`Mt. ${this.mountain2} is ${this.height2} meters tall.`);

    }
}
adventureClimbing2.output2();


// how to use ... in spread or rest.
// //spread: in practical, used to combine data from nultiple objects to a single object

var mountain3 = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountain3,...mountainsFromJapan];
console.log(allMountains);

//Spread in objects

var day = {
    breakfast: 'eggs with milk',
    lunch: 'Rice with chicken'
}

var night = {
    dinner: 'noodle soup'
}

var picnic = {...day,...night};
console.log(picnic);


//get the rest in objects

var rivers = ['Sunkoshi', 'Tamakoshni', 'Saptakoshi'];
var [firstIndex, ...rest] = rivers

console.log(firstIndex);
console.log(rest);

// In JS, functions are objects

class Holiday{
    constructor(destination,days){
    this.destination = destination
    this.days = days
    }
    customInfoFunction(){
        console.log(`${this.destination} will take ${this.days} days` )
    }

}

const trip = new Holiday('Manila', 10)
trip.customInfoFunction();
const newTrip = new Holiday('Makati', 20)
newTrip.customInfoFunction();

//subclass child

class Expedition extends Holiday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear=gear
    }
    customInfoFunction(){
        //overriding
        super.customInfoFunction()
        console.log(`Bring your own ${this.gear.join(" and your ")}`)

    }
}

const newerTrip = new Expedition('Taguig', 30, ["Sunglasses", "Lotion", "Camera"])
newerTrip.customInfoFunction();
//before commit