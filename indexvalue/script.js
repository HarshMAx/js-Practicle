let fruits = ['banana','apple','grapes','watermalon','gauvava'];

let Index = () => {

    let number = document.getElementById("input").value

    document.getElementById("output").innerHTML = fruits.indexOf(number);

}
