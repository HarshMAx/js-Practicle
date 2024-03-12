let arr= []
let dup = []

let Dupli = () => {

    let number = document.getElementById("input").value

    arr.push(number);
    console.log(arr);

    let removedupli = (data) => {
        return [...new Set(data)]
    }

    console.log(arr);
    document.getElementById("output").innerHTML = JSON.stringify(` Original Array${arr}<br>`)
    console.log(removedupli(arr));
    document.getElementById("dupli").innerHTML = JSON.stringify(`Non Duplicate Array${removedupli(arr)}<br>`)


}