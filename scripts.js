function getResult(){
    var sideA=parseFloat(document.getElementById('sideA').value);
    var sideB=parseFloat(document.getElementById('sideB').value);
    var sideC=parseFloat(document.getElementById('sideC').value);
if(sideA===sideB && sideB===sideC){
    alert ("This is an equilateral triangle");
}
else if (sideA===sideB || sideA===sideC || sideB===sideC){
    alert ("This is an isoscle triangle");
}
else if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA){
    alert("Not a definite triangle");
}
else{ 
    alert("This is a scalene triangle");
}
}