function budgetTracker(){
    // const balance = document.getElementById('balance').value;
    // const income = document.getElementById('money-plus').value;
    // const expense = document.getElementById('money-minus').value;
    const text = document.getElementById("text").value;
    const amount = document.getElementById("amount").value;
    
    let transections = JSON.parse(sessionStorage.getItem("items"));
    if(transections == null){
        transections = [];
    }
    let type = "";
    if(amount >= 0){
        type = "i";
    }else{
        type = "e";
    }
    transections.push({transection: text, amount: amount, type: type});
    sessionStorage.setItem("items",JSON.stringify(transections));
    console.log(JSON.parse(sessionStorage.getItem("items")));
    
    let sum = 0;
    transections.forEach((x) =>{
        sum +=parseInt(x.amount);
    });
    
    document.getElementById("balance").innerHTML = sum;
    
    let history = document.createElement("li");
    
    let dta = document.createTextNode(text+ " "+amount);
    
    history.appendChild(dta);
    document.getElementById("list").appendChild(history);
    let money_p = 0;
    let money_e = 0;
    transections.forEach((x) =>{
        if(x.type === "i"){
            money_p += parseInt(x.amount);
        }else{
            money_e += parseInt(x.amount);
        }
    });

    document.getElementById("money-plus").innerHTML = `income <br>${money_p}` ;
    document.getElementById("money-minus").innerHTML = `expense <br>${money_e}`;
    }
    
    