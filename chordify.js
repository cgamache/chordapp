//Javascript

window.onload = function() {  //runs once window had loaded
	var canvas = document.getElementById('paper'),
	c = canvas.getContext('2d');  //specifies a 2d getContext
	c.fillStyle = 'black';
	c.fillRect(0, 0, canvas.width, canvas.height);
};