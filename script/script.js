window.onload=function(){
	if(window.orientation != 0){
		alert("请竖屏显示");
		history.go(0);
	}
};
//上面那些是一个强制竖屏（？）的玩意儿，用户体验极差的那种23333

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
} else {
	alert("您的浏览器不支持DeviceOrientation");
};
function DeviceOrientationHandler(event){
      document.getElementById("alpha").innerHTML = event.alpha;
      document.getElementById("beta").innerHTML = event.beta;
      document.getElementById("gamma").innerHTML = event.gamma;
      document.getElementById("heading").innerHTML = event.webkitCompassHeading;
      document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;
}

























