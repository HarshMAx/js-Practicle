
let arr = [];

let Matching = () => {

    let fill = document.getElementById("input").value

    
    let add = arr.push(fill);
    console.log(arr);

    let sor = arr.sort(function (a,b){
            return a - b;})

     let largee = sor[sor.length - 1];
     let smalll = sor[0];

    document.getElementById("output").innerHTML = JSON.stringify(arr)
    document.getElementById("large").innerHTML = JSON.stringify(largee)
    document.getElementById("small").innerHTML = JSON.stringify(smalll)

    

}

