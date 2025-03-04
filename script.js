document.getElementById("calculate").addEventListener("click", function(){
    const input = document.getElementById("input").value
    const result = eval(input)
    document.getElementById("input").value = result
    console.log(result)
})