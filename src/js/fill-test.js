$(document).ready(function () {

    let id = getCookie("userselected_test_id")
    console.log(id);

    const link = `http://127.0.0.1:8002/getTest/${id}`
    
    console.log(link);
    $.get(link, function(data, status){

        console.log(data);



    });
     


    
});



function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }