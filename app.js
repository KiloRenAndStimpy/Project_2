// window.onload = function(){
//   // genCircle();
//   // genTriangle();
// }
// 
// var OneGenFilled = false;
// var TwoGenFilled = false;
// var ThreeGenFilled = false;
// var FourGenFilled = false;
// var currentGen = '.OneGen';

var genShape = function(shape){

  if(OneGenFilled===false){
    OneGenFilled = true;
    currentGen = '.OneGen';
  }
  else if(OneGenFilled===true && TwoGenFilled===false){
    TwoGenFilled = true;
    currentGen = '.TwoGen';
  }
  else if(TwoGenFilled===true && ThreeGenFilled===false){
    ThreeGenFilled = true;
    currentGen = '.ThreeGen';
  }
  else if(ThreeGenFilled===true && FourGenFilled===false){
    FourGenFilled = true;
    currentGen = '.FourGen';
  }

  if (shape === "circle") {
    genCircle(currentGen);
  }
  if (shape === "triangle") {
    genTriangle(currentGen);
  }
  if(shape === "square") {
    genSquare(currentGen);
  }
  if(shape === "triCircle"){
    genTriCir(currentGen);
  }
  if(shape === "triTriangle"){
    genTriTri(currentGen);
  }
  if(shape === "triSquare"){
    genTriSquare(currentGen);
  }
  if(shape === "star"){
    genStar(currentGen);
  }
  if(shape === "diamond"){
    genDiamond(currentGen);
  }
  if(shape === "triDiamond"){
    genTriDiamond(currentGen);
  }
  if(shape === "triLine"){
    genTriLine(currentGen);
  }
  if(shape === "squiggleHor"){
    genSquiggleHor(currentGen);
  }
  if(shape === "squiggleVer"){
    genSquiggleVer(currentGen);
  }
  if(shape === "squiggleDia"){
    genSquiggleDia(currentGen);
  }
  if(shape === "linesHor"){
    genLinesHor(currentGen);
  }
  if(shape === "linesVer"){
    genLinesVer(currentGen);
  }
}

var genCircle = function(currentGen){
  $(currentGen).attr('src', "svg/01_Circle.svg")
}

var genTriangle = function(currentGen){
  $(currentGen).attr('src', "svg/02_Triangle.svg")
}

var genSquare = function(currentGen){
  $(currentGen).attr('src', "svg/03_Square.svg")
}

var genTriCir = function(currentGen){
  $(currentGen).attr('src', "svg/04_TriCircle.svg")
}

var genTriTri = function(currentGen){
  $(currentGen).attr('src', "svg/05_TriTriangle.svg")
}

var genTriSquare = function(currentGen){
  $(currentGen).attr('src', "svg/06_TriSquare.svg")
}

var genStar = function(currentGen){
  $(currentGen).attr('src', "svg/07_Star.svg")
}

var genDiamond = function(currentGen){
  $(currentGen).attr('src', "svg/08_Diamond.svg")
}

var genTriDiamond = function(currentGen){
  $(currentGen).attr('src', "svg/09_TriDiamond.svg")
}

var genTriLine = function(currentGen){
  $(currentGen).attr('src', "svg/10_TriLine.svg")
}

var genSquiggleHor = function(currentGen){
  $(currentGen).attr('src', "svg/11_SquigglyH.svg")
}

var genSquiggleVer = function(currentGen){
  $(currentGen).attr('src', "svg/12_SquigglyV.svg")
}

var genSquiggleDia = function(currentGen){
  $(currentGen).attr('src', "svg/13_SquiggleD.svg")
}

var genLinesHor = function(currentGen){
  $(currentGen).attr('src', "svg/14_LinesHor.svg")
}

var genLinesVer = function(currentGen){
  $(currentGen).attr('src', "svg/15_LinesVer.svg")
}



// // This changes everything
// "use strict";
//
// // retrieve the element
// var element = document.getElementById("burst1");
//
// // reset the transition by...
// element.addEventListener("click", function(e){
//   e.preventDefault;
//
//   // -> removing the class
//   element.classList.remove("foreverBurst");
//
//   // -> triggering reflow /* The actual magic */
//   // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//   // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
//   // element.offsetWidth = element.offsetWidth;
//
//   void element.offsetWidth;
//
//   // -> and re-adding the class
//   element.classList.add("foreverBurst");
// }, false);
