export const data = {
  rocks: gerarSequenciaNumerica(163, 174).concat([
    26, 27, 44, 62, 80, 98, 119, 101, 116, 25, 8, 83,
  ]),
  chafaris: [],
  dirt: [],
  woots: gerarSequenciaNumerica(39, 41)
    .concat(gerarSequenciaNumerica(46, 53))
    .concat(gerarSequenciaNumerica(64, 71))
    .concat(gerarSequenciaNumerica(127, 144))
    .concat([
      82, 122, 555, 573, 591, 609, 117, 118, 99, 100, 63, 81, 627, 112, 94, 104,
      86, 76, 58, 29, 31, 33, 35, 108, 90, 72, 54, 126
    ]),
  darkWood: gerarSequenciaNumerica(9, 18).concat([
    28, 30, 32, 34, 36, 45, 46, 48, 49, 50, 53, 54, 52, 1, 19, 37, 38, 6, 7, 8,
    24, 42, 43,
  ]),
  grama: [],
  river: gerarSequenciaNumerica(564, 575)
    .concat(gerarSequenciaNumerica(582, 593))
    .concat(gerarSequenciaNumerica(55, 61))
    .concat(gerarSequenciaNumerica(84, 89))
    .concat(gerarSequenciaNumerica(102, 107))
    .concat(gerarSequenciaNumerica(73, 79))
    .concat(gerarSequenciaNumerica(91, 97))
    .concat(gerarSequenciaNumerica(109, 115))
    .concat(gerarSequenciaNumerica(119, 125))
    .concat(gerarSequenciaNumerica(600, 611))
    .concat([]),
  pedraamarela: [],
  pedraverde: [],
  sand: gerarSequenciaNumerica(2, 5)
    .concat(gerarSequenciaNumerica(20, 23))
    .concat([]),
  trees: [15],
  trees2: [13, 17],
  trees3: [],
  trees4: [1, 6],
  arbusto: [11],
  house: [14, 4, 7],
  house2: [],
  house3: [2, 16],
  house4: [10, 5, 18],
  house5: [12, 9, 3],
  house6: [],
  girassol: [],
  coala: [44, 66, 129],
  coelho: [39],
  gato: [52],
  galinha: [8, 90],
  blueFlower: [],
};

function gerarSequenciaNumerica(inicio: number, fim: number): number[] {
  const sequencia: number[] = [];

  for (let i = inicio; i <= fim; i++) {
    sequencia.push(i);
  }

  return sequencia;
}

// function gerarNumerosSe(vezes: number, indicador: number) {
//     const multiplosDe18: number[] = [];

//     for (let i = 1; i <= vezes; i++) {
//         multiplosDe18.push(indicador * i);
//     }

//     return multiplosDe18;
// }
