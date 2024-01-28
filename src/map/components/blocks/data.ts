export const data = {
  rocks: gerarSequenciaNumerica(163, 174).concat([
    26, 27, 44, 62, 80, 98, 119, 101, 116, 25, 8, 83,
  ]),
  chafaris: [],
  dirt: [],
  woots: gerarSequenciaNumerica(39, 41)
    .concat(gerarSequenciaNumerica(46, 53))
    .concat(gerarSequenciaNumerica(64, 71))
    .concat(gerarSequenciaNumerica(127, 142))
    .concat([
      82, 122, 555, 573, 591, 609, 117, 118, 99, 100, 45, 63, 81, 627, 112, 94,
      104, 86, 76, 58, 28, 30, 32, 34,
    ]),
  darkWood: gerarSequenciaNumerica(10, 18),
  grama: [],
  river: gerarSequenciaNumerica(564, 575)
    .concat(gerarSequenciaNumerica(582, 593))
    .concat(gerarSequenciaNumerica(55, 61))
    .concat(gerarSequenciaNumerica(84, 89))
    .concat(gerarSequenciaNumerica(102, 107))
    .concat(gerarSequenciaNumerica(73, 79))
    .concat(gerarSequenciaNumerica(91, 97))
    .concat(gerarSequenciaNumerica(109, 115))
    .concat(gerarSequenciaNumerica(119, 126))
    .concat(gerarSequenciaNumerica(600, 611))
    .concat([143, 144]),
  pedraamarela: [],
  pedraverde: [],
  sand: gerarSequenciaNumerica(1, 7)
    .concat(gerarSequenciaNumerica(19, 24))
    .concat([37, 38, 42, 43, 31, 33, 35, 36, 54, 72, 108, 90, 29]),
  trees: [18],
  trees2: [90],
  trees3: [18],
  trees4: [1, 6],
  arbusto: [11],
  house: [14, 4, 7],
  house2: [],
  house3: [2, 16],
  house4: [10, 5],
  house5: [12, 9, 3],
  house6: [],
  girassol: [],
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
