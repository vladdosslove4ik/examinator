// Add new question when pressing add button on the bottom of form
(function($) {
	$( document ).ready(function() {
		$("#new-question").on("click", function(){
            
            let $cloneable = $(".test-question:hidden").first().clone(true);
			// reset fields
			$cloneable.find("input:text").val('');
			$cloneable.find("input:checkbox").prop("checked", false);
            // change display
            $cloneable.css("display", "")

			$(this).closest(".add-question-button").before($cloneable);
            recount();
        });
	});

})(jQuery);

// Remove question pressing remove X button
(function($) {
	$( document ).on('DOMNodeInserted', function() {
		$(".delete").on("click", function(){
			$(this).closest(".test-question").remove();
            recount();
		});
	});

})(jQuery);

// Add new varaint of answer to question
(function($) {
	$( document ).ready( function() {
		$(".add").on("click", function(){

			let $cloneable = $(".answer__wrapper").first().clone(true);
			// reset fields
			$cloneable.find("input:text").val('');
			$cloneable.find("input:checkbox").prop("checked", false);

			$(this).closest("button.add").before($cloneable);
		});
	});

})(jQuery);

// Recount questions number after question added or deleted
function recount() {
    var numQuestions= $(".test-question:visible").length;
    
    if (numQuestions == 1) {
        $(".numquestions").text(numQuestions + ' question');
    }
    else {
        $(".numquestions").text(numQuestions + ' questions');
    }
    
}