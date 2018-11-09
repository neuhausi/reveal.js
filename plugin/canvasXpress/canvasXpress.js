/**
 * Author: Isaac Neuhaus, imnphd@gmail.com
 * 
 * Plugin for CanvasXpress
 * 
 */
var RevealCanvasXpress = window.RevealCanvasXpress || (function() {

	Reveal.addEventListener('ready', function(event) {
		var images = document.querySelectorAll("img.CanvasXpress");		
		for ( var i = 0; i < images.length; i++) {
	    images[i].style.transform = 'scale(' + (1 / Reveal.getScale()) + ')';
		}
	});

	Reveal.addEventListener('slidechanged', function(event) {
		var images = Reveal.getCurrentSlide().querySelectorAll("img.CanvasXpress");		
		for ( var i = 0; i < images.length; i++) {
	    images[i].style.transform = 'scale(' + (1 / Reveal.getScale()) + ')';
		}
	});

	Reveal.addEventListener('dblclick', function(event) {
		var target = event.target;
		var tagName = target.tagName.toLowerCase();
		var destroyCX = function(event) {
			var c = event.target.canvasId;
			var i = event.target.imageId;
			var d = 'cX-Container-' + i;
			if (c && i && d) {
				var e = document.getElementById(i);
				e.className = 'CanvasXpress';
				CanvasXpress.destroy(c);
				event.target.removeEventListener('click', destroyCX, false);
				var l = document.getElementById(d);
				l.parentNode.removeChild(l);
				event.target.parentNode.parentNode.removeChild(event.target.parentNode);
			}
		}
		if (tagName == 'img' && target.className == 'CanvasXpress') {
			zoom.out();
			var scale = 1 / Reveal.getScale();
			var boundsT = target.getBoundingClientRect();
			var boundsP = target.parentNode.getBoundingClientRect();
			var parent = target.parentNode.parentNode;
			var diff = (target.parentNode.parentNode.clientWidth - (target.parentNode.parentNode.clientWidth * scale)) / 2;
			// CanvasXpress adds 44px to the top if data is loaded remotely
			var top = (-44 * scale);
			var left = ((boundsT.left - boundsP.left) * scale) - diff;
			//var left = (boundsT.left - boundsP.left) * scale;
			var div = document.createElement('div');
			div.id = 'cX-Container-' + target.id;
			div.style.position = "absolute";
			div.style.width = target.clientWidth + 'px';
			div.style.height = target.clientHeight + 'px';
			div.style.top = top + "px";
			div.style.left = left + "px";
			div.style.margin = "0px";
			div.style.transform = 'scale(' + scale + ')';
			var canvas = document.createElement('canvas');
			canvas.id = 'cX-' + target.id;
			canvas.width = target.clientWidth;
			canvas.height = target.clientHeight;
			canvas['data-responsive'] = true;
			canvas['data-aspectRatio'] = parseInt(target.clientWidth) + ':' + parseInt(target.clientHeight);
			div.appendChild(canvas);
			parent.appendChild(div);
			var cx = new CanvasXpress({
				renderTo : 'cX-' + target.id,
				data : target.src,
				callback : function() {
					setTimeout(function() {
						var close = document.createElement('img');
						close.className = 'cx-data';
						close.src = "https://canvasxpress.org/images/deleteCross.png";
						close.canvasId = 'cX-' + target.id + '-1';
						close.imageId = target.id;
						var div = document.createElement('div');
						div.className = 'cx-destroy';
						div.style.left = (target.clientWidth + left - diff) + "px";
						//div.style.top = (-top - diff) + "px";
						div.style.top = "0px";
						div.appendChild(close);
						parent.appendChild(div);
						close.addEventListener('click', destroyCX, false);
					}, 1000);
				}
			});
			//target.className = 'cx-data CanvasXpress-transparent';
		}
	});

})();