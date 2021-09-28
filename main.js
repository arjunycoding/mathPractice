let mathPractice = $("#mathPractice")
function generateMutiplication(table, maxNum){
    let num1 = table
    let num2 = Math.floor(Math.random() * maxNum) + 0
    if(table.toLowerCase() == 'random'){
        num1 = Math.floor(Math.random() * maxNum) + 0
    }
    return [`${num1} x ${num2} =`, num1 * num2]
}
function validateForm(numberOfQuestions){
    let questionsRight = 0
    let questionsWrong = []
    for(let i = 0; i < numberOfQuestions; i++){
        let id = '#question' + (i + 1)
        let answer = $(id).val()
        
        if(questions[i][1] != "" && questions[i][1] == answer){
            questionsRight++
        } else {
            questionsWrong.push(i+1)
            console.log(questions[i][0] + answer, questions[i][1], "||", questionsWrong)
        }
    }
    return [questionsRight, questionsWrong]
}
function createQuestions(numberOfQuestions){
    let questions = []
    for(let i = 1; i <= numberOfQuestions; i++){
        let varName = 'q' + i;
        questions.push(generateMutiplication("Random", 12))
        // let varName = value;
    }
    return questions
}
let questions = createQuestions(10)
for(let i = 0; i < questions.length; i++){
    let id = i
    id = 'question' + (i + 1)
    $("body")
        .append(`<span>${questions[i][0]}</span>`)
        .append(`<input type='number' id='${id}' name='${id}'/><br/>`)
    }
$("body").append("<button id='submit'>SUBMIT</button><br/>")
for(let i = 0; i < questions.length; i++){
    let id = i
    id = 'grade' + (i + 1)
    $("body").append(`<span class="none circle" id="${id}"></span>&nbsp;`)
}

$("#submit").on("click", function(){
    let score = validateForm(10)
    console.log(score)
    let questionsWrong = score[1]
    let scoreStr = ""
    if(questionsWrong.length == 0){
        scoreStr = `You Got ${score[0]} / 10. You Got Questions ${score[1]} Wrong`
        // pop()
    }
    $("#score").html(scoreStr)
    for(let i = 0; i < questionsWrong.length; i++){
        id = '#grade' + questionsWrong[i]
        el = $(id)
        console.log("hi")
        console.log(el)
        $(id).addClass("wrong")
    }
    $(".none").not(".wrong").addClass("right")

})
