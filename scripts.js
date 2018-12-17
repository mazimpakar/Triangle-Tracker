function getResult(){
    var sideA=parseFloat(document.getElementById('sideA').value);
    var sideB=parseFloat(document.getElementById('sideB').value);
    var sideC=parseFloat(document.getElementById('sideC').value);
if(sideA===sideB && sideB===sideC){
    alert ("This is an equilateral triangle");
    window.location.href="equilateral.html";
}
else if (sideA===sideB || sideA===sideC || sideB===sideC){
    alert ("This is an iscocele triangle");
    window.location.href="iscocele.html";

}
else if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA){
    alert("Not a definite triangle");
    window.location.href="not triangle.html";

}
else{ 
     alert("This is a scalene triangle");
     window.location.href="scalene.html";

}
}