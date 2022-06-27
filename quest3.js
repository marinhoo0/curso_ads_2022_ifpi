import {input} from '../io_utils.js'

function main(){
    const[numero1, numero2] = input('Digite dois numeros: ').split(' ').map(Number)
    let mdc = 1

    if(e_divisor(mdc, numero1) && e_divisor(mdc,numero2)){
        while( e_divisor(mdc,numero1) && e_divisor(mdc,numero2)){
            mdc++
        }
    }
    console.log (`O MDC é ${mdc}`)
   
}
function e_divisor (divisor, dividendo){
    if(dividendo % divisor === 0){
        return true
    }else{
        return false
    }
}
main()