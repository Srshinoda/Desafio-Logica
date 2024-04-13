//Declarar variaveis
let nomeHeroi = "Matheus"
let xp = 500
let level = ""

//Mensagem Inicial 
console.log("Seja bem vindo " + nomeHeroi + ", essa será sua primeira aventura!")
console.log ("                       Vamos começar!!!")

// inicio do codigo
for (i=1; i<12; i++) 
{
        if(xp <= 1000){
          lv = "Ferro"
        } else if (xp >= 1001 && xp <= 2000){
          lv = "Bronze"
        } else if (xp >= 2001 && xp <= 5000){
          lv = "Prata"
        } else if (xp >= 5001 && xp <= 7000 ) {
          lv = "Ouro"
        } else if (xp >= 7001 && xp <= 8000 ){
          lv = "Platina"
        } else if (xp >= 8001 && xp <= 9000 ){
          lv = "Diamante"
        } else if (xp >= 9001 && xp <= 10000 ){
          lv = "Imortal" 
        } else if (xp >= 10001) {
            lv = "Radiante"
        }
    
        xp += 1050
        console.log("Parabéns " + nomeHeroi + " Você Ganhou Uma Partida. Sua Experiência agora é:" + xp)
        console.log("Atualmente seu nível é de: " + lv)
    }console.log("O Herói de nome " + nomeHeroi + " está no nível: " + lv + "! E está com: " + xp + " pontos de experiência.")