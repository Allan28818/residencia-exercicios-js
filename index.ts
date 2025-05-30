// src/index.ts
function calcularMedia(notas: number[]): number {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

const notasAluno: number[] = [7.5, 8.0, 6.5, 9.0];
const media: number = calcularMedia(notasAluno);

console.log(`A média das notas ${notasAluno.join(', ')} é: ${media.toFixed(2)}`);