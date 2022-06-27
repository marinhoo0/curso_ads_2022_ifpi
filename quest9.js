import {input} from './io_utils.js'

function main(){
    let num_prova = 1
    let qtd_nadadores = 1

    let contador_pts_a = 0
    let contador_pts_b = 0

    while (num_prova!== 0 && qtd_nadadores!==0){
        num_prova = Number(input('Numero da prova : '))
        qtd_nadadores = Number (input('Quantos nadadores: '))
        let contador_qtd_nadadores = 0

        while (contador_qtd_nadadores < qtd_nadadores ){
            let nome = input('Digite o nome do nadador: ')
            let classificacao = Number(input('Qual a posição:'))
            let tempo = input('Digite o tempo: ')
            let clube = input('Qual o clube?(a ou b) ')
            let pontuacao = tabela_pts(classificacao)
            
            if (clube === 'a'){
                contador_pts_a += pontuacao
            }else{
                contador_pts_b += pontuacao
            }
            contador_qtd_nadadores++
        }
    }

    if (contador_pts_a > contador_pts_b){
        console.log(`A equipe A venceu com ${contador_pts_a} pontos`)
    }else if (contador_pts_b > contador_pts_a){
        console.log(`A equipe B venceu com ${contador_pts_b} pontos`)
    }else console.log(`As duas equipes empataram com ${contador_pts_a} pontos`)
}
function tabela_pts(valor){
    if (valor===1){
        return 9
    }else if(valor === 2){
        return 6
    }else if(valor===3){
        return 4
    }else if(valor===4){
        return 3
    }else{
        return 0
    }
}
main()
