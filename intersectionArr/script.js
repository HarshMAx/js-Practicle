let arr1 = [10,20,30,40,50,60,80];
let arr2 = [20,30,40,50,80,90];
let arr3 = [];
let inter = () => {

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                arr3.push(arr2[j])

                console.log(arr3)

                document.getElementById("output").innerHTML = JSON.stringify(arr3)
            }
        }
    }
}
