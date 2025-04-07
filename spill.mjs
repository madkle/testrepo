//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";
import birdImages from "./resources/bird.mjs"

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(planet1);


const sporsmalsListe = [scene3, scene4, scene5];
const brukteSporsmal = [];
const utfordingsListe = [scene1, scene2];
const brukteUtfordinger = [];
let counter = 0;
let counterLimit = null;
let nestePlanet = null;

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 
/*
function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    
}
*/
function tilfeldigTall(maksGrense) {
    return Math.floor(Math.random() * maksGrense);
}

function planet1() {
    const tekst = new Blocks.Text("Dette er planet en", { style: "overskrift1", x: 0, y: 0, width: 500, height: 500 });
    const videre = new Blocks.Text("Trykk videre", { style: "overskrift2", x: 400, y: 400, width: 500, height: 500 });
    Actions.Click(videre, () => {
        nestePlanet = planet2;
        counterLimit = 3;
        GaaTil(sporsmaalSti);
    })
}
function sporsmaalSti() {
    //sjekker om counter er større eller lik counterLimit
    //hvis den er det så lar den deg gå til neste planet
    if (counter >= counterLimit) {
        const nestePlanetTekst = new Blocks.Text("Gå til neste planet", { style: "overskrift2", x: 250, y: 500, width: 500, height: 500 });
        Actions.Click(nestePlanetTekst, () => {
            //nullstiller alle variabler
            counter = 0;
            counterLimit = null;
            //går til neste planet
            GaaTil(nestePlanet);
        });
        return
    }
    
    //const sporsmaalsBilde = new Blocks.Image("resources/bilder/question.png", { x: 700, y: 150, width: 300, height: 450 });new
    const nesteKort = new Blocks.Text("Trykk på kortet for å få spørsmål", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    if (sporsmalsListe.length !== 0) {
        //hvis telleren er større eller lik counterLimit så går den til neste planet
        const utfordringsKort = new Blocks.Image("resources/bilder/challenge.png", { x: 600, y: 150, width: 300, height: 450 });
        const sporsmalsKort = new Blocks.Image("resources/bilder/question.png", { x: 300, y: 150, width: 300, height: 450 });
           
        Actions.Click(utfordringsKort, () => {
            
            counter++; //   øker telleren med 1
            //bestemmer tilfeldig tall basert på antall scener i tilfeldigFunksjon
            const sceneIndex = tilfeldigTall(utfordingsListe.length);
            //henter den tilfeldige scenen fra listen
            const tilfeldingScene = utfordingsListe[sceneIndex];
            //fjerner den tilfeldige scenen fra listen
            utfordingsListe.splice(sceneIndex, 1);
            //tar vare på scenen som ble brukt i en annen array
            brukteUtfordinger.push(tilfeldingScene);
            //går til scenen
            console.log(brukteUtfordinger);

            console.log("utfordingsListe");
            console.log(utfordingsListe);
            
            
            GaaTil(tilfeldingScene);
        });

        Actions.Click(sporsmalsKort, () => {
            
            counter++; //   øker telleren med 1
            //bestemmer tilfeldig tall basert på antall scener i tilfeldigFunksjon
            const sceneIndex = tilfeldigTall(sporsmalsListe.length);
            //henter den tilfeldige scenen fra listen
            const tilfeldingScene = sporsmalsListe[sceneIndex];
            //fjerner den tilfeldige scenen fra listen
            sporsmalsListe.splice(sceneIndex, 1);
            //tar vare på scenen som ble brukt i en annen array
            brukteSporsmal.push(tilfeldingScene);
            //går til scenen
            console.log(brukteSporsmal);

            console.log("sporsmalsListe");
            console.log(sporsmalsListe);
            
            
            GaaTil(tilfeldingScene);
        });
    }
}
function resettScener(params) {
    if (sporsmalsListe.length === 0) {
        //dette går utifra at det ikke er noen flere scener igjen i tilfeldigFunksjon. 
        //den legger da bare alt fra brukteScener tilbake i tilfeldigFunksjon
        //og nullstiller brukteScener
        sporsmalsListe.push(...brukteSporsmal);
        brukteSporsmal.length = 0; //nullstiller arrayen
        
    }else{
        //hvis det er scener i tilfeldigFunksjon så går deng gjennom brukteScener og legger til hver enkelt scene.
        //deretter nullstiller den brukteScener
        brukteSporsmal.forEach(scene => {
            sporsmalsListe.push(scene);
        });
        brukteSporsmal.length = 0; //nullstiller arrayen
    }
}
function planet2(params) {
    const tekst = new Blocks.Text("Dette er en planet 2", { style: "overskrift1", x: 0, y: 0, width: 500, height: 500 });
    const videre = new Blocks.Text("Trykk videre", { style: "overskrift2", x: 400, y: 400, width: 500, height: 500 });
    Actions.Click(videre, () => {
        nestePlanet = planet3;
        counterLimit = 2;
        GaaTil(sporsmaalSti);
    })
}

function planet3(params) {
    const tekst = new Blocks.Text("Dette er en planet 3", { style: "overskrift1", x: 0, y: 0, width: 500, height: 500 });
}
function scene1(params) {
    const tekst = new Blocks.Text("Dette er en scene", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    const tilbake = new Blocks.Text("Trykk tilbake", { style: "overskrift2", x: 500, y: 500, width: 500, height: 500 });
    Actions.Click(tilbake, () => {
        GaaTil(sporsmaalSti);
    });
}

function scene2(params) {
    const tekst = new Blocks.Text("Dette er en scene 2", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    const tilbake = new Blocks.Text("Trykk tilbake", { style: "overskrift2", x: 500, y: 500, width: 500, height: 500 });
    Actions.Click(tilbake, () => {
        GaaTil(sporsmaalSti);
    });
}

function scene3(params) {
    const tekst = new Blocks.Text("Dette er en scene 3", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    const tilbake = new Blocks.Text("Trykk tilbake", { style: "overskrift2", x: 500, y: 500, width: 500, height: 500 });
    Actions.Click(tilbake, () => {
        GaaTil(sporsmaalSti);
    });
}

function scene4(params) {
    const tekst = new Blocks.Text("Dette er en scene 4", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    const tilbake = new Blocks.Text("Trykk tilbake", { style: "overskrift2", x: 500, y: 500, width: 500, height: 500 });
    Actions.Click(tilbake, () => {
        GaaTil(sporsmaalSti);
    });
}

function scene5(params) {
    const tekst = new Blocks.Text("Dette er en scene 5", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    const tilbake = new Blocks.Text("Trykk tilbake", { style: "overskrift2", x: 500, y: 500, width: 500, height: 500 });
    Actions.Click(tilbake, () => {
        GaaTil(sporsmaalSti);
    });
}
/*
function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}
function test(params) {
    const chicken = new Blocks.Image("resources/bilder/chicken.png", { x: 200, y: 550, width: 100, height: 100 });
    Actions.Tween(chicken,0.1,0);
    console.log(birdImages);
    
    const bird = new Blocks.CellAnimation(birdImages,{loop:false,auto:true, x:0, y: 50, width: 100, height: 100});
    Actions.Tween(bird,1,0);
}
function feedChicken()
{

// Å gjøre: Gi bedre navn til alle tingene.
    const feedArray = [];
    let feedEaten = 0;
    
    let feedCounter = new Blocks.Text(feedEaten, { style: "tekst", x: 10, y: 10, width: 50, height: 50 });
    const updateCounter = () => {
        feedCounter.hide();
        feedCounter = new Blocks.Text(feedEaten, { style: "tekst", x: 10, y: 10, width: 50, height: 50 });
        //feedCounter.show();
    }
    const chickenEatingFood = (feed) =>{
                feedEaten++;
                updateCounter();
        if (feedEaten === 6) {
            txt1.hide();
            const txt2 = new Blocks.Text("Du har spist deg god og mett!", { style: "normal", x: 200, y: 250, width: 1000, height: 100 });
            const nextGame = new Blocks.Text("Gå videre!", { style: "normal", x: 700, y: 500, width: 1000, height: 100 });
            Actions.Click(nextGame, () => {
                GaaTil(Velkommen);
            })
            
        }
    }
    const fillFeedArray = () => {
        for (let i = 0; i < 10; i++) {
            const x = Math.floor(Math.random() * 1000);
            const y = Math.floor(Math.random() * 500);
            const feed = new Blocks.Image("resources/bilder/feed.png", { x: x, y: y, width: 50, height: 50 });
            Actions.Colide(chicken, feed, () => {
                
                feed.hide();
                chickenEatingFood();
            }
            );
            feedArray.push(feed);
        }
    }
    const txt1 = new Blocks.Text("Finn maten!", {style:"tekst", x:400,y:50,width:500,height:100});
	const chicken = new Blocks.Image("resources/bilder/chicken.png", {x:200,y:550,width:100,height:100});
    fillFeedArray();
	
    
    Actions.Drag(chicken,"move chicken");
}

*/


/*
function sort(params) {
    const obj = new Blocks.Image("resources/bilder/challenge.png", { x: 200, y: 550, width: 300, height: 450 });
    const target = new Blocks.Image("resources/bilder/question.png", { x: 700, y: 550, width: 300, height: 450 });
    
    Actions.Colide(target, obj, () =>{

    })
    Actions.Drag(obj, "drag");
}
*/