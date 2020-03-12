module.exports = function reverse (n) {
    let positive = Math.abs(n);
    let str = positive.toString();
    let newStr = str.split("").reverse().join("");
     return +newStr;
}
