(function( $ ){

  $.fn.video = function( options ) {  

    var defaults = {
    	swfHref: '/static/flash/video-lightbox/player.swf',
    	flashvars: { autostart: 'true' },
    	params: { allowfullscreen: 'true', allowscriptaccess: 'always' },
    	attributes: {},
    	videoWidth: 800,
    	videoHeight: 600
    };

    return this.each(function() {        

		var $this = $(this);
		var uniqueID = uuid();

		var settings = {};
      var settings = $.extend( true, {}, defaults, options ); // Deep merge for flashvars, etc.
		
      // data-attributes beat options (and defaults)
		settings.videoHeight = $this.data('height') || settings.videoHeight;
		settings.videoWidth = $this.data('width') || settings.videoWidth;


    	settings.attributes.id = 'flash-content'+uniqueID;
    	
		if($this.attr('href').indexOf('.swf') == -1) // TODO improve the extension test
		{
			// Assume it's a video file; set the flashvar for our player
			settings.flashvars.file = $this.attr('href'); // for jwplayer
			settings.flashvars.url = $this.attr('href'); // for the videolightbox player
		}
		else
		{
    		// if the link is directly to a .swf file, embed that by itself
    		settings.swfHref = $this.attr('href');
		}
		
		//create the hidden elements, and the "get flash" fallback
		$('<div style="display: none;"><div id="video-outer-'+uniqueID+'"><div id="video-inner-'+uniqueID+'"><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"></a></div></div></div>').appendTo('body');

		swfobject.embedSWF(settings.swfHref, 'video-inner-'+uniqueID, settings.videoWidth+'px', settings.videoHeight+'px', '9.0.115', '/assets/scripts/swfobject/expressInstall.swf', settings.flashvars, settings.params, settings.attributes);

		$this.colorbox({inline: true, href: '#video-outer-'+uniqueID, innerWidth: settings.videoWidth, innerHeight: settings.videoHeight+5}); // Not sure why we need the +5 on height, but we do.

		// TODO Only create the hidden elements when the colorbox opens
		
    });
  };

  // "Private" utility functions
  function uuidlet(){return(((1+Math.random())*0x10000)|0).toString(16).substring(1);}
  function uuid(){return(uuidlet()+uuidlet()+"-"+uuidlet()+"-"+uuidlet()+"-"+uuidlet()+"-"+uuidlet()+uuidlet()+uuidlet());}
	
})( jQuery );