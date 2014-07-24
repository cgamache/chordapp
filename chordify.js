//Javascript


	


window.onload = function() {  //runs once window had loaded
		var testchord = new chord(0, 0);
		testchord.draw();
	};

 //chord object
function chord (x, y) {
	var canvas = document.getElementById('paper');
	var c = canvas.getContext('2d');  //specifies a 2d getContext
 	this.x = x;
 	this.y = y;
 	this.draw = function () {
	 	c.fillStyle = 'black';
	 		//draws strings
		c.fillRect(20, 10, 3, 200);
		c.fillRect(40, 10, 3, 200);
		c.fillRect(60, 10, 3, 200);
		c.fillRect(80, 10, 3, 200);
		c.fillRect(100, 10, 3, 200);
		c.fillRect(120, 10, 3, 200);

		//draws nut
		c.fillRect(20, 10, 100, 5);

		//frets
		c.fillRect(20, 30, 100, 3);
		c.fillRect(20, 50, 100, 3);
		c.fillRect(20, 70, 100, 3);
		c.fillRect(20, 90, 100, 3);
		c.fillRect(20, 110, 100, 3);
	 };



 }



