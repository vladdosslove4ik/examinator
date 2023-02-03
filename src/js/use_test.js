$(document).ready(function () {
    $('button.test').on('click', function () {
        id = $(this).attr('id');
        console.log("selected_test_id=" + id);
        document.cookie = `userselected_test_id=${id}`;
        // $.cookie("selected_test_id", id, { path: '/' });
        // console.log( $.cookie("selected_test_id"));
        window.open("test-use.html","_self");
    });
});