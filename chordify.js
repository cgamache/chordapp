//Javascript


	


window.onload = function() {  //runs once window had loaded
		var testchord = new chord(0, 0);
		testchord.draw();
		var testchord2 = new chord(100, 100);
		testchord2.draw();
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
		

		c.fillRect(x, y, 3, 200);  //x, y, width, height
		c.fillRect(x + 20, y, 3, 200);
		c.fillRect(x + 40, y, 3, 200);
		c.fillRect(x + 60, y, 3, 200);
		c.fillRect(x + 80, y, 3, 200);
		c.fillRect(x + 100, y, 3, 200);

		//draws nut
		c.fillRect(x, y, 100, 5);

		//frets
		c.fillRect(x, y, 100, 3);
		c.fillRect(x, y + 20, 100, 3);
		c.fillRect(x, y + 40, 100, 3);
		c.fillRect(x, y + 60, 100, 3);
		c.fillRect(x, y + 80, 100, 3);
	 };



 }



