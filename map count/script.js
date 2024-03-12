let arr = [];

let Calc = () => {

    let number = document.getElementById("input").value

    arr.push(number)
    //console.log(arr);

    let multival = arr.map((element) => {
        return element * 2});

    document.getElementById("output").innerHTML = JSON.stringify(`<h3>Normal Array : ${arr}</h3><br>`)
    console.log(multival);
    document.getElementById("mul").innerHTML = JSON.stringify(`<h3>Mapped Array : ${multival}</h3><br>`)
    console.log(arr);
    

}