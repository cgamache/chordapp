//Javascript

window.onload = function() {  //runs once window had loaded
	var canvas = document.getElementById('paper'),
	c = canvas.getContext('2d');  //specifies a 2d getContext
	c.fillStyle = 'black';
	c.fillRect(20, 10, 3, 200);
	c.fillRect(40, 10, 3, 200);
	c.fillRect(60, 10, 3, 200);
	c.fillRect(80, 10, 3, 200);
	c.fillRect(100, 10, 3, 200);
	c.fillRect(120, 10, 3, 200);
};