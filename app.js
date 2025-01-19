/////1.
function calcTipe(fatoura){
    if (fatoura>=50 && fatoura<=300){
        const ziyeda=fatoura*0.15
        return ziyeda
    }
    else{
        const ziyeda=fatoura*0.2
        return ziyeda
    }
}
console.log(calcTipe(125))
////2.
const fatourat = [125,555,44]
console.log(fatourat)
////3.
const ziedeet = [calcTipe(fatourat[0]),calcTipe(fatourat[1]),calcTipe(fatourat[2])]
console.log(ziedeet)
/////bonus
const total = [fatourat[0]+ziedeet[0],fatourat[1]+ziedeet[1],fatourat[2]+ziedeet[2]]
console.log(total)