$(document).ready(function () {



    let $result = $(".result");
    let points = getCookie("test_result")
    let max = getCookie("test_max")


    $result.text(`Your final score is ${points}/${max}!`);




   
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}