//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

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

Start(Velkommen);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    const velkommen2 = new Blocks.Text("Trykk på denne teksten 2", { style: "overskrift", x: 700, y: 0, width: 100, height: 100 });
    const velkommen3 = new Blocks.Text("Trykk på denne teksten 3", { style: "overskrift", x: 0, y: 600, width: 100, height: 100 });
    const velkommen4 = new Blocks.Text("Trykk på denne teksten 4", { style: "overskrift", x: 700, y: 600, width: 100, height: 100 });
    let counter = 0;
    const blockObj = {block: velkommen, clicked: false, category:"tekst", hidden: false};
    const blockObj2 = {block: velkommen2, clicked: false, category:"tekst", hidden: false};
    const blockObj3 = {block: velkommen3, clicked: false, category:"bilde", hidden: false};
    const blockObj4 = {block: velkommen4, clicked: false, category:"bilde", hidden: false};
    const blockList = [blockObj,blockObj2,blockObj3,blockObj4];
    function sjekk() {
        console.log(blockList);
        const test = blockList.filter((block) => block.clicked == true);
        
        console.log(test);
        if (test[0].category == test[1].category) {
            console.log("Du trykket på to av samme kategori!");
            test[0].block.hide();
            test[0].hidden = true;
            test[0].clicked = false;
            test[1].clicked = false;
            test[1].block.hide();
            test[1].hidden = true;
        }
        else {
            console.log("Du trykket på to forskjellige kategorier!");
            
            test[0].clicked = false;
            test[1].clicked = false;
        }
        
        counter = 0;
        console.log(blocklList);
        
        if (blockList.filter((block) => block.hidden == false).length === 0) {
            console.log("Ingen flere blokker igjen!");
            
            
            
        }
        
    }
    
    Actions.Click(velkommen, () => {
        if (blockList[0].clicked === true) {
            return
        }
        counter++;
        blockList[0].clicked = true;
        if (counter == 2) {
            sjekk();
        }
        //GaaTil(scene2);
    })
    Actions.Click(velkommen2, () => {
        if (blockList[1].clicked === true) {
            return
        }
        counter++;
        blockList[1].clicked = true;
        if (counter == 2) {
            sjekk();
        }
        //GaaTil(scene2);
    })
    Actions.Click(velkommen3, () => {
        if (blockList[2].clicked === true) {
            return
        }
        counter++;
        blockList[2].clicked = true;
        if (counter == 2) {
            sjekk();
        }
        //GaaTil(scene2);
    })
    Actions.Click(velkommen4, () => {
        if (blockList[3].clicked === true) {
            return
        }
        counter++;
        blockList[3].clicked = true;
        if (counter == 2) {
            sjekk();
        }
        //GaaTil(scene2);
    })
    const tekst = new Blocks.Text("Dra denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Drag(tekst,"test");
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}

