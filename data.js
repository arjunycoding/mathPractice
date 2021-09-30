function generateDecimal(op){
    let operation = op
    let num1= Math.floor(Math.random() * 100) + 0
    let num2= Math.floor(Math.random() * 100) + 0
    document.write(i.toFixed(2));

}
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
        problem : "1.3 x 10",
        answer : 1.3 * 10                   
    },
    {
        problem : "1.3 x 10",
        answer : 1.3 * 10                   
    },
    {
        problem : "1.3 x 10",
        answer : 1.3 * 10                   
    },
]
simpleFacts = {
    multiplication : function (table, maxNum){
        let num1 = table
        let num2 = Math.floor(Math.random() * maxNum) + 0
        if(table.toLowerCase() == 'random'){
            num1 = Math.floor(Math.random() * maxNum) + 0
        }
        return [`${num1} x ${num2} =`, num1 * num2]
    }
}