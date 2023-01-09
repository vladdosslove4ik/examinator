var testsnippet = '' + 
'<div class="test-question">' + 
'          <div class="test-question__wrapper">' + 
'            <div class="question-title-controls__wrapper">' + 
'              <div class="question-title">Title of question</div>' + 
'              <div class="question-control-buttons">' + 
'                <button class="delete">X</button>' + 
'              </div>' + 
'            </div>' + 
'            <div class="question-info">Additional info Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti officiis eos laboriosam? Fuga dignissimos tempora hic accusamus a exercitationem numquam, obcaecati, eveniet quia sequi consequatur magni reprehenderit impedit porro.</div>' + 
'            <div class="question-answers__wrapper">' + 
'              <button class="answer">A. Answer 1</button>' + 
'              <button class="answer">B. Answer 2</button>' + 
'              <button class="answer">C. Answer 3</button>' + 
'              <button class="answer">D. Answer 4</button>' + 
'              <button class="answer">E. Answer 5</button>' + 
'              <button class="answer">F. Answer 6</button>' + 
'              <button class="answer">G. Answer 7</button>' + 
'              <button class="answer">H. Answer 8</button>' + 
'              <button class="answer">I. Answer 9</button>' + 
'              <button class="add">+</button>' + 
'            </div>' + 
'          </div>' + 
'        </div>' + 
'';



(function($) {
	$( document ).ready(function() {
		$("#new-question").on("click", function(){
			$(".add-question-button").before(testsnippet);
            recount();
		});
	});

})(jQuery);

(function($) {
	$( document ).on('DOMNodeInserted', function() {
		$(".delete").on("click", function(){
			$(this).closest(".test-question").remove();
            recount();
		});
	});

})(jQuery);

// add new test varaint
(function($) {
	$( document ).ready( function() {
		$(".add").on("click", function(){

			let $cloneable = $(".answer__wrapper").first().clone(true);
			console.log($cloneable.length)
			$(this).closest("button.add").before($cloneable);
		});
	});

})(jQuery);

function recount() {
    var numQuestions= $(".test-question").length;
    
    if (numQuestions == 1) {
        $(".numquestions").text(numQuestions + ' question');
    }
    else {
        $(".numquestions").text(numQuestions + ' questions');
    }
    
}