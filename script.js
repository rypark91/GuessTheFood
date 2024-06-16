
//give a victory or defeat feedback


let body = document.querySelector("body");
let hintNumber = document.querySelector("#hintNumber"); 

let pizza = document.querySelector("#pizza");
let hamburger = document.querySelector("#hamburger");
let icecream = document.querySelector("#icecream");
let salad = document.querySelector("#salad");
let burrito = document.querySelector("#burrito");
let fries = document.querySelector("#fries");
let mozzarellasticks = document.querySelector("#mozzarellasticks");
let carrot = document.querySelector("#carrot");
let misosoup = document.querySelector("#misosoup");
let chickennuggets = document.querySelector("#chickennuggets");
let californiarolls = document.querySelector("#californiarolls");
let quesadilla = document.querySelector("#quesadilla");
let macncheese = document.querySelector("#macncheese");
let onionrings = document.querySelector("#onionrings");
let bonelesswings = document.querySelector("#bonelesswings");
let chickensandwich = document.querySelector("#chickensandwich");
let spicytunaroll = document.querySelector("#spicytunaroll");
let applepie = document.querySelector("#applepie");
let taco = document.querySelector("#taco");
let rice = document.querySelector("#rice");
let doughnut = document.querySelector("#doughnut");
let chickenwings = document.querySelector("#chickenwings");
let milkshake = document.querySelector("#milkshake");
let chickentenders = document.querySelector("#chickentenders");
let sweetpotatofries = document.querySelector("#sweetpotatofries");
let chili = document.querySelector("#chili");
let nachos = document.querySelector("#nachos");
let biscuitsngravy = document.querySelector("#biscuitsngravy");
let meatloaf = document.querySelector("#meatloaf");
let popcorn = document.querySelector("#popcorn");



let healthy = document.querySelector("#healthy");
let unhealthy = document.querySelector("#unhealthy");
let dessert = document.querySelector("#dessert");
let side = document.querySelector("#side");
let scoopable = document.querySelector("#scoopable");
let dippable = document.querySelector("#dippable");
let holdable = document.querySelector("#holdable");
let drinkable = document.querySelector("#drinkable");
let meat = document.querySelector("#meat");
let plant = document.querySelector("#plant");
let breadlike = document.querySelector("#breadlike");


let buttons = document.getElementsByTagName("button");
let cards = document.getElementsByClassName("card");

let hints = 4;

let pizzaObject = {
    name: 'pizza',
    properties: ['unhealthy','chicken','holdable','meat','plant','breadlike']
};
let hamburgerObject = {
    name: 'hamburger',
    properties: ['unhealthy','holdable','meat','plant','breadlike']
};
let icecreamObject = {
    name: 'icecream',
    properties: ['dessert','unhealthy','scoopable','holdable']
};
let saladObject = {
    name: 'salad',
    properties: ['side','healthy','scoopable','plant']
};
let burritoObject = {
    name: 'burrito',
    properties: ['unhealthy','chicken','holdable','meat','plant','breadlike']
};
let friesObject = {
    name: 'fries',
    properties: ['side','unhealthy','holdable','dippable','plant']
};
let mozzarellasticksObject = {
    name: 'mozzarellasticks',
    properties: ['side','unhealthy','holdable','dippable','breadlike']
};
let carrotObject = {
    name: 'carrot',
    properties: ['side','healthy','dippable','holdable','plant']
};
let misosoupObject = {
    name: 'misosoup',
    properties: ['side','healthy','scoopable','drinkable']
};
let chickennuggetsObject = {
    name: 'chickennuggets',
    properties: ['unhealthy','chicken','dippable','holdable','meat','breadlike']
};
let californiarollsObject = {
    name: 'californiarolls',
    properties: ['healthy','scoopable','dippable','meat','plant']
};
let quesadillaObject = {
    name: 'quesadilla',
    properties: ['unhealthy','chicken','holdable','meat','plant','breadlike']
};
let macncheeseObject = {
    name: 'macncheese',
    properties: ['side','unhealthy','scoopable']
};

let onionringsObject = {
    name: 'onionrings',
    properties: ['side','unhealthy','holdable','dippable','plant','breadlike']
};

let bonelesswingsObject = {
    name: 'bonelesswings',
    properties: ['unhealthy','chicken','dippable','holdable','meat','breadlike']
};
let chickensandwichObject = {
    name: 'chickensandwich',
    properties: ['unhealthy','chicken','holdable','meat','breadlike']
};
let spicytunarollObject = {
    name: 'spicytunaroll',
    properties: ['healthy','scoopable','dippable','meat','plant']
};
let applepieObject = {
    name: 'applepie',
    properties: ['unhealthy','dessert','scoopable','plant','breadlike']
};
let tacoObject = {
    name: 'taco',
    properties: ['unhealthy','chicken','holdable','meat','plant','breadlike']
};
let riceObject = {
    name: 'rice',
    properties: ['side','healthy','scoopable','plant']
};

let doughnutObject = {
    name: 'doughnut',
    properties: ['unhealthy','holdable','dessert','breadlike']
};
let chickenwingsObject = {
    name: 'chickenwings',
    properties: ['unhealthy','chicken','dippable','holdable','meat','breadlike']
};
let milkshakeObject = {
    name: 'milkshake',
    properties: ['unhealthy','dessert','drinkable']
};
let chickentendersObject = {
    name: 'chickentenders',
    properties: ['unhealthy','chicken','dippable','holdable','meat','breadlike']
};
let sweetpotatofriesObject = {
    name: 'sweetpotatofries',
    properties: ['side','healthy','dappable','holdable','plant']
};
let chiliObject = {
    name: 'chili',
    properties: ['side','unhealthy','scoopable','meat']
};
let nachosObject = {
    name: 'nachos',
    properties: ['unhealthy','side','dippable','holdable']
};
let biscuitsngravyObject = {
    name: 'biscuitsngravy',
    properties: ['side','unhealthy','scoopable','meat','breadlike']
};
let meatloafObject = {
    name: 'meatloaf',
    properties: ['unhealthy','scoopable','meat']
};
let popcornObject = {
    name: 'popcorn',
    properties: ['side','healthy','holdable','plant']
};
let foodObjects = [pizzaObject, hamburgerObject, icecreamObject, saladObject, burritoObject,
    friesObject, mozzarellasticksObject, carrotObject, misosoupObject, chickennuggetsObject,
    californiarollsObject, quesadillaObject, macncheeseObject, onionringsObject, bonelesswingsObject,
    chickensandwichObject, spicytunarollObject, applepieObject, tacoObject, riceObject,
    doughnutObject, chickenwingsObject, milkshakeObject, chickentendersObject, sweetpotatofriesObject,
    chiliObject, nachosObject, biscuitsngravyObject, meatloafObject, popcornObject];

let food = foodObjects[Math.floor(Math.random() * 30)];
//let food = saladObject;
healthy.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('healthy');
});
unhealthy.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('unhealthy');
});
dessert.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('dessert');
});
side.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('side');
});
chicken.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('chicken');
});
scoopable.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('scoopable');
});
dippable.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('dippable');
});
holdable.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('holdable');
});
drinkable.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('drinkable');
});
meat.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('meat');
});
plant.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('plant');
});
breadlike.addEventListener('click',function(){
    this.disabled = true;
    checkForProperites('breadlike');
});


pizza.addEventListener('click',function(){
    if(food.name === 'pizza'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
hamburger.addEventListener('click',function(){
    if(food.name === 'hamburger'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
icecream.addEventListener('click',function(){
    if(food.name === 'icecream'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
salad.addEventListener('click',function(){
    if(food.name === 'salad'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
burrito.addEventListener('click',function(){
    if(food.name === 'burrito'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
fries.addEventListener('click',function(){
    if(food.name === 'fries'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
mozzarellasticks.addEventListener('click',function(){
    if(food.name === 'mozzarellasticks'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
carrot.addEventListener('click',function(){
    if(food.name === 'carrot'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
misosoup.addEventListener('click',function(){
    if(food.name === 'misosoup'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
chickennuggets.addEventListener('click',function(){
    if(food.name === 'chickennuggets'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
californiarolls.addEventListener('click',function(){
    if(food.name === 'californiarolls'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
quesadilla.addEventListener('click',function(){
    if(food.name === 'quesadilla'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
macncheese.addEventListener('click',function(){
    if(food.name === 'macncheese'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
onionrings.addEventListener('click',function(){
    if(food.name === 'onionrings'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
bonelesswings.addEventListener('click',function(){
    if(food.name === 'bonelesswings'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
chickensandwich.addEventListener('click',function(){
    if(food.name === 'chickensandwich'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
spicytunaroll.addEventListener('click',function(){
    if(food.name === 'spicytunaroll'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
applepie.addEventListener('click',function(){
    if(food.name === 'applepie'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
taco.addEventListener('click',function(){
    if(food.name === 'taco'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
rice.addEventListener('click',function(){
    if(food.name === 'rice'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
doughnut.addEventListener('click',function(){
    if(food.name === 'doughnut'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
chickenwings.addEventListener('click',function(){
    if(food.name === 'chickenwings'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
milkshake.addEventListener('click',function(){
    if(food.name === 'milkshake'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
chickentenders.addEventListener('click',function(){
    if(food.name === 'chickentenders'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
sweetpotatofries.addEventListener('click',function(){
    if(food.name === 'sweetpotatofries'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
chili.addEventListener('click',function(){
    if(food.name === 'chili'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
nachos.addEventListener('click',function(){
    if(food.name === 'nachos'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
biscuitsngravy.addEventListener('click',function(){
    if(food.name === 'biscuitsngravy'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
meatloaf.addEventListener('click',function(){
    if(food.name === 'meatloaf'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});
popcorn.addEventListener('click',function(){
    if(food.name === 'popcorn'){
        alert('Well Done! You win!');
    }
    else{
        alert(`Sorry, it was ${food.name}.  Try again.`);
    }
    resetGame();
});

function checkForProperites(property){
    hints--;
    hintNumber.textContent = hints;
    if(food.properties.includes(property)){
        alert(`Yes, the food has the ${property} property.`);
        if(!pizza.classList.contains("disabled") && !pizzaObject.properties.includes(property)){
            pizza.classList.add("disabled");
        }
        if(!hamburger.classList.contains("disabled") && !hamburgerObject.properties.includes(property)){
            hamburger.classList.add("disabled");
        }
        if(!icecream.classList.contains("disabled") && !icecreamObject.properties.includes(property)){
            icecream.classList.add("disabled");
        }
        if(!salad.classList.contains("disabled") && !saladObject.properties.includes(property)){
            salad.classList.add("disabled");
        }
        if(!burrito.classList.contains("disabled") && !burritoObject.properties.includes(property)){
            burrito.classList.add("disabled");
        }
        if(!fries.classList.contains("disabled") && !friesObject.properties.includes(property)){
            fries.classList.add("disabled");
        }
        if(!mozzarellasticks.classList.contains("disabled") && !mozzarellasticksObject.properties.includes(property)){
            mozzarellasticks.classList.add("disabled");
        }
        if(!carrot.classList.contains("disabled") && !carrotObject.properties.includes(property)){
            carrot.classList.add("disabled");
        }
        if(!misosoup.classList.contains("disabled") && !misosoupObject.properties.includes(property)){
            misosoup.classList.add("disabled");
        }
        if(!chickennuggets.classList.contains("disabled") && !chickennuggetsObject.properties.includes(property)){
            chickennuggets.classList.add("disabled");
        }
        if(!californiarolls.classList.contains("disabled") && !californiarollsObject.properties.includes(property)){
            californiarolls.classList.add("disabled");
        }
        if(!quesadilla.classList.contains("disabled") && !quesadillaObject.properties.includes(property)){
            quesadilla.classList.add("disabled");
        }
        if(!macncheese.classList.contains("disabled") && !macncheeseObject.properties.includes(property)){
            macncheese.classList.add("disabled");
        }
        if(!onionrings.classList.contains("disabled") && !onionringsObject.properties.includes(property)){
            onionrings.classList.add("disabled");
        }
        if(!bonelesswings.classList.contains("disabled") && !bonelesswingsObject.properties.includes(property)){
            bonelesswings.classList.add("disabled");
        }
        if(!chickensandwich.classList.contains("disabled") && !chickensandwichObject.properties.includes(property)){
            chickensandwich.classList.add("disabled");
        }
        if(!spicytunaroll.classList.contains("disabled") && !spicytunarollObject.properties.includes(property)){
            spicytunaroll.classList.add("disabled");
        }
        if(!applepie.classList.contains("disabled") && !applepieObject.properties.includes(property)){
            applepie.classList.add("disabled");
        }
        if(!taco.classList.contains("disabled") && !tacoObject.properties.includes(property)){
            taco.classList.add("disabled");
        }
        if(!rice.classList.contains("disabled") && !riceObject.properties.includes(property)){
            rice.classList.add("disabled");
        }
        if(!doughnut.classList.contains("disabled") && !doughnutObject.properties.includes(property)){
            doughnut.classList.add("disabled");
        }
        if(!chickenwings.classList.contains("disabled") && !chickenwingsObject.properties.includes(property)){
            chickenwings.classList.add("disabled");
        }
        if(!milkshake.classList.contains("disabled") && !milkshakeObject.properties.includes(property)){
            milkshake.classList.add("disabled");
        }
        if(!chickentenders.classList.contains("disabled") && !chickentendersObject.properties.includes(property)){
            chickentenders.classList.add("disabled");
        }
        if(!sweetpotatofries.classList.contains("disabled") && !sweetpotatofriesObject.properties.includes(property)){
            sweetpotatofries.classList.add("disabled");
        }
        if(!chili.classList.contains("disabled") && !chiliObject.properties.includes(property)){
            chili.classList.add("disabled");
        }
        if(!nachos.classList.contains("disabled") && !nachosObject.properties.includes(property)){
            nachos.classList.add("disabled");
        }
        if(!biscuitsngravy.classList.contains("disabled") && !biscuitsngravyObject.properties.includes(property)){
            biscuitsngravy.classList.add("disabled");
        }
        if(!meatloaf.classList.contains("disabled") && !meatloafObject.properties.includes(property)){
            meatloaf.classList.add("disabled");
        }
        if(!popcorn.classList.contains("disabled") && !popcornObject.properties.includes(property)){
            popcorn.classList.add("disabled");
        } 
    }
    else{
        alert(`Sorry, the food dosen't have the ${property} property.`);
        if(!pizza.classList.contains("disabled") && pizzaObject.properties.includes(property)){
            pizza.classList.add("disabled");
        }
        if(!hamburger.classList.contains("disabled") && hamburgerObject.properties.includes(property)){
            hamburger.classList.add("disabled");
        }
        if(!icecream.classList.contains("disabled") && icecreamObject.properties.includes(property)){
            icecream.classList.add("disabled");
        }
        if(!salad.classList.contains("disabled") && saladObject.properties.includes(property)){
            salad.classList.add("disabled");
        }
        if(!burrito.classList.contains("disabled") && burritoObject.properties.includes(property)){
            burrito.classList.add("disabled");
        }
        if(!fries.classList.contains("disabled") && friesObject.properties.includes(property)){
            fries.classList.add("disabled");
        }
        if(!mozzarellasticks.classList.contains("disabled") && mozzarellasticksObject.properties.includes(property)){
            mozzarellasticks.classList.add("disabled");
        }
        if(!carrot.classList.contains("disabled") && carrotObject.properties.includes(property)){
            carrot.classList.add("disabled");
        }
        if(!misosoup.classList.contains("disabled") && misosoupObject.properties.includes(property)){
            misosoup.classList.add("disabled");
        }
        if(!chickennuggets.classList.contains("disabled") && chickennuggetsObject.properties.includes(property)){
            chickennuggets.classList.add("disabled");
        }
        if(!californiarolls.classList.contains("disabled") && californiarollsObject.properties.includes(property)){
            californiarolls.classList.add("disabled");
        }
        if(!quesadilla.classList.contains("disabled") && quesadillaObject.properties.includes(property)){
            quesadilla.classList.add("disabled");
        }
        if(!macncheese.classList.contains("disabled") && macncheeseObject.properties.includes(property)){
            macncheese.classList.add("disabled");
        }
        if(!onionrings.classList.contains("disabled") && onionringsObject.properties.includes(property)){
            onionrings.classList.add("disabled");
        }
        if(!bonelesswings.classList.contains("disabled") && bonelesswingsObject.properties.includes(property)){
            bonelesswings.classList.add("disabled");
        }
        if(!chickensandwich.classList.contains("disabled") && chickensandwichObject.properties.includes(property)){
            chickensandwich.classList.add("disabled");
        }
        if(!spicytunaroll.classList.contains("disabled") && spicytunarollObject.properties.includes(property)){
            spicytunaroll.classList.add("disabled");
        }
        if(!applepie.classList.contains("disabled") && applepieObject.properties.includes(property)){
            applepie.classList.add("disabled");
        }
        if(!taco.classList.contains("disabled") && tacoObject.properties.includes(property)){
            taco.classList.add("disabled");
        }
        if(!rice.classList.contains("disabled") && riceObject.properties.includes(property)){
            rice.classList.add("disabled");
        }
        if(!doughnut.classList.contains("disabled") && doughnutObject.properties.includes(property)){
            doughnut.classList.add("disabled");
        }
        if(!chickenwings.classList.contains("disabled") && chickenwingsObject.properties.includes(property)){
            chickenwings.classList.add("disabled");
        }
        if(!milkshake.classList.contains("disabled") && milkshakeObject.properties.includes(property)){
            milkshake.classList.add("disabled");
        }
        if(!chickentenders.classList.contains("disabled") && chickentendersObject.properties.includes(property)){
            chickentenders.classList.add("disabled");
        }
        if(!sweetpotatofries.classList.contains("disabled") && sweetpotatofriesObject.properties.includes(property)){
            sweetpotatofries.classList.add("disabled");
        }
        if(!chili.classList.contains("disabled") && chiliObject.properties.includes(property)){
            chili.classList.add("disabled");
        }
        if(!nachos.classList.contains("disabled") && nachosObject.properties.includes(property)){
            nachos.classList.add("disabled");
        }
        if(!biscuitsngravy.classList.contains("disabled") && biscuitsngravyObject.properties.includes(property)){
            biscuitsngravy.classList.add("disabled");
        }
        if(!meatloaf.classList.contains("disabled") && meatloafObject.properties.includes(property)){
            meatloaf.classList.add("disabled");
        }
        if(!popcorn.classList.contains("disabled") && popcornObject.properties.includes(property)){
            popcorn.classList.add("disabled");
        } 
    }
    if(hints === 0){
        for(var i = 0; i < buttons.length; i++){
            buttons[i].disabled = true;
        }
    }
}
function resetGame(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
        
    }
    hints = 4;
    hintNumber.textContent = hints;
    for(var j = 0; j < cards.length; j++){
        cards[j].classList.remove("disabled");
    }
    food = foodObjects[Math.floor(Math.random() * 30)];
    //let food = saladObject;
    console.log(food);
}
alert("Welcome to Guess the Food!  The rules are simple, pick one of the buttons for limited hints, and the choices will decrease.  Pick the right food and you win.");
console.log(food);
