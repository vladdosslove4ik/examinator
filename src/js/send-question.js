

// function getSJON() {
//     // formData.forEach(function(value, key){
//     //     object[key] = value;
//     // });
//     e.preventDefault();
//     var data = $('#test').serializeArray();


//     console.log(JSON.stringify(data));
// }

function callbackFunction(event) {

    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);

}

function printJSON() {

    data = JSON.stringify($('form').serializeArray());
    console.log(data);


    let xhr = new XMLHttpRequest();
    let url = "http://127.0.0.1:8002/addTestV/";
    
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };
    // Sending data with the request
    xhr.send(data);



    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', callback);    
}

document.getElementById("save-form").addEventListener("click", printJSON);
