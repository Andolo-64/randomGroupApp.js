var SliderTall = 5;
var SliderTrac = -1;

function genBtn() {
    LagBox();
    SletBox();
    randGroup();
}

function randGroup() {
    var valueInVar = document.getElementById("name").value;
    let splitArray = valueInVar.split("\n");
    var splitArrayLength = splitArray.length;
    let randGroupbad = splitArrayLength / SliderTall;
    let randGroup = Math.ceil(randGroupbad);
    console.log("rounded up group " + randGroup);
    console.log(splitArray)
}

//let splitArrayLength = splitArray.length;
//randomize nummber out of array

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
