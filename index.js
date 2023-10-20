var SliderTall = 5;
var SliderTrac = 0;

function genBtn() {
    const tests = document.getElementById("output");
    var valueInVar = '';
    valueInVar = document.getElementById("name").value;
    tests.innerHTML = (valueInVar);
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    console.log("array lengde" + valueInVarArray.length);
    let valueInVarArrayLength = valueInVar.length;
    let personPerGroup = valueInVarArrayLength / SliderTall;
    console.log("person per group" + personPerGroup);
    let roundedPpg = Math.round(personPerGroup);
}

function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    sliderTall.innerHTML = (SliderTall);
    //Group Textbox


    while(SliderTrac <= SliderTall )
    {
        SliderTrac++;
        var x = document.createElement("INPUT");
        x.setAttribute("type", "textarea");
        x.setAttribute("value", SliderTall);
        x.setAttribute("id", "testid");
        document.body.appendChild(x);

    }
    while( SliderTall  <=  SliderTracfix)
    {
        var elem = document.getElementById("testid");
        elem.parentNode.removeChild(elem);
        SliderTrac--;
    }
 
 


    return SliderTall


}