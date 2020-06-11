function zad1(a,b){
    a  = + document.getElementById('in1').value;
    b  = + document.getElementById('in2').value;
    let c=a*b
  document.getElementById('otvet_1').innerHTML = c;
} 

function zad2(a){
    var a, c;
    a  = + document.getElementById('in21').value;
    if(a%4==0){
        c="Число кратно 4";
    }
    else{
        c="Число не кратно 4";
    }
    document.getElementById('otvet_2').innerHTML = c;
}
function zad3(a){
    var a, c;
    a  = + document.getElementById('in31').value;
    if(a%4==0){
        c="Год высокостный";
    }
    else{
        c="Год не высокостный";
    }
    document.getElementById('otvet_3').innerHTML = c;
}
function zad4(a,b){
    for (let i=a; i<=b; i++){
        console.log(i);
    }
}
let rez=zad4(1,10);

function task5() {
    for (let i = 0; i < 4; i++) {
        let elem = document.createElement('p');
        elem.style.cssText = "display:inline-block; width: 100px; height: 100px; background:blue; margin: 5px; border: 1px solid black;";
        zad5.append(elem);
    }
}
