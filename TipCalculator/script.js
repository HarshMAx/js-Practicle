let Calc = () => {

    let amt =parseInt(document.getElementById("amount").value) 
    let tip = parseInt(document.getElementById("tip").value)

      tip = amt * tip / 100;
    let gst = amt * 18 / 100;
    let total = amt + tip + gst;
    console.log(amt);
    console.log(tip);
    console.log(gst);
    console.log(total);

    document.getElementById("amt").innerHTML = amt ;
    document.getElementById("TIP").innerHTML = tip ;
    document.getElementById("Gst").innerHTML = gst ;
    document.getElementById("Total").innerHTML = total ;

    


}