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
      if (tagName == 'img' && target.className == 'canvasxpress') {
        zoom.out();
        var width = target.parentNode.clientWidth;
        var canvas = document.createElement('canvas');
        var boundsT = target.getBoundingClientRect();
        var boundsP = target.parentNode.getBoundingClientRect();
        canvas.id = 'cX-' + target.id;
        canvas.width = target.width;
        canvas.height = target.height;          
        target.style.position = 'relative';
        target.style.left = ((boundsT.left - target.width) + 2) + 'px';
        target.style.top = '0px';
        target.parentNode.appendChild(canvas);
        var cx = new CanvasXpress({
          renderTo: 'cX-' + target.id,
          data: target.src,
          callback : function () {
            setTimeout(function () {
              var close = document.createElement('img');
              close.src = "https://canvasxpress.org/images/deleteCross.png";
              close.canvasId = 'cX-' + target.id + '-1';
              close.imageId = target.id;
              target.parentNode.appendChild(close);
              var boundsC = close.getBoundingClientRect();
              close.style.position = 'relative';
              close.style.left = ((boundsC.left - boundsT.left) + 21 ) + 'px';
              close.style.top = -((boundsC.top - boundsT.top) + 21 ) + 'px';
              close.style.border = '0px none';
              close.style.margin = '4px';
              close.style.boxShadow = '0 0 0px rgba(0,0,0,0)';
              close.style.background = 'rgba(0,0,0,0)';
              close.addEventListener( 'click', Reveal.destroyCanvasXpressObject, false);
            }, 1000);
          }
        });
        target.parentNode.lastChild.style.top = -(boundsP.height + 25) + 'px';
      }
    });

	}
	
  Reveal.destroyCanvasXpressObject = function (event) {
    var target = event.target;
    var cid = target.canvasId;
    var image = document.getElementById(target.imageId);
    if (cid && image) {
      CanvasXpress.destroy(cid);
      target.removeEventListener('click', Reveal.destroyCanvasXpressObject, false);
      var parent = target.parentNode;
      while (parent.childNodes.length > 2) {
        parent.removeChild(parent.lastChild); 
      }
      image.style.cssText = " ";
    }
  }    
	
})();