// function highlight(id) {
//     var element = document.getElementById(id);
//     element.class = (element.class == "unselected") ? "selected" : "unselected";
// }

// const wrapper = document.getElementById('wrapper');

// wrapper.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) {
//         element.class = (element.class == "unselected") ? "selected" : "selected";
//     }
    
//     console.dir(event.target.id);
//   })



$(document).ready(function () {
    $('button').on('click', function () {
        console.log($(this).attr('id'))
        if($(this).attr('class') == "unselected") {
            $(this).attr('class', "selected")
        } else {
            $(this).attr('class', "unselected")
        }

    });
});