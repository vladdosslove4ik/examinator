$(document).ready(function () {

    let id = getCookie("userselected_test_id")
    console.log(id);

    const link = `http://127.0.0.1:8002/getTest/${id}`
    
    console.log(link);
    $.get(link, function(data, status){


        const info = data.test;
        const questions = data.pytania;
        const answers = data.odpowiedzi;

        

        $(".title").text(info.tytul);
        $("p.time").text(info.czasTrwania);
        $("p.numquestions").text(questions.length + " question(s)");


        for(i=0; i<questions.length; i++) {
            console.log(questions[i]);
            $.insertNewQuestion(questions[i].id, questions[i].tresc);
        }

        for(i=0; i<answers.length; i++) {
            $.insertAnswer(answers[i].pytanie, answers[i].id, answers[i].tresc);
        }

        






    });
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

$.insertNewQuestion = function(id, title) {
    let $cloneable = $("#hidden_copy.test-question").first().clone(true).removeAttr("id");
    $cloneable.css("display", "");
    $cloneable.attr('id', id);

    // $cloneable.find(".additional-info").remove();
    $cloneable.find(".question-title").text(title);

    $($cloneable).appendTo("form");
}

$.insertAnswer = function(questionid, id, answer) {
    let $cloneable = $("button#hidden_copy").first().clone(true);
    $cloneable.css("display", "");
    $cloneable.attr('id', id);

    $cloneable.html(answer);


    let $question = $(`#${questionid}.test-question`);
    $question.find(".answer__wrapper").append($cloneable);
}