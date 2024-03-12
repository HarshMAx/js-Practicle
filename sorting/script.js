
let array = [];

let sorted = () => {
    let numbers = document.getElementById("input").value;

    array.push(numbers);
    console.log(array);
     let aSort = array.sort(function (a,b){
            return 1-2
            //here i can use multiple option in like a or b and 1 or 2 like in real life values ok....
     })
     
//      let dSort = array.sort(function (a,b){
//         return b-a
//  })
document.getElementById("output").innerHTML = JSON.stringify(aSort)
   
 }
  
