import {input} from '../io_utils.js'

function main(){
    let numero = Number (input('Digite um numero: '))

    while (numero !== 0){
        mostrar_divisores(numero)
        numero = Number (input('Digite um numero: '))

    }

}
function mostrar_divisores(valor){
    let divisores = valor
    while (divisores > 0){
        if (valor % divisores === 0){
            console.log(divisores)
        }
        divisores --
    }
}
main()