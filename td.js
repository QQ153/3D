$(function(){
	//弹出图片
	
	var ol=$("#tu ul li").size();
	var deg = 360/ol;
	var xdeg = 0,ydeg = -10,xs,ys;
	var posX,posY;
	//alert(deg);
	for(var i=ol-1; i>=0; i--){
		$('#tu ul li').eq(i).css({transition:"1s "+(ol-i)*0.15+
		"s transform,.5s "+(1+ol*0.15)+"s opacity",'transform':
		'rotateY('+deg*i+'deg) translateZ(350px)'});
		}
		
		//阻止默认拖动
		$(document).mousedown(function(e){
			  e.preventDefault();      //
			  var x1 = e.clientX;
			  var y1 = e.clientY;
			  //alert(x1+'  '+y1);   //显示坐标
			  $(this).bind('mousemove',function(e){
				  //拖动坐标
				  xs = e.clientX - x1;
				  ys = e.clientY - y1;
				  x1 = e.clientX;
			      y1 = e.clientY;
				  xdeg += xs*0.3;
				  ydeg -= ys*0.1;
				  $('#tu').css('transform',
				  "perspective(800px) rotateX("+ydeg+"deg) rotateY("+xdeg+"deg)");
				  });
			}).mouseup(function(){//甩掉鼠标
				$(this).unbind('mousemove');
				
				});
				
				
				
				
	
	//移动端
	document.addEventListener('touchstart', function(e) {
		var touches = e.touches[0];
		posX = touches.clientX;
		posY = touches.clientY;
	});
	function move(e){
		e.preventDefault();
		var touches = e.touches[0];
		xs = touches.clientX - posX;
		ys = touches.clientY - posY;
		posX = touches.clientX;
		posY = touches.clientY;
		xdeg += xs*0.3;
		ydeg -= ys*0.1;
		$('#tu').css('transform',
		"perspective(800px) rotateX("+ydeg+"deg) rotateY("+xdeg+"deg)");
		
	}
	document.addEventListener('touchmove',move);
	
		
	});
	

