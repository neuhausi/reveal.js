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
			if (c && i) {
				var e = document.getElementById(i);
				e.className = 'CanvasXpress';
				CanvasXpress.destroy(c);
				var d = event.target.parentNode.parentNode.querySelectorAll("div.cX-container")[0];
				event.target.parentNode.parentNode.removeChild(d);
				event.target.removeEventListener('click', destroyCX, false);
				event.target.parentNode.parentNode.removeChild(event.target.parentNode);
			}
		}
		var getCXId = function(id) {
		  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			if (!id) {
				id = 'cX-000000';
			}
			if (CanvasXpress.instances.length) {
				while (CanvasXpress.getObject(id)) {
					id = 'cX-';
				  for (var i = 0; i < 6; i++) {
				    id += chars.charAt(Math.floor(Math.random() * chars.length));
				  }
				}
			}
			return id;
		}
		if (!target.id) {
			target.id = 'foobar';
		}
		if (tagName == 'img' && target.className == 'CanvasXpress') {
			zoom.out();
			var scale = 1 / Reveal.getScale();
			var parent = target.parentNode.parentNode;
			var div = document.createElement('div');
			var id = getCXId('cX-' + target.id);
			// CanvasXpress adds 44px to the top if data is loaded remotely
			div.style.transform = 'translateY(-44px) scale(' + scale + ')';
			div.className = 'cX-container';
			var canvas = document.createElement('canvas');
			canvas.id = id;
			canvas.width = target.clientWidth;
			canvas.height = target.clientHeight;
			canvas['data-responsive'] = true;
			canvas['data-aspectRatio'] = parseInt(target.clientWidth) + ':' + parseInt(target.clientHeight);
			div.appendChild(canvas);
			parent.appendChild(div);
			var cx = new CanvasXpress({
				renderTo : id,
				data : target.src,
				callback : function() {
					setTimeout(function() {
						var bb = target.getClientRects();
						var close = document.createElement('img');
						close.className = 'cx-data';
						close.src = "https://canvasxpress.org/images/deleteCross.png";
						close.canvasId = id + '-1';
						close.imageId = target.id;
						var div = document.createElement('div');
						div.className = 'cx-destroy';
						div.style.width = '100%';
						div.style.height = '16px';
						div.style.top = '0px';
						div.style.position = 'absolute';
						div.appendChild(close);
						parent.appendChild(div);
						close.addEventListener('click', destroyCX, false);
					}, 1000);
				}
			});
			target.className = 'cx-data CanvasXpress-transparent';
		}
	});

})();