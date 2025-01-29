const generatePasswordButton  = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

const openCloseGereratorButton = document.querySelector('#open-generate-password')
const gereratePasswordContainer = document.querySelector('#gererate-options')
const lengthInput = document.querySelector('#length')
const lettersInput = document.querySelector('#latters')
const numbersInput = document.querySelector('#numbers')
const SymbolsInput = document.querySelector('#symbol')
const copyPassword = document.querySelector('#copy-password')

// função
const getLatterLowerCase = () => {
  return( String.fromCharCode(Math.floor(Math.random() * 26) + 97))
} 

const getLatterUpperCase = () => {
    return( String.fromCharCode(Math.floor(Math.random() * 26) + 65))
} 

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
} 

const getSymbol = () => {
    const symbols = "!@#$%¨&*()_+<>Ç^``{}:"
    return  symbols[Math.floor(Math.random() * symbols.length)]
} 

const generatePassword = (getLatterLowerCase , getLatterUpperCase , getNumber , getSymbol) => {
    let password = ""

    const passwordLength = +lengthInput.value

    const generators = []

    if(lettersInput.checked) {
        generators.push(getLatterLowerCase ,getLatterUpperCase)
    }

    if(numbersInput.checked) {
        generators.push(getNumber)
    }

    if(SymbolsInput.checked) {
        generators.push(getSymbol)
    }

    if(generators.length === 0) {
        alert("Tem que ter pelo menos uma opção marcada")
      return
    }

    for(let i = 0; i < passwordLength ; i += generators.length) {
        generators.forEach(() => {
            // sortea uma qual função vai ser colocada dentro da variavel randomValue
            const randomValue = generators[Math.floor(Math.random() * generators.length)] 
            password += randomValue()
        })
    }
    password =  password.slice(0, passwordLength)

    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("h4").innerText = password

}



// eventos 

generatePasswordButton.addEventListener("click" , () => {
    // generatePasswordElement.style.diplay = "block"

    generatePassword(getLatterLowerCase , getLatterUpperCase, getNumber, getSymbol)
})

openCloseGereratorButton.addEventListener("click" , () => {
    gereratePasswordContainer.classList.toggle("hide")
})

copyPassword.addEventListener("click" , (e) => {
    e.preventDefault()

    const password = generatePasswordElement.querySelector("h4").innerText
    // copiar para a area de trabalho
    navigator.clipboard.writeText(password).then(() => {
        copyPassword.innerText = "senha copiada com sucesso!"
    })

    setTimeout(() => {
        copyPassword.innerText = "Copiar senha"
    }, 1000)
    console.log(password)
})