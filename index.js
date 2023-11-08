var SliderTall = 5;
var SliderTrac = -1;
var SaveText = "";

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
  if(!m)
  {
    arrayIbox(array);
  }

    return array;
};
  // slutt av fisher yates algoritmen

  //  tar array med random Navn og put element i boxene
function arrayIbox(array)
{
var BoxToArrayL = array.length / SliderTall ;
console.log(BoxToArrayL + "BoxtoarrayL")
SaveText = "";
//paser på at du har nok navn iforhold til gruper
if(BoxToArrayL < 1 )
{
    window.alert("Du Har For lite personer til og lage grupene leg til flere eller lag mindre gruper ☺");
    return 0;
}
var Id = 0;
var Reset = true;

array.forEach(function(element)
{  
    if(Id == SliderTall)
    { 
        Id = -0
        Reset = false;
    } 
    var  uniqueId = "BoxId" + Id;
    console.log(Id + "iD");
if(Reset == true)//reseter kva som er i boxene
{
    document.getElementById(uniqueId).value = "";
}
    document.getElementById(uniqueId).value += element + "\n";
    console.log(element + "iBox");
    console.log(uniqueId + "uniqueId");
    Id++;
   } );

}

function downloadBtn()
{
    for (var saveTrac = 0 ;saveTrac < SliderTall;){
        var  uniqueId = "BoxId" + saveTrac;
        console.log(uniqueId + "saveid")
        var gettext = document.getElementById(uniqueId).value;
        var SavetempText = gettext;
        SaveText +="Grupe" + (saveTrac + 1) + "\n" + SavetempText ;
        saveTrac++;      
    }

    console.log("Save"); 
    console.log(SaveText); 

    var blob = new Blob([SaveText], { type: 'text/plain'});
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'Gruper.txt';
    a.style.display = 'none';
    
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
    SaveText = "";
}

//Skafer kor mange gruper det skall vere
function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    sliderTall.innerHTML = (SliderTall);
}

function LagBox() {
    for (SliderTrac ;SliderTrac <= SliderTall;){
        SliderTrac++;
        var Scalebox = document.createElement("textarea");
        var uniqueId = "BoxId" + SliderTrac;
        Scalebox.setAttribute("type", "textarea");
        Scalebox.setAttribute("value", SliderTall);
        Scalebox.setAttribute("id", uniqueId);
        Scalebox.setAttribute("readonly", "true");
        Scalebox.setAttribute("placeholder", "not valid");
        Scalebox.setAttribute("size", "20");
        Scalebox.setAttribute("rows", "6");
        Scalebox.classList.add("Boxclass");
        document.body.appendChild(Scalebox);
    }
}

function SletBox() {
    for (SliderTall;SliderTall <= SliderTrac;) {
        var elem = document.getElementById("BoxId" + SliderTrac);
        elem.parentNode.removeChild(elem);  
        SliderTrac--;    
    }

}
