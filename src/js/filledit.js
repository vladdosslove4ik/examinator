$(document).ready(function () {

    var id = localStorage.getItem("userselected_test_id")

    const link = `http://127.0.0.1:8002/getTest/${id}`
    
    console.log(link);
    $.get(link, function(data, status){

        console.log(data);

        document.getElementById("test-title").value = data.test.tytul

        for(var i=0;i<data.pytania.length;i++){
            var c = document.getElementById("new-question")
            c.click()
            var q = last(document.getElementsByClassName("test-question"))
            var qt = last(document.getElementsByClassName("question-title"))
            qt.value = data.pytania[i].tresc
            var howmany = 0
            for(var k=0;k<data.odpowiedzi.length;k++){
                if (data.odpowiedzi[k].pytanie == data.pytania[i].id){
                    howmany++
                    if (howmany > 1){
                        var b = document.getElementsByClassName("add")
                        b = b[b.length-1]
                        b.click()
                    }
                    var at = last(document.getElementsByClassName("input-answer"))
                    at.value = data.odpowiedzi[k].tresc
                    var chb = last(document.getElementsByClassName("checkbox-answ"))
                    chb.checked = data.odpowiedzi[k].czyPoprawna

                }
            }

            q.style.display = "";
            recount();
        }


    });
     


    
});

function last(array) {
    return array[array.length - 1];
}


function checkEmptyFields(callback) {
    var isValid = true;
    $("input[type=text]:visible").each(function() {
        
        var element = $(this);
        if (element.val() == "") {
            isValid = false; 
        }
    });
    callback(isValid);
}

function edit(){
    checkEmptyFields( (isOk) => {
        
        console.log(isOk);
        if(isOk) {

            data = JSON.stringify($('form').serializeArray());
            console.log(data);

            let xhr = new XMLHttpRequest();
            var id = localStorage.getItem("userselected_test_id")
            let url = `http://127.0.0.1:8002/updateTest/${id}`;

            xhr.open("POST", url, true);

            // Set the request header i.e. which type of content you are sending
            xhr.setRequestHeader("Content-Type", "application/json");

            // Create a state change callback
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    // Print received data from server
                    result.innerHTML = this.responseText;
                    window.location.pathname = "C:/Users/mbien/OneDrive/Pulpit/examinator-main/libraty.html";
                }
            };
            // Sending data with the request
            xhr.send(data);
            console.log(data)

            window.alert("Test zmodyfikowany!")
           
        }
        else {
            alert("There is an empty field!");
        }
    });
}
