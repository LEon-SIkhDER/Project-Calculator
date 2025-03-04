document.getElementById("container").addEventListener("click", function (e) {
    const value = e.target.innerText
    const input = document.getElementById("input").value
    if(e.target.classList.contains("container")){
        return
    }
    if (value === "AC") {
        document.getElementById("input").value = ""
        return
    }
    if (value === "DEL") {
        document.getElementById("input").value = input.slice(0, -1)
        console.log(input)
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