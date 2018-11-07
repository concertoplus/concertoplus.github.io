$("#buttonStart").click(function(){
		$("#firstPage").hide();
		$("#canvasBox").show();
		draw();
});
var newImg;
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
	img.onload = function(){
		var w = canvas.height*img.width/img.height;
		ctx.drawImage(img, (canvas.width-w)/2, 0, w, canvas.height);
		ctx.font="48px serif";
		ctx.fillText("今天的肚子也好饿",-10,100);
		var mark = new Image();
		mark.src = "images/04.png";
		mark.onload = function(){
			ctx.drawImage(mark, (canvas.width)/2, canvas.height/2, w/2, w/2);
			newImg = canvas.toDataURL();
			setDownload();
		}
	};
}
function setDownload(){
	$("#download").attr("href",newImg);
}



