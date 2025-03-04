// document.getElementById("calculate").addEventListener("click", function(){
//     const input = document.getElementById("input").value
//     const result = eval(input)
//     document.getElementById("input").value = result


// })

document.getElementById("container").addEventListener("click", function (e) {

    const value = e.target.innerText
    const input = document.getElementById("input").value
    console.log(value)
    console.log(typeof value)
    if (value === "AC") {
        document.getElementById("input").value = ""
        return
    }
    if (value === "DEL") {
        return
    }
    // return 
    if (value === "=") {
        const result = eval(input)
        console.log(result)
        document.getElementById("input").value = result


    }
    else {
        document.getElementById("input").value += value
        
    }

})