// object destructuring
const band = {
  bandName: "lep Zapplin",
  famousSong: "straitway to heaven",
  year: 1968,
  anotherfamousSong: "kashmir",
}

// let bandName = band.bandName;
// let famousSong = band.famousSong;

//let { bandName, famousSong } = band;
// let { bandName: var1, famousSong: var2 } = band;
let { bandName, famousSong, ...restProps } = band;

console.log(bandName);
console.log(famousSong);
console.log(restProps);