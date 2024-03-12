  function gotoForm (){

    document.getElementById("redirect").style.display = "block";

} 

function closetoForm(){

    document.getElementById("redirect").style.display = "none";

}

function addTask(){

    document.getElementById("redirect").style.display = "none";
    let naMe = document.getElementById("naMe").value;
    let taSk = document.getElementById("taSk").value;
    let priority = document.querySelector("#chek").value;
    let dOb = document.getElementById("dOb").value;

    // let data = priority.value;
    //          document.querySelector('.sel').textContent = data;

    let storage = JSON.parse(sessionStorage.getItem("items"));

    if (storage === null) {
        storage = [];
    }

    storage.push({
        name: naMe,
        task: taSk,
        priority: priority,
        date: dOb,


    })
    
    sessionStorage.setItem("items", JSON.stringify(storage));
    console.log(JSON.parse(sessionStorage.getItem("items")));
    // console.log(data);
    let tbody = document.getElementById("Access");

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }


    storage.forEach((item) => {

        let row = document.createElement("tr");



        let r1 = document.createElement("td");
        let r2 = document.createElement("td");
        let r3 = document.createElement("td");
        let r4 = document.createElement("td");

        r1.innerHTML = item.name,
        r2.innerHTML = item.task;
        r3.innerHTML = item.priority;
        r4.innerHTML = item.date;

        row.appendChild(r1);
        row.appendChild(r2);
        row.appendChild(r3);
        row.appendChild(r4);

        tbody.appendChild(row);

    })




}