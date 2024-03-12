let arr = [];
let oarr = [];
let earr = [];

function Matching(){

    let values = document.getElementById("input").value

    arr.push(values);
    console.log(arr);

    if( values % 2 == 0){
        earr.push(values);
    }else{
        oarr.push(values);
    }

    document.getElementById("output").innerHTML = JSON.stringify(`<h1>Aray : ${arr}</h1><br>`)
    document.getElementById("odd").innerHTML = JSON.stringify(`<h1>Odd Array :${oarr}</h1><br>`)
    document.getElementById("even").innerHTML = JSON.stringify(`<h1>Even Array : ${earr}</h1>`)
    
}