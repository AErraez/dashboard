runScripts= () => {
    let chart_bars=document.getElementById("chart-bars")
    console.log(chart_bars)
    let icons=document.getElementsByTagName("i")
    console.log(icons)
    let  cards=document.getElementsByClassName("card")
    console.log(cards)

}

modifytext= () => {
    let listOfP=document.getElementsByTagName("p")
    let elementP=listOfP[3]
    elementP.innerHTML= "Dinero Actual"
    let listofH4 = document.getElementsByTagName("h4")
    let elementH4= listofH4[0]
    elementH4.innerHTML="$301K"
}

modifytext()
runScripts()
