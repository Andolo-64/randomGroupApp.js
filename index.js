function genBtn() {
    const tests = document.getElementById("output");
    var valueInVar = ''; 
    valueInVar = document.getElementById("name").value;
    tests.innerHTML = (valueInVar);
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    console.log(valueInVarArray.length);
    let valueInVarArrayLength = valueInVar.length;
    let personPerGroup = valueInVarArrayLength / SliderTall;
    console.log(sliderTall)
}

function Slid() {
    const sliderTall = document.getElementById("sliderTall");
    SliderTall = document.getElementById("GrupeSlider").value;
    var SliderTall = '';
    sliderTall.innerHTML = (SliderTall)

}