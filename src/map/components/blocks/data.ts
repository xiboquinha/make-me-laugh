export const data = {
    rocks: gerarSequenciaNumerica(83, 89)
        .concat(gerarSequenciaNumerica(163, 174))
        .concat([26, 44, 62, 80, 98])
    ,
    chafaris: [49],
    dirt: [],
    woots: gerarSequenciaNumerica(28, 35)
        .concat(gerarSequenciaNumerica(46, 53))
        .concat(gerarSequenciaNumerica(64, 71))
        .concat([82, 555, 573, 591, 609, 27, 45, 63, 81, 627]),
    grama: [],
    river: gerarSequenciaNumerica(564, 575)
        .concat(gerarSequenciaNumerica(582, 593))
        .concat(gerarSequenciaNumerica(600, 611)),
    pedraamarela: [],
    pedraverde: [],
    sand: [],
    trees: [1, 18],
    arbusto: [16,],
    trees2: [],
    house: [17],
    house2: [4],
    house3: [2, 15,],
    house4: [13],
    house5: [12],
    house6: [14],

}

function gerarSequenciaNumerica(inicio: number, fim: number): number[] {
    const sequencia: number[] = [];

    for (let i = inicio; i <= fim; i++) {
        sequencia.push(i);
    }

    return sequencia;
}

function gerarNumerosSe(vezes: number, indicador: number) {
    const multiplosDe18: number[] = [];

    for (let i = 1; i <= vezes; i++) {
        multiplosDe18.push(indicador * i);
    }

    return multiplosDe18;
}