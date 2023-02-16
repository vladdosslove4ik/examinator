$("button#check").click(function () {

    let id = getCookie("userselected_test_id")
    console.log(id);

    const link = `http://127.0.0.1:8002/getTest/${id}`
    
    console.log(link);
    $.get(link, function(data, status) {

        const questions = data.pytania;
        var correctAnswers = {};
        for(i=0; i<questions.length; i++) {
            correctAnswers[questions[i].id] = true;
        }

        


        const answers = data.odpowiedzi;
        console.log(answers);

        for(i=0; i<answers.length; i++) {
            if ($.checkAnswer(answers[i].pytanie, answers[i].id) != answers[i].czyPoprawna) {
                console.log(i, answers[i].id, " ")
                correctAnswers[answers[i].pytanie] = false;
            }
        }
        var counter = 0;
        for (key in correctAnswers) {
            if (correctAnswers[key] == true) {
                counter++;
            }
        }

        document.cookie = `test_result=${counter}`;
        document.cookie = `test_max=${questions.length}`;
        alert("Your result has been written");
        window.open("result.html","_self");

    });
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

$.checkAnswer = function(question, answer) {
    $element = $(`#${question}.test-question`);
    $button = $element.find(`button#${answer}`);
    if($button.attr("class") == "selected") return true;
    else return false;

}
