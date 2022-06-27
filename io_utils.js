import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParmes){
    console.log(mensagem, ...optionalParmes)
}
