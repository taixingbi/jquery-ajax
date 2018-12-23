$(document).ready(function() {

	var $get_comments= $('#get_comments');
	//var $input_user= $('#input_user');
	var $input_comment= $('#input_comment');

	$.ajax({
		type : 'GET',
		url : 'http://localhost:3000/comments',
		success: function(get_comments){
			//alert(comments[0].body)
			$.each(get_comments, function(i, get_comment){
				$get_comments.append('<div> <b>' + get_comment.user + ' </b>: ' + get_comment.body + '</div>');
			});
		},
		error: function(){
			alert("error loading comments")
		}
	});

	//	$('#post_comments').on('click', function(){
	$('#input_comment').keypress(function (e) {
		if (e.which == 13) { // 'enter'

			var comment= {
				user : "taixing",
				body : $input_comment.val(),
			};
			
			if ( !comment.user){
				alert('please enter a name');
				return;
			} 
	
			if ( !comment.body){
				alert('please enter a comment');
				return
			} 
	
			$.ajax({
				type : 'POST',
				url : 'http://localhost:3000/comments',
				data : comment,
				success: function(new_comment){
					$get_comments.append('<div> <b>' + new_comment.user + '</b>: ' + new_comment.body + '</div>');
				},
				error: function(){
					//fail post url
					alert("error saving comments")
				}
			})

		  return false;    //<---- Add this line
		}
	  });
});

