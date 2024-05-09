// Collections

// Selectors
const $ = {
    body    : document.querySelector('body'),
    footer  : document.querySelector('footer'),
    display : document.getElementById('display'),
}
const $palettes = {
       une: document.getElementById('une'),     // the base color
      deux: document.getElementById('deux'),    //
     trois: document.getElementById('trois'),   //
    quatre: document.getElementById('quatre'),  // complementary
      cinq: document.getElementById('cinq')     // dark color
};




/***********************************************************
 Old code
 */
// Events
// $.button.addEventListener('click', () => {
//     let color = genMenageATrois();
//     $.body.style.backgroundColor = genRgbColor(color, 1);
//     $.footer.style.backgroundColor = genRgbColor(color, 4);
//     $.button.style.color = genRgbColor(color, 4);
//     $.button.style.backgroundColor = genRgbColor(color, 1);
//     $palettes.une.style.backgroundColor = genRgbColor(color, 1);
//     $palettes.deux.style.backgroundColor = genRgbColor(color, 2);
//     $palettes.trois.style.backgroundColor = genRgbColor(color, 3);
//     $palettes.quatre.style.backgroundColor = genRgbColor(color, 4);
//     $palettes.cinq.style.backgroundColor = genRgbColor(color, 5);
// })
//
// // Functions
// function genRandomNumber() {
//     const max = 42;
//     const min = 10;
//     let number;
//     number = Math.floor(Math.random() * (max - min)) + min;
//     return number;
// }
// function genMenageATrois() {
//     const max = 255;
//     const min = 0;
//     let rr = Math.floor(Math.random() * (max - min + 1)) + min;
//     let gg = Math.floor(Math.random() * (max - min + 1)) + min;
//     let bb = Math.floor(Math.random() * (max - min + 1)) + min;
//     let rgb;
//     rgb = [rr, bb, gg];
//     return rgb;
// }
// function genRgbColor(nom, e) {
//
//     // Compute the numbers of base array for lighter color:
//     let colorDeux = [];
//     for (let i = 0; i < nom.length; i++) {
//         colorDeux.push(nom[i] - genRandomNumber());
//     }
//     let colorTrois = [];
//     for (let i = 0; i < colorDeux.length; i++) {
//         colorTrois.push(colorDeux[i] - genRandomNumber());
//     }
//     let colorQuatre = [];
//     for (let i = 0; i < colorTrois.length; i++) {
//         colorQuatre.push(colorTrois[i] - genRandomNumber());
//     }
//     let colorCinq = [];
//     for (let i = 0; i < colorQuatre.length; i++) {
//         colorCinq.push(colorQuatre[i] - genRandomNumber());
//     }
//     switch(e) {
//         case 1:
//             return `rgb(${nom[0]}, ${nom[1]}, ${nom[2]})`;
//         case 2:
//             return `rgb(${colorDeux[0]}, ${colorDeux[1]}, ${colorDeux[2]})`;
//         case 3:
//             return `rgb(${colorTrois[0]}, ${colorTrois[1]}, ${colorTrois[2]})`;
//         case 4:
//             return `rgb(${colorQuatre[0]}, ${colorQuatre[1]}, ${colorQuatre[2]})`;
//         case 5:
//             return `rgb(${colorCinq[0]}, ${colorCinq[1]}, ${colorCinq[2]})`;
//     }
// }