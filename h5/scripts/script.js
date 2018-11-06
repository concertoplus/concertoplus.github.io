$("#buttonStart").click(function(){
		$("#firstPage").hide();
		$("#canvasBox").show();
		draw();
});
function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	}
	var canvasBox = document.getElementById("canvasBox");
	canvas.width = canvasBox.clientWidth;
	canvas.height = canvasBox.clientHeight;
	var img = new Image(); 
	img.src = "images/03.jpg";
	var quickMark = new Image();
	quickMark.src = "images/04.png"
	img.onload = function(){
		var w = canvas.height*img.width/img.height;
		ctx.drawImage(img, (canvas.width-w)/2, 0, w, canvas.height);
		ctx.font="48px serif";
		ctx.fillText("今天的肚子也好饿",-10,100);
		setTimeout(function(){ctx.drawImage(quickMark, (canvas.width)/2, canvas.height/2, w/2, w/2);},1);
	}
}


