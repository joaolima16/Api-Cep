function validar(){

const cep = document.querySelector("#inputcep").value;
const url = `https://viacep.com.br/ws/${cep}/json/`
const logra = document.querySelector("#inputlogradouro")
const uf = document.querySelector("#inputUF")
const bairro = document.querySelector("#inputbairro")
const local = document.querySelector("#ceplocal")


fetch(url)
    .then((Response)=>Response.json())

    .then((dados)=>{
        logra.value = `${dados.logradouro}`
        bairro.value = `${dados.bairro}`
        local.value  = `${dados.localidade}`
        uf.value = `${dados.uf}`
    })

.catch((err)=>{
    window.alert("cpf invalido ou não existe")
})

}