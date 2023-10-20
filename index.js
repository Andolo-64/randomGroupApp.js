function genBtn() {
    const tests = document.getElementById("output");
    var valueInVar = ''; 
    valueInVar = document.getElementById("name").value;
    tests.innerHTML = (valueInVar);
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    console.log(valueInVarArray[2]);

}

function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    var SliderTall = '';
    sliderTall.innerHTML = (SliderTall)

}