import {input} from '../io_utils.js'

function main(){
    const[numero1, numero2] = input('Digite dois numeros: ').split(' ').map(Number)
    let mmc = 1

    while (!(multiplos( mmc,numero1) && multiplos(mmc,numero2))){
        mmc ++
    }
    console.log (` O MMC é ${mmc}`)
}
function multiplos(valor1, valor2){
    if(valor1 % valor2 === 0){
        return true
    }else{
        return false
    }
}
main()
