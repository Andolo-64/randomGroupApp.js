var SliderTall = '';

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
}