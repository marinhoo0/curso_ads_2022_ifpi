import {input} from './io_utils.js'

function main(){
    const x = Number(input('Digite um valor: '))
    let num_anterior = Number(input('Digite um valor: '))
    let num_atual = Number(input('Digite um valor: '))
    let soma = num_anterior + num_atual

    while (soma !== x){
        num_anterior = num_atual
        num_atual = Number(input('Digite outro valor: '))
    }
    console.log('fiiiiim')
}
main()
