console.log("Hallo, console?");

/*Stap 1: We nemen elk object vast*/
let landEen = document.getElementsByClassName("land1")[0];
let landTwee = document.getElementsByClassName("land2")[0];
let landDrie = document.getElementsByClassName("land3")[0];
let landVier = document.getElementsByClassName("land4")[0];
let landVijf = document.getElementsByClassName("land5")[0];
let landZes = document.getElementsByClassName("land6")[0];
let ruisObject = document.getElementsByClassName("ruis")[0];
let geluidEen = document.getElementsByTagName("audio")[0];
let geluidTwee = document.getElementsByTagName("audio")[1];
let buttonEen = document.getElementsByTagName("button")[0];
let titel = document.getElementsByTagName("h1")[0];
let onderTitel = document.getElementsByTagName("h2")[0];
let infoKader = document.getElementsByClassName("infokader")[0];

let geluidDrie = document.getElementsByTagName("audio")[2];
let geluidVier = document.getElementsByTagName("audio")[3];
let geluidVijf = document.getElementsByTagName("audio")[4];
let geluidZes = document.getElementsByTagName("audio")[5];
let geluidZeven = document.getElementsByTagName("audio")[6];
let geluidAcht = document.getElementsByTagName("audio")[7];

landEen.classList.add("onzichtbaar");
landTwee.classList.add("onzichtbaar");
landDrie.classList.add("onzichtbaar");
landVier.classList.add("onzichtbaar");
landVijf.classList.add("onzichtbaar");
landZes.classList.add("onzichtbaar");
ruisObject.classList.add("onzichtbaar");
geluidEen.classList.add("onzichtbaar");
geluidTwee.classList.add("onzichtbaar");
geluidDrie.classList.add("onzichtbaar");
geluidVier.classList.add("onzichtbaar");
geluidVijf.classList.add("onzichtbaar");
geluidZes.classList.add("onzichtbaar");
geluidZeven.classList.add("onzichtbaar");
geluidAcht.classList.add("onzichtbaar");
infoKader.classList.add("onzichtbaar");

/*Stap 2: We zetten op elk een eventlistener*/
ruisObject.addEventListener("mouseover", speelGeluid);
ruisObject.addEventListener("mouseover", toonInfo);
landEen.addEventListener("mouseover", speelGeluid);
landEen.addEventListener("mouseover", toonInfo);
landTwee.addEventListener("mouseover", speelGeluid);
landTwee.addEventListener("mouseover", toonInfo);
landDrie.addEventListener("mouseover", speelGeluid);
landDrie.addEventListener("mouseover", toonInfo);
landVier.addEventListener("mouseover", speelGeluid);
landVier.addEventListener("mouseover", toonInfo);
landVijf.addEventListener("mouseover", speelGeluid);
landVijf.addEventListener("mouseover", toonInfo);
landZes.addEventListener("mouseover", speelGeluid);
landZes.addEventListener("mouseover", toonInfo);
buttonEen.addEventListener("click", startOp);

/*Stap 3: We laten de gebruiker eerst interactie hebben en starten zo de loops op*/
function startOp(){
  geluidEen.setAttribute("src", "audio/honger.mp3");
  geluidTwee.setAttribute("src", "audio/praten.mp3");
  geluidDrie.setAttribute("src", "audio/tsjaad.mp3");
  geluidVier.setAttribute("src", "audio/afghanistan.mp3");
  geluidVijf.setAttribute("src", "audio/bolivia.mp3");
  geluidZes.setAttribute("src", "audio/mongolië.mp3");
  geluidZeven.setAttribute("src", "audio/oekraïne.mp3");
  geluidAcht.setAttribute("src", "audio/belgië.mp3");
  console.log("Buttonclick");
  buttonEen.classList.add("actief");
  buttonEen.classList.add("onzichtbaar");
  landEen.classList.remove("onzichtbaar");
  landTwee.classList.remove("onzichtbaar");
  landDrie.classList.remove("onzichtbaar");
  landVier.classList.remove("onzichtbaar");
  landVijf.classList.remove("onzichtbaar");
  landZes.classList.remove("onzichtbaar");
  ruisObject.classList.remove("onzichtbaar");
  titel.classList.add("onzichtbaar");
  onderTitel.classList.add("onzichtbaar");
  infoKader.classList.remove("onzichtbaar");
}

/*Stap 4: We schrijven de functie die van audio switcht als er over een object gehoverd wordt*/
function speelGeluid(){
if (this === ruisObject){
    geluidTwee.volume="1.0";
    geluidEen.volume="0.0";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.0";
    console.log("Ruis");
  } else if (this === landEen){
    geluidTwee.volume="0.0";
    geluidEen.volume="1.0";
    geluidDrie.volume="0.4";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.0";
    console.log("Land1");
  } else if (this === landTwee) {
    geluidTwee.volume="0.0";
    geluidEen.volume="0.8";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.3";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.0";
    console.log("Land2");
  } else if (this === landDrie) {
    geluidTwee.volume="0.0";
    geluidEen.volume="0.6";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.2";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.0";
    console.log("Land3");
  } else if (this === landVier) {
    geluidTwee.volume="0.0";
    geluidEen.volume="0.6";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.4";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.0";
    console.log("Land4");
  } else if (this === landVijf) {
    geluidTwee.volume="0.0";
    geluidEen.volume="0.4";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.4";
    geluidAcht.volume="0.0";
    console.log("Land5");
  } else if (this === landZes) {
    geluidTwee.volume="0.0";
    geluidEen.volume="0.2";
    geluidDrie.volume="0.0";
    geluidVier.volume="0.0";
    geluidVijf.volume="0.0";
    geluidZes.volume="0.0";
    geluidZeven.volume="0.0";
    geluidAcht.volume="0.4";
    console.log("Land6");
  }
}

let infoTitel = document.getElementsByClassName("infotitel")[0];
let infoOndertitel = document.getElementsByClassName("infoondertitel")[0];
let landImg = document.getElementsByTagName("img")[0];
/*Stap 5: We schrijven de functie die de juiste info toont als er over een land gehoverd wordt*/
function toonInfo(){
  console.log("toonInfo werkt!");
  if (this === ruisObject){
    infoTitel.innerHTML = "Landen met lage hongersnood";
    infoOndertitel.innerHTML = "< 2,5%";
    landImg.setAttribute("src", "#");
  } else if (this === landTwee) {
    infoTitel.innerHTML = "Afghanistan";
    infoOndertitel.innerHTML = "25 - 34,9%";
    landImg.setAttribute("src", "PNG/Afghanistan.png");
  } else if (this === landDrie) {
    infoTitel.innerHTML = "Bolivia";
    infoOndertitel.innerHTML = "15 - 24,9%";
    landImg.setAttribute("src", "PNG/Bolivia.png");
  } else if (this === landVier) {
    infoTitel.innerHTML = "Mongolië";
    infoOndertitel.innerHTML = "5 - 14,9%";
    landImg.setAttribute("src", "PNG/Mongolië.png");
  } else if (this === landVijf) {
    infoTitel.innerHTML = "Oekraïne";
    infoOndertitel.innerHTML = "< 5%";
    landImg.setAttribute("src", "PNG/Oekraïne.png");
  } else if (this === landZes) {
    infoTitel.innerHTML = "België";
    infoOndertitel.innerHTML = "< 2,5%";
    landImg.setAttribute("src", "PNG/België.png");
  } else if (this === landEen){
    infoTitel.innerHTML = "Tsjaad";
    infoOndertitel.innerHTML = "> 35%";
    landImg.setAttribute("src", "PNG/Tsjaad.png");
  }
}
