let users = []
let formCadastro = document.getElementById('formCadastro')
let senhaValidez = document.getElementById('senhaValidez')
let anuncioCadastro = document.getElementById('anuncioCadastro')

let login=document.getElementById('nomeUsuario')
let senhaUsuario=document.getElementById('senhaUsuario')

let nome = document.getElementById('nome')
let senha1 = document.getElementById('senha1')
let senha2 = document.getElementById('senha2')
let email = document.getElementById('email')
let dataNascimento = document.getElementById('dataNascimento')

let idade = 0

function cadastramento(){
    formCadastro.style.display = "inline";
}
function validarSenha(){
    if(senha1.value == senha2.value){
        senhaValidez.style.display = "block"
        senhaValidez.style.color = "green"
        senhaValidez.innerHTML = "As senhas combinam =) <br> Termine seu cadastro"
    }else{
        senhaValidez.style.display = "block"
        senhaValidez.style.color = "red"
        senhaValidez.innerHTML = "As senhas não combinam =( <br> Confirme sua senha"
    }
}

function confirmarIdade(){
    const dataDeNascimento = new Date(dataNascimento.value)
    const hoje = new Date()

    idade = Math.floor((hoje-dataDeNascimento) / (365.25 * 24 * 60 * 60 * 1000))
    console.log(idade)
}

function cadastrar(){
    console.log("cadastrar");
    if(idade >= 18){
        users.push({nome: nome.value, senha: senha2.value, email: email.value, idade: idade})
        localStorage.setItem("users", JSON.stringify(users))
        console.log(localStorage.getItem('users'))
        console.log("Cadastro feito =)")
        anuncioCadastro.style.color = "green";
        anuncioCadastro.innerHTML = "Parabéns por se cadastrar! <br> Cadastro realizado =)"
        formCadastro.style.display = "none";
    }else{
        anuncioCadastro.style.color = "red";
        anuncioCadastro.innerHTML = "Menores de Idade não podem se cadastrar";
    }
}

function buscarNome(usuarios){
    return usuarios.nome === login.value;
}
function buscarSenha(usuarios){
    return usuarios.senha === senhaUsuario.value;
}
function buscarEmail(usuarios){
    return usuarios.email === login.value;
}

function confirmar(){
    let usuarios = JSON.parse(localStorage.getItem('users'))
    console.log (usuarios)

    if(usuarios.find(buscarNome) && usuarios.find(buscarSenha)){
        alert("Você está logado")
    }else if(usuarios.find(buscarEmail) && usuarios.find(buscarSenha)){
        alert("Você está logado")
    }else{
        alert("Cadastre-se por favor")
    }
}
