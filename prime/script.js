
let prime = () => {
    let value = document.getElementById("input").value;
    let n = true;

    for(let i = 2 ; i < value ; i++){
            if(value % i == 0){
                n = false;
                break;
            }
        
    }
    if(n == true){
        console.log("Number is Prime no....");
    }else{
        console.log("Number is not prime....");
    }
}