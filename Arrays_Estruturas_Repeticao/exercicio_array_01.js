NOTAS = [6, 7, 7];

NOTAS.push(8)
NOTAS.push(9)

mediaFinal = 0

for (let i = 0; i < NOTAS.length; i++){
    mediaFinal += NOTAS[i]
}

console.log(mediaFinal / NOTAS.length)