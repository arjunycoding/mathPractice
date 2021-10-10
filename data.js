decimals = [
    {
        problem : "12.1 / 10",
        answer : 12.1 / 10
    },
    {
        problem : "1.3 x 10",
        answer : 1.3 * 10
    },
    {
        problem : "314 / 100",
        answer : 314 / 100
    },
    {
        problem : "0.285 x 1000",
        answer :  0.285 * 1000
    },
    {
        problem : "146 / 1000",
        answer : 146 / 1000
    },
    {
        problem : "124.5 / 10",
        answer : 124.5 / 10
    },
    {
        problem : "38.7 / 1",
        answer : 38.7 / 1
    },
    {
        problem : "4.609 / 100",
        answer : 4.609 / 100
    },
]
function basicMultiplication(table, maxNum){
    let num1 = table
    let num2 = Math.floor(Math.random() * maxNum) + 0
    if(table.toLowerCase() == 'random'){
        num1 = Math.floor(Math.random() * maxNum) + 0
    }
    return [`${num1} x ${num2} =`, num1 * num2]
}