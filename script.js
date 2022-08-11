const amount = document.querySelector("#amount")
const basePair = document.querySelector("#base")
const targetPair = document.querySelector("#target")
const convertButton = document.querySelector("#convert")
const equals = document.querySelector("#equals")


const convert = async (base,target,amount) =>{



    const request = await fetch(`https://v6.exchangerate-api.com/v6/eb7ac863741dbb33b8f05b43/pair/${base}/${target}/${amount}`)
    return request.json()

}



convertButton.addEventListener("click",()=>{


    const fromCurrency = basePair.options[basePair.selectedIndex].value
    const toCurrency = targetPair.options[targetPair.selectedIndex].value
    const fromAmount = Number(amount.value)

    convert(fromCurrency,toCurrency,fromAmount)
    .then(data => {updateUI(data)})
})

const updateUI = (data) =>{
    console.log(data)
    equals.value = data.conversion_result
    
}
