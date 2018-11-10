//第一页跳转页面
$("#buttonStart").click(function(){
		$("#firstPage").hide();
		$(".box").show();
});

//获得一个随机的值
var flag = parseInt(Math.random()*7);
console.log(flag);

//微信头像的取得（暂未完成请求部分）写进了html
// var headImgUrl;
// headImgUrl = "http://thirdwx.qlogo.cn/mmopen/vi_32/Ob1vXSJxy7sJ7GCsToibEe0sZILAue0afl2ljXcltvtaFZdCIux45Fmbwo4QU5bKMDvPb1oHua0Z3ZWSe6Emc6w/132"
// $(".headImg").prop("src",headImgUrl);

//实现随机背景图
flag = 0;//加上后续图片之后记得删掉
var bgImage = ["url(images/xry.png)",2,3,4,5,6,7];
var bgImageURL = ["images/xry.png",2,3,4,5,6,7];//见第66行
function backgroundImage () {
	$(".box").css("background-image", bgImage[flag]);
}
backgroundImage ();

//随机背景图之后的定位问题
function changeClass(){
	var headImgClass,
		radusClass,
		lightClass;
	switch (flag) {
		case 0:
			headImgClass = "headImgWifi";
			radusClass = "radusWifi";
			lightClass = "lightWifi";
			break;
		case 1:
			// statements_2
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
	}
	$(".headImg").addClass(headImgClass);
	$(".radus").addClass(radusClass);
	$(".light").addClass(lightClass);
}
changeClass();

//切换到保存页以及完成保存图位置的定位
var imgHeight,imgWidth;
$("#showButton").click(function(){
	var imgWidth = $("#downloadBox").width(),
	imgHeight = $("#downloadBox").height();
	console.log(imgWidth,imgHeight);
	$(".box").hide();
	$("#showBox").show();
	var downloadBoxHeight = $("#downloadBox").width()*16/9;
	$("#downloadBox").css("height",downloadBoxHeight).show();
	imgWidth = $("#downloadBox").width();
	imgHeight = $("#downloadBox").height();
	console.log(imgWidth,imgHeight);
	$("#boxBgi").attr("src",bgImageURL[flag]).height(imgHeight).width(imgWidth); 
	htmlcanvas();
	//改变img的数值
	$("#myIMG").width(imgWidth);
	$("#myIMG").height(imgHeight);
});

//尝试生成图片
function htmlcanvas(){
	//html2canvas运行
	html2canvas($("#downloadBox")[0], {scale:4,logging:false,useCORS:true}).then(function(canvas) {
	            var dataUrl = canvas.toDataURL();
	            $("#myIMG").attr("src",dataUrl);
	        });
}