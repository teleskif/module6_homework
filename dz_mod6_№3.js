
function getNum(a) {
    return function getSum(b) {
    return a + b;
    }
}
const result = getNum(2)
console.log(result(1))