function generatePassword(size){
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 

    let password = ""

    for(let i=0, n = charSet.length;i<size; i++){
        password += charSet.charAt(Math.floor(Math.random() * n))
    }
    console.log(password)
}

const functions = { 
    generatePassword : generatePassword,
}

export default functions;