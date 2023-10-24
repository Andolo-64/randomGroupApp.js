var SliderTall = 5;
var SliderTrac = -1;

function genBtn() {
    const tests = document.getElementById("output");
    var valueInVar = '';
    valueInVar = document.getElementById("name").value;
    tests.innerHTML = (valueInVar);
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    let valueInVarArrayLength = valueInVar.filter(item => typeof item === 'object').length;
    console.log("array lengde" + valueInVarArrayLength);
    let personPerGroup = valueInVarArrayLength / SliderTall;
    console.log("person per group" + personPerGroup);
    let roundedPpg = Math.round(personPerGroup);
    console.log(roundedPpg);
}

function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    sliderTall.innerHTML = (SliderTall);
    //Group Textbox

    while(SliderTrac <= SliderTall )
    {
        SliderTrac++;
        var Scalebox = document.createElement("textarea");
        var uniqueId = "BoxId" + SliderTrac;

        Scalebox.setAttribute("type", "textarea");
        Scalebox.setAttribute("value", SliderTall);
        Scalebox.setAttribute("name", "Scaletext");
        Scalebox.setAttribute("id", uniqueId);
        Scalebox.setAttribute("readonly", "true")
        Scalebox.setAttribute("placeholder","randomGroup")
        Scalebox.setAttribute("size","20")
        Scalebox.setAttribute( "rows","6")

        document.body.appendChild(Scalebox);
    }
    
    while( SliderTall  <=  SliderTrac)
    {
        var elem = document.getElementsByName("Scaletext");
        if (elem) {
            elem.parentNode.removeChild(elem); // Remove the element from its parent
        }
       // elem.parentNode.removeChild(elem);
        SliderTrac--;
    }
    return SliderTall;
}