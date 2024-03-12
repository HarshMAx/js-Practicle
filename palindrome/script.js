



let Palindrom = () => {

    let palindrome = document.getElementById("input").value

    let pal = palindrome.split("").reverse("").join("");

    if(pal == palindrome){
        console.log("string is palindrom");
        document.getElementById("output").innerHTML = "string is palindrom"
    }else{
        console.log("string is not");
        document.getElementById("output").innerHTML = "string is not palindrom"

    }

}