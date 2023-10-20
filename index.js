function genBtn() {
    const tests = document.getElementById("output");
    var valueInVar = '';
    valueInVar = document.getElementById("name").value;

    tests.innerHTML = (valueInVar);
    let valueInVarArray = valueInVar.split("\n");
    console.log(valueInVarArray);
    console.log(valueInVarArray[2]);
}