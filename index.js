var SliderTall = 5;
var SliderTrac = -1;

function genBtn() {
    LagBox();
    SletBox();

    var valueInVar = document.getElementById("name").value;
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    // Move the object at index 1 (Object 2) to index 3
    //valueInVarArray.splice(1, 1)[0]; // Remove it from the array
    //valueInVarArray.splice(3, 0, objectToMove); // Insert it at the new position
    console.log(valueInVarArray)
}

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
