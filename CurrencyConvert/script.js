let Change = () => {

    let indian = document.getElementById("indian").value
    let usdoller = document.getElementById("usdoller").value

     usdoller = usdoller * 82.78;
      document.getElementById("indian").value = usdoller

}

let iChange = () => {

    let indian = document.getElementById("indian").value
    let usdoller = document.getElementById("usdoller").value

     indian =  indian / 82.78;
      document.getElementById("usdoller").value = indian

}
