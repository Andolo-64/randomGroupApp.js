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
    console.log("person per group" + personPerGroup)
}

function Slid() {
    var SliderTall = '';
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    sliderTall.innerHTML = (SliderTall);
    return SliderTall;
}