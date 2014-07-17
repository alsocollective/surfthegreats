var num;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('#youtube-player').removeAttr('id');
	$('#background-container').addClass('bigimage');
}else{
	var myPlayer = $("#youtube-player").Jtube({
		videoId:"NTjlTZ6gQoI",
		skipvid:false,
		skipWhash:false,
		timeLeft:false,
		loop:1,
		vidWidth:"1920",
		vidHeight:"1080",
		applyToContainer:true,
		vidHeight:"100%",
		vidWidth:"100%",
		volume:0,
		debugMode:true,
		fallbackImage:"",

		// onLoaded:function(){
		// 	$('.backgroundImage').waypoint('sticky',{
		// 		wrapper: '<div class="background-wrapper" />',
		// 		video: $("#backgroundVideo")[0]
		// 	});
		// },
		onStart:function(settings){
			if(settings.debugMode){
				//console.log("start");
			}
			$(settings.player.a).css({"display":"inline-block"})
			return null;
		},
		onPause:function(settings){
			if(settings.debugMode){
				//console.log("pause");
			}
			$(settings.player.a).css({"display":"none"})
			return null;
		}
	});
function onYouTubeIframeAPIReady() {
	//console.log("got call back from YT and starting");
	myPlayer.setupPlayer();
}

}

$(document).ready(function(){
	$("#project").removeClass('hide');
	$("#project").addClass('animated fadeInUp');
	console.log("Building...");
	//Make random download link
	num = Math.floor((Math.random() * 10) + 1);
	$("#download").attr("href","art-"+num+".pdf");

});

setTimeout(function(){
	$("#three").removeClass('hide');
	$("#three").addClass('animated fadeInUp');
	//console.log("FADE");
},60000);

