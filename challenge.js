document.addEventListener('DOMContentLoaded', (event) => {
    toggleCounter()
});

let counter = document.querySelector('h1#counter');
let minus = document.querySelector('button#minus');
let plus = document.querySelector('button#plus');
let heart = document.querySelector('button#heart');
let pause = document.querySelector('button#pause');
let commentForm = document.getElementById("comment-form");
let commentList = document.querySelector('#list.comments');

let likes = document.querySelector("ul.likes");

plus.addEventListener('mouseup', incrementCounter);
minus.addEventListener('mouseup', deceraseCounter);
heart.addEventListener('mouseup', addLike)
pause.addEventListener('mouseup', toggleCounter);
// commentForm.addEventListener('submit', addComment);

function currentTime() {
	return parseInt(counter.innerText);
}

var timer;

function toggleCounter() {
	if (!timer) {
		timer = setInterval(incrementCounter,1000);
		plus.disabled = false;
		minus.disabled = false;
		heart.disabled = false;
	} else {
		window.clearInterval(timer);
		plus.disabled = true;
		minus.disabled = true;
		heart.disabled = true;
		timer = null;
	}
}

function incrementCounter() {
	current = parseInt(counter.innerText)
	// Easter Egg for liking a specific nuber 100 times.
	// if (current === 21) {
	// 	for (i=0; i<100; i++){
	// 		addLike();
	// 	}
	// }
	counter.innerText = current + 1;
}

function deceraseCounter() {
	current = parseInt(counter.innerText)
	counter.innerText = current - 1;
}

function addLike() {
	let exists = document.querySelector(`ul.likes li._${currentTime()}`)
	if (exists) {
		content = exists.innerText.split(' ');
		content[4] = parseInt(content[4]) + 1;
		content[5] = "times.";
		exists.innerText = content.join(' ');
	} else {
		let listItem = document.createElement('li');
		listItem.innerText = `${currentTime()} has been liked 1 time.`;
		listItem.classList.add(`_${currentTime()}`);
		likes.appendChild(listItem);
	}
}

function addComment() {
	let comment = document.createElement('p');
	formData = document.querySelector('#comment-input').value;
	comment.innerText = formData;
	commentList.appendChild(comment);
	// why does this refresh the page?
}
