var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            console.log(`status 200: ${xhr.response}`);
            callback(xhr.response)
        } else {
            console.log(status);
        }
    };

    xhr.send();

    return xhr.response;
};


window.onload = function() {
    const data = getJSON('http://127.0.0.1:8002/getAllTests/', (data) => {
        

    
        for (let i = 0; i < data.testy.length; i++) {
            console.log(data.testy[i]);
            test = data.testy[i];
            $.insertNewTest(test.id, test.tytul, test.czasTrwania);
        }
    });
}


$.insertNewTest = function(id, title, time ) {
    let $cloneable = $("#hidden_copy").first().clone(true).removeAttr("id");
    $cloneable.css("display", "");
    
    $cloneable.attr('id', id);
    $cloneable.find(".title").text(title);
    $cloneable.find(".time").text(time + " min");
    $cloneable.find("button.test").attr('id', id);
    $cloneable.find("button.use").attr('id', id);

    $($cloneable).appendTo("#tests__wrapper");
}
