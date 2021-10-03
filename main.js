function validateForm(numberOfQuestions, questionArray){
    let questionsRight = 0
    let questionsWrong = []
    for(let i = 0; i < numberOfQuestions; i++){
        let id = '#question' + (i + 1)
        let answer = $(id).val()
        
        if(questionArray[i][1] == answer && questionArray[i][1] != ""){
            questionsRight++
            console.log(questionArray[i][0] + " " +answer, questionArray[i][1])
        } else {
            questionsWrong.push(i+1)
            console.log(questionArray[i][0] + " " +answer, questionArray[i][1])
        }
    }
    return [questionsRight, questionsWrong]
}
function createQuestions(numberOfQuestions, subject){
    let indexs = []
    let questions = []
    for(let i = 1; i <= numberOfQuestions; i++){
        let varName = 'q' + i;
        let maxIndex = subject.length
        let index = Math.floor(Math.random() * maxIndex) + 0
        indexs.push(index)
        for(let j = 0; j < indexs.length; j++){

            while(indexs[j] == index){
                index = Math.floor(Math.random() * maxIndex) + 0

            }
        }
        let question = [subject[index].problem, subject[index].answer]
        questions.push(question)
    }
    return questions
}
function createButton(id, text){
    $("body").append(`<button id=${id}>${text}</button><br/>`)
}
function giveFeedback(numberOfQuestions, questionArray){
    let score = validateForm(numberOfQuestions, questionArray)
    let questionsWrong = score[1]
    let scoreStr = ""
    if(questionsWrong.length == 0){
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. You Got No Questions Wrong! YOU ROCK`
        pop()
    }
    else if(questionsWrong.length == numberOfQuestions){
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. It's OK. You Might Have Got All The Questions Worng Now but Keep Working Hard & You'll Get It!`
    } else{
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. Keep It Up!`
    }
    $("#score").html(scoreStr)
    for(let i = 0; i < questionsWrong.length; i++){
        let id = '#grade' + questionsWrong[i]
        let el = $(id)
        $(id).addClass("wrong")
    }
    $(".none").not(".wrong").addClass("right")
}
function createGradeCircles(questionArray){
    for(let i = 0; i < questionArray.length; i++){
        let id = i
        id = 'grade' + (i + 1)
        $("body").append(`<span class="none circle" id="${id}"></span>&nbsp;`)
    }
}
function displayQuestions(questionArray){
    for(let i = 0; i < questionArray.length; i++){
        let id = i
        id = 'question' + (i + 1)
        $("body")
            .append(`<span>${questionArray[i][0]}</span>`)
            .append(`<input type='number' id='${id}' name='${id}'/><br/>`)
    }
}
function mathPractice(numberOfQuestions){
    let questions = createQuestions(numberOfQuestions, decimals)
    displayQuestions(questions)
    createGradeCircles(questions)
    createButton('submit', 'SUBMIT')
    $("#submit").on("click", function(){giveFeedback(numberOfQuestions, questions)})
    $("#typeOfTest").hide()
    $("#continue").hide()

}
function testOrPractice(){
    let numberOfQuestions = 0
    if($("input[type=radio]:checked").val() == "Test"){
        numberOfQuestions = 10
    } else if($("input[type=radio]:checked").val() == "Practice"){
        numberOfQuestions = 5
    }
    return numberOfQuestions
}
createButton('continue', 'CONTINUE')
$("#continue").on("click", function(){
    let numberOfQuestions = testOrPractice()
    mathPractice(numberOfQuestions)
})