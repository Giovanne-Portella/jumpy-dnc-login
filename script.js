const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const cpf = document.getElementById('cpf')
const password = document.getElementById('password')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const cpfValue = cpf.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha este campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username, 'Ok!')
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha este campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email, 'Ok!')
    }
   
    if(phoneValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(phone, 'Preencha este campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(phone, 'Ok!')
    }

    if(cpfValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cpf, 'Preencha este campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cpf, 'Ok!')
    }

    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha este campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'A senha deve conter mais que 8 caracteres')
    }  else if(passwordValue.lenght > 7){
        setErrorFor(password)
    }else {
        // adicionar a classe de sucesso
        setSuccessFor(password, 'Cadastro feito com sucesso!'
        )
    } 

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input, message) {
    const formControler = input.parentElement;
    const smallSuccess = formControler.querySelector('small')

    smallSuccess.innerText = message 

    formControler.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
