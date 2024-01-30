export const data = {
  rocks: [26, 27, 44, 62, 80, 98, 119, 101, 116, 25, 8, 83]
    .concat(gerarSequenciaNumerica(223, 229))
    .concat(gerarSequenciaNumerica(260, 262))
    .concat(gerarSequenciaNumerica(242, 244))
    .concat(gerarSequenciaNumerica(276, 281))
    .concat(gerarSequenciaNumerica(145, 147))
    .concat(gerarSequenciaNumerica(149, 151))
    .concat(generateNumberArray(135, 369))
    .concat(generateNumberArray(136, 208))
    .concat(generateNumberArray(144, 558))
    .concat(generateNumberArray(64, 118))
    .concat(generateNumberArray(134, 206))
    .concat(generateNumberArray(277, 367))
    .concat([314, 350]),
  chafaris: [243],
  dirt: gerarSequenciaNumerica(298, 302)
    .concat(gerarSequenciaNumerica(316, 320))
    .concat(gerarSequenciaNumerica(352, 358))
    .concat(gerarSequenciaNumerica(334, 338)),
  woots: gerarSequenciaNumerica(39, 41)
    .concat(gerarSequenciaNumerica(46, 53))
    .concat(gerarSequenciaNumerica(559, 576))
    .concat(gerarSequenciaNumerica(282, 284))
    .concat(gerarSequenciaNumerica(64, 71))
    .concat(gerarSequenciaNumerica(217, 222))
    .concat(generateNumberArray(143, 369))
    .concat(generateNumberArray(130, 220))
    .concat(generateNumberArray(267, 339))
    .concat(gerarSequenciaNumerica(127, 144))
    .concat(gerarSequenciaNumerica(230, 233))
    .concat([
      122, 555, 573, 591, 609, 117, 99, 63, 81, 627, 112, 94, 104,
       86, 76, 58, 236, 253, 255, 238, 240, 257, 259,
      29, 31, 33, 35, 108, 90, 72, 54, 126, 340, 200, 185, 186,
    ]),
  darkWood: gerarSequenciaNumerica(9, 18)
    .concat(gerarSequenciaNumerica(245, 250))
    .concat(gerarSequenciaNumerica(263, 268))
    .concat(generateNumberArray(286, 322))
    .concat([
      28, 30, 32, 34, 36, 45, 46, 48, 49, 50, 53, 54, 52, 1, 19, 37, 38, 6, 7,
      8, 24, 42, 43, 286,
    ]),
  woodHalf: generateNumberArray(136, 208)
    .concat(generateNumberArray(134, 208))
    .concat(generateNumberArray(144, 558)),
  darkwoodHalf: [],
  grama: [],
  river: gerarSequenciaNumerica(55, 61)
    .concat(gerarSequenciaNumerica(84, 89))
    .concat(gerarSequenciaNumerica(102, 107))
    .concat(generateNumberArray(138, 192))
    .concat(generateNumberArray(139, 193))
    .concat(gerarSequenciaNumerica(73, 79))
    .concat(gerarSequenciaNumerica(91, 97))
    .concat(gerarSequenciaNumerica(109, 115))
    .concat(gerarSequenciaNumerica(119, 125))
    .concat([194, 176, 296, 332, 368]),
  pedraamarela: generateNumberArray(141, 213)
    .concat(generateNumberArray(142, 214))
    .concat(generateNumberArray(137, 209))
    .concat([158, 210, 211, 212,235, 237, 239, 241]),
  pedraverde: [163, 164, 165, 183, 182, 181, 201, 199],
  sand: gerarSequenciaNumerica(2, 5)
    .concat(gerarSequenciaNumerica(20, 23))
    .concat([167, 168, 169, 203, 204, 205, 187]),
  arbusto: [11],
  girassol: [199],
  blueFlower: [158],
  // Tree
  trees: [15],
  trees2: [13, 17, 159, 167, 168, 169, 203, 204, 314, 315, 
     297, 279, 333, 351, 369],
  trees3: [],
  trees4: [1, 183, 181, 6, 163, 164, 165, 295, 313, 277, 278,
  331, 349, 367, 350],
  // House
  house: [14, 4, 7],
  house2: [],
  house3: [2, 16],
  house4: [10, 5, 18, 182],
  house5: [12, 9, 3, 187],
  house6: [],
  // Animal
  coala: [44, 66, 129],
  whale: [74],
  pig: [205],
  crab: [107],
  coelho: [39],
  gato: [52, 205],
  galinha: [8, 90, 201],
  //statua
  estatua: [296, 332, 368],
};

function gerarSequenciaNumerica(inicio: number, fim: number): number[] {
  const sequencia: number[] = [];

  for (let i = inicio; i <= fim; i++) {
    sequencia.push(i);
  }

  return sequencia;
}

function generateNumberArray(start: number, end: number): number[] {
  const result: number[] = [];

  for (let i = start + 18; i <= end; i += 18) {
    result.push(i);
  }

  return result;
}
