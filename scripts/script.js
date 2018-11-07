$("#buttonStart").click(function(){
		$("#firstPage").hide();
		$("#canvasBox").show();
		draw();
});
var imageSrc;
function random(){
	var flag = parseInt(Math.random()*7);
	console.log(flag);
	var imageList = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg",]
	imageSrc = "images/"+imageList[flag];
}
random();
function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	}
	var canvasBox = document.getElementById("canvasBox");
	canvas.width = canvasBox.clientWidth;
	canvas.height = canvasBox.clientHeight;
	var img = new Image(); 
	img.src = imageSrc;
	img.onload = function(){
		var w = canvas.height*img.width/img.height;
		ctx.drawImage(img, (canvas.width-w)/2, 0, w, canvas.height);
		ctx.font="48px serif";
		ctx.fillText("今天的肚子也好饿",-10,100);
	};
}

