import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Digite um valor: '))
    let outro_valor = 0
    while (outro_valor !== numero){
        outro_valor = Number(input('Digite outro valor: '))
    }
}
main()