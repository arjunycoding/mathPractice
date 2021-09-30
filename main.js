function validateForm(numberOfQuestions){
    let questionsRight = 0
    let questionsWrong = []
    for(let i = 0; i < numberOfQuestions; i++){
        let id = '#question' + (i + 1)
        let answer = $(id).val()
        
        if(questions[i][1] == answer || questions[i][1] != ""){
            questionsRight++
        } else {
            questionsWrong.push(i+1)
            console.log(questions[i][0] + " " +answer, questions[i][1])
        }
    }
    return [questionsRight, questionsWrong]
}
function createQuestions(numberOfQuestions){
    let questions = []
    for(let i = 1; i <= numberOfQuestions; i++){
        let varName = 'q' + i;
        let maxIndex = decimals.length
        let index = Math.floor(Math.random() * maxIndex) + 0
        console.log(index)
        let question = [decimals[index].problem, decimals[index].answer]
        // console.log(decimals[maxIndex].problem, questions)
        questions.push(question)
        // let varName = value;
    }
    return questions
}
let numberOfQuestions = 5
let questions = createQuestions(5)
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
    let score = validateForm(5)
    let questionsWrong = score[1]
    let scoreStr = ""
    if(questionsWrong.length == 0){
        scoreStr = `You Got ${score[0]} / 5. You Got No Questions Wrong! YOU ROCK`
        pop()
    }
    else if(questionsWrong.length == numberOfQuestions){
        scoreStr = `You Got ${score[0]} / 5. It's OK. You Might Have Got All The Questions Worng Now but Keep Working Hard & You'll Get It!`
        // pop()
    }
    $("#score").html(scoreStr)
    for(let i = 0; i < questionsWrong.length; i++){
        let id = '#grade' + questionsWrong[i]
        let el = $(id)
        $(id).addClass("wrong")
    }
    $(".none").not(".wrong").addClass("right")

})
