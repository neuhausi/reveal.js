// Custom reveal.js integration
(function(){
	var revealElement = document.querySelector( '.reveal' );
	if( revealElement ) {

    revealElement.addEventListener( 'dblclick', function( event ) {
    	var getTheme = function () {
    		var s = document.styleSheets;
    		for (var i = 0; i < s.length; i++) {
    			var t = s[i].href.match(/\/css\/theme\/(.+).css/);
    			if (t) {
    				return t[1];
    			}
    		}
    	}
    	var theme = getTheme();
      var target = event.target;
      var tagName = target.tagName.toLowerCase();
      if (tagName == 'img' && target.className == 'cx-data') {
        zoom.out();
        var boundsT = target.getBoundingClientRect();
        var boundsP = target.parentNode.getBoundingClientRect();        
        var parent = target.parentNode.parentNode;
        var div = document.createElement('div');
        div.id = 'cX-Container-' + target.id;
        div.style.position = "absolute"; 
        div.style.width = target.clientWidth + 'px';
        div.style.height = target.clientHeight + 'px';
        // CanvasXpress adds 44px if data is loaded remotely
        div.style.top = "-44px"; 
        div.style.left = (boundsT.left - boundsP.left) + "px";
        div.style.margin = "0px";
        var canvas = document.createElement('canvas');
        canvas.id = 'cX-' + target.id;
        canvas.width = target.clientWidth;
        canvas.height = target.clientHeight;
        canvas['data-responsive'] = true;
        canvas['data-aspectRatio'] = parseInt(target.clientWidth) + ':' + parseInt(target.clientHeight);
        div.appendChild(canvas);
        parent.appendChild(div);
        var cx = new CanvasXpress({
          renderTo: 'cX-' + target.id,
          data: target.src,
          callback : function () {
            setTimeout(function () {
              var close = document.createElement('img');
              close.className = 'cx-data';
              close.src = "https://canvasxpress.org/images/deleteCross.png";
              close.canvasId = 'cX-' + target.id + '-1';
              close.imageId = target.id;
              var div = document.createElement('div');
              div.className = 'cx-destroy';
              div.style.left = (target.clientWidth + boundsT.left - boundsP.left) + "px";
              div.appendChild(close);
              parent.appendChild(div);
              close.addEventListener( 'click', Reveal.destroyCanvasXpressObject, false);
            }, 1000);
          }
        });
      	target.className = 'cx-data cx-data-transparent';
      }
    });
	}
	
  Reveal.destroyCanvasXpressObject = function (event) {
    var c = event.target.canvasId;
    var i = event.target.imageId;
    var d = 'cX-Container-' + i;
    if (c && i && d) {
      var e = document.getElementById(i);
      e.className = 'cx-data';
      CanvasXpress.destroy(c);
      event.target.removeEventListener('click', Reveal.destroyCanvasXpressObject, false);
      var l = document.getElementById(d);
      l.parentNode.removeChild(l);
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
  }    
	
})();