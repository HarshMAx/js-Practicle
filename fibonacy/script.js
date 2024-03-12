

let fibo = () => {
    let a = 0;
    let b = 1;
    let res ;
    let input = document.getElementById("input").value 

    for(let i = 2; i <= input; i++){

        res = a + b;
        a = b;
        b = res;
    }
        document.getElementById("output").innerHTML = res;
        // console.log(res)
}