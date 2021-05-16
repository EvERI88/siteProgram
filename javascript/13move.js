document.getElementById('playButton').onclick = function (e) {
	move('.box')
		.x(300)
		.end();
};
