function importFile(file){
    $("body").append(`<script src="${file}"></script>`)
}
importFile("static/data.js")
importFile("static/pop.js")
importFile("static/fireworks.js")
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
    let questions = []
    console.log(subject, numberOfQuestions)
    if(subject == "basicMultiplication"){
        for(let i = 1; i <= numberOfQuestions; i++){
            let generatedQuestion = basicMultiplication("random", 12)
            console.log(generatedQuestion)
            let question = [generatedQuestion[0], generatedQuestion[1]]
            questions.push(question)
        }
    }
    if(subject == "decimals")
    for(let i = 1; i <= numberOfQuestions; i++){
        let maxIndex = decimals.length
        let index = Math.floor(Math.random() * maxIndex) + 0
        let question = [decimals[index].problem, decimals[index].answer]
        questions.push(question)
    }
    return questions
}
function createButton(id, text, cl){
    $("#all").append(`<button id=${id} class=${cl}>${text}</button><br/>`)
}
function giveFeedback(numberOfQuestions, questionArray, submitButtonId){
    let score = validateForm(numberOfQuestions, questionArray)
    let questionsWrong = score[1]
    let scoreStr = ""
    let color = 'black'
    if(questionsWrong.length == 0){
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. You Got No Questions Wrong! YOU ROCK`
        color = 'green'
        // fireworks()
    } else if(questionsWrong.length == numberOfQuestions){
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. It's OK. You Might Have Got All The Questions Worng Now but Keep Working Hard & You'll Get It!`
        color = 'red'
    } else{
        scoreStr = `You Got ${score[0]} / ${numberOfQuestions}. Keep It Up!`
        color = 'black'
    }
    $("#score").html(scoreStr).css('color', color)
    for(let i = 0; i < questionsWrong.length; i++){
        let id = '#grade' + questionsWrong[i]
        let el = $(id)
        el.addClass("wrong")
    }
    $(".none").not(".wrong").addClass("right")
}
function createGradeCircles(questionArray){
    for(let i = 0; i < questionArray.length; i++){
        let id = i
        id = 'grade' + (i + 1)
        $("#all").append(`<span class="none circle" id="${id}"></span>`)
    }
}
function displayQuestions(questionArray){
    for(let i = 0; i < questionArray.length; i++){
        let id = i
        console.log(questionArray[i], questionArray.length)
        id = 'question' + (i + 1)
        $("table")
            .append(`
            <tr>
                <td><span>${questionArray[i][0]}</span></td>
                <td><input type='number' id='${id}' name='${id}'/></td>
            </tr>`);
    }
}
function mathPractice(numberOfQuestions, subject){
    let questions = createQuestions(numberOfQuestions, subject)
    displayQuestions(questions)
    createGradeCircles(questions)
    createButton('submit', 'SUBMIT', 'button')
    $("#submit").on("click", function(){giveFeedback(numberOfQuestions, questions, "submit")})
    $("#typeOfTest").css("height", "0px");
    $("#typeOfTest").hide()
    $("#continue").hide()
    $("table").show()
    $("thead").hide()

}
function testOrPractice(){
    let numberOfQuestions = 0
    let checkedValue = $("input[type=radio]:checked").val()
    if(checkedValue == "Test"){
        numberOfQuestions = 10
    } else if(checkedValue == "Practice"){
        numberOfQuestions = 5
    }
    return numberOfQuestions
}
function choseSubject(){
    let checkedValue = $("input[name=subject]:checked").val()
    console.log(checkedValue)
    if(checkedValue == "basicMultiplication"){
        console.log(checkedValue)
        
    }
    return checkedValue
}
createButton('continue', 'CONTINUE', 'button')
$("table").hide()
$("#subject").hide()
$("#continue").on("click", function(){
    $("#subject").show()
    $("#typeOfTest").hide()
    $("#continue").hide()
    createButton('continue2', 'CONTINUE', 'button')
    $("#continue2").on("click", function(){
        $("#subject").hide()
        $("#continue2").hide()
        choseSubject()
        let numberOfQuestions = testOrPractice()
        let subject = choseSubject()
        mathPractice(numberOfQuestions, subject)
    })
})