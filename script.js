let randomNumber1= Math.floor(Math.random()*12)+1;
let image1="img/girl" + randomNumber1 + ".jpg";

 document.querySelectorAll("img")[0].setAttribute("src", image1);

 let randomNumber2= Math.floor(Math.random()*9)+1;
var image2="img/girl" + randomNumber2 + ".jpg";
 document.querySelectorAll("img")[1].setAttribute("src", image2);
 

 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Frist girl is work of beauty";
 }else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Scond one is work of beauty";
 }else {
    document.querySelector("h1").innerHTML= "she belong to hare";
 }