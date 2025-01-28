const generatePasswordButton  = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");


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

    const passwordLength = 10

    const generators = [
        getLatterLowerCase,
        getLatterUpperCase,
        getNumber,
        getSymbol
    ]

    for(let i = 0; i < passwordLength ; i += 4) {
        generators.forEach(() => {
            // sortea uma qual função vai ser colocada dentro da variavel randomValue
            const randomValue = generators[Math.floor(Math.random() * generators.length)] 
            password += randomValue()
        })
    }
    password =  password.slice(0, passwordLength)
    console.log(password.length)
}



// eventos 

generatePasswordButton.addEventListener("click" , () => {
    generatePassword(getLatterLowerCase , getLatterUpperCase, getNumber, getSymbol)
})