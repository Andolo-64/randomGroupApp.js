var SliderTall = 5;
var SliderTrac = -1;

function makeArray() {
    var valueInVar = document.getElementById("name").value;
    let array = valueInVar.split("\n");
    return array;
}

function genBtn() {
    var array = makeArray(); // Store the array returned by makeArray in a variable.
    LagBox();
    SletBox();
    shuffle(array); // Pass the array to the shuffle function.
}

//fisher yates shuffle algoritm så me fant på https://bost.ocks.org/mike/shuffle/ 3eie løsning
function shuffle(array) {
    console.log(array);
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    console.log(array);
  
    return array;
};
  // slutt av fisher yates algoritmen

  // random tall ta array med random tall put i box

  

function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    sliderTall.innerHTML = (SliderTall);
}

function LagBox() {
    while (SliderTrac <= SliderTall) {
        SliderTrac++;
        var Scalebox = document.createElement("textarea");
        var uniqueId = "BoxId" + SliderTrac;
        Scalebox.setAttribute("type", "textarea");
        Scalebox.setAttribute("value", SliderTall);
        Scalebox.setAttribute("id", uniqueId);
        Scalebox.setAttribute("readonly", "true");
        Scalebox.setAttribute("placeholder", SliderTrac);
        Scalebox.setAttribute("size", "20");
        Scalebox.setAttribute("rows", "6");
        Scalebox.classList.add("Boxclass");
        document.body.appendChild(Scalebox);
    }
}

function SletBox() {
    while (SliderTall <= SliderTrac) {
        var elem = document.getElementById("BoxId" + SliderTrac);

        elem.parentNode.removeChild(elem);
        SliderTrac--;
    }

}
