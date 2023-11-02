// Data1:

let nihad_boy1 = 1.69;
let nihad_ceki1 = 78;
let nail_boy1 = 1.95;
let nail_ceki1 = 92;

BKI_nihad1 = nihad_ceki1 / (nihad_boy1 ** 2);
BKI_nail1 = nail_ceki1 / (nail_boy1 ** 2);
shert1 = BKI_nihad1 > BKI_nail1
console.log(Boolean(shert1))

// Data2:

let nihad_boy2 = 1.88;
let nihad_ceki2 = 95;
let nail_boy2 = 1.76;
let nail_ceki2 = 85;

BKI_nihad2 = nihad_ceki2 / (nihad_boy2 ** 2);
BKI_nail2 = nail_ceki2 / (nail_boy2 ** 2);
shert2 = BKI_nihad2 > BKI_nail2
console.log(Boolean(shert2))



// Funksiya ile umumi formada:
    function Myfunction(nihad_boy, nihad_ceki, nail_boy, nail_ceki) {
        BKI_nihad = nihad_ceki / (nihad_boy ** 2);
        BKI_nail = nail_ceki / (nail_boy ** 2);
        shert = BKI_nihad > BKI_nail
        return console.log(Boolean(shert));
    }
    
    let x = Myfunction(1.69, 78, 1.95, 92)
    let y = Myfunction(1.88, 95, 1.76, 85)