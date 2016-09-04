window.addEventListener('load', function() {
	
	//like buttons on comments
	var likes = document.getElementsByClassName('comment__like');
	//like counts on comments
	var counts = document.getElementsByClassName('comment__count');

	//add a like listener to each link
	for (var i = 0; i < likes.length; i++) {
		addLikeEvent(i)
	}
	
	//function that adds a click event to the like buttons
	//i is an integer
	function addLikeEvent(i) {
		likes[i].addEventListener('click', function(){
			if (likes[i].innerHTML == 'Like') {
				counts[i].innerHTML = parseInt(counts[i].innerHTML) + 1;
				likes[i].innerHTML = 'Unlike';
			}
			else if (likes[i].innerHTML == 'Unlike') {
				counts[i].innerHTML = parseInt(counts[i].innerHTML) - 1;
				likes[i].innerHTML = 'Like';
			};
		});
	}

})