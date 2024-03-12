let arr1 = [10,20,30,40,50]

let arr2 = [50,60,70,80,90]

let arr3 = [...arr1,...arr2]

let uniq = (data) => {
    return [...new Set(data)]
}

console.log(arr3);
console.log(uniq(arr3));