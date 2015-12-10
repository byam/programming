var FlashDetect={
	detect : function(){
		this.flashinstalled = 0;
		this.flashversion = 0;

		if (navigator.plugins && navigator.plugins.length)
		{
			this.x = navigator.plugins["Shockwave Flash"];
			if (this.x)
			{
				this.flashinstalled = 2;
				if (this.x.description)
				{
					this.y = this.x.description;
					this.cursor = this.y.indexOf(".")-1;
					this.flashversion="";
					while(this.isDigit(this.y.charAt(this.cursor))){
					    this.flashversion=this.y.charAt(this.cursor)+this.flashversion;
					    this.cursor--;
					}
				}
			}
			else
				this.flashinstalled = 1;
			if (navigator.plugins["Shockwave Flash 2.0"])
			{
				this.flashinstalled = 2;
				this.flashversion = 2;
			}
		}
		else if (navigator.mimeTypes && navigator.mimeTypes.length)
		{
			this.x = navigator.mimeTypes['application/x-shockwave-flash'];
			if (this.x && this.x.enabledPlugin)
				this.flashinstalled = 2;
			else
				this.flashinstalled = 1;
		}else{
			// IE flash detection.
			this.flashversion = 0;
			for(var i=10; i>0; i--){
				try{
					var flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
					this.flashversion = i;
					this.flashinstalled = 2;
					break;
				}
				catch(e){
				}
			}
	   }
	},
	
	check : function(minVersion, divName, messageInvalidVersion, messageNotInstalled){
		this.detect();
		if(this.flashinstalled == 2){
			if(this.flashversion < minVersion){
				this.messageDiv = document.getElementById(divName);
				if(this.messageDiv){
					this.messageDiv.innerHTML = messageInvalidVersion;
				}
			}
		}else{
				this.messageDiv = document.getElementById(divName);
				if(this.messageDiv){
					this.messageDiv.innerHTML = messageNotInstalled;
				}
		}
	},
	isDigit : function(num) {
		if (num.length>1){return false;}
		this.string="1234567890";
		if (this.string.indexOf(num)!=-1){return true;}
		return false;
	}
}
var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

};
var ACTION_SHOW_ANSWER = 0;
var ACTION_HIDE_ANSWER = 1;
var ACTION_TOGGLE_ANSWER = 2;
var SELECTEDQUESTIONCOLOR = "#C8ECFE";
var currentAnswer = -1;
var interviewTranscriptState=1;

// Entry method (triggered after load)
function init() {
    SVMPlayer.init({
        container_id: 'player',
        swf_width: '320',
        swf_height: '265',        
        c3dmX3NlcnZlcg: 'cnRtcGU6Ly92aWRlby5pbmZvcS5jb20vY2Z4L3N0Lw==',
        c3dmX3ZpZGVvZmlsZQ: jsclassref,
        swf_image_url: 'http://d1snlc0orfrhj.cloudfront.net/static/flash/logo_scrubber.png',
        swf_cue_points_in_s: TIMES,
        xiswf_url: EXPRESSINSTALL_SWF
    });

    SVMPlayerQuestionHighlighter.init({
        cue_points_in_s: TIMES,
        question_class: 'question',
        question_deselected_bgcolor: '#FFF',
        question_selected_bgcolor: SELECTEDQUESTIONCOLOR
    });
}

// Remote control
function goToTime(index) {
    var player_container_id = 'player',
        svm_player = swfobject.getObjectById(player_container_id),
        position_in_ms;

    if (svm_player) {
        position_in_ms = TIMES[index] * 1000;
        svm_player.seek(position_in_ms);
        if (isNaN(svm_player.position())) {
            svm_player.play();
        }
        jQuery.event.trigger("svmplayer__on_cue_point", {
            'container_id': player_container_id,
            'cue_point_index': index,
            'cue_point_position_in_ms': position_in_ms
        });
    }
}

// Show or hide answers
function doAnswer(index, action) {
    var answerDiv = document.getElementById("answer" + index);
    if (answerDiv) {
        switch (action) {
        case ACTION_TOGGLE_ANSWER:
            if (answerDiv.style.display === "none") {
                answerDiv.style.display = "block";
                doActionImage(index, 1);
            } else {
                answerDiv.style.display = "none";
                doActionImage(index, 0);
            }
            break;
        case ACTION_SHOW_ANSWER:
            answerDiv.style.display = "block";
            doActionImage(index, 1);
            break;
        case ACTION_HIDE_ANSWER:
            answerDiv.style.display = "none";
            doActionImage(index, 0);
            break;
        }
    }
}

// Show collapse or expand icon
function doActionImage(index, state) {
    var actionImage = document.getElementById("actionImg" + index);
    if (actionImage) {
        switch (state) {
        case 0: // show expand image (+)
            actionImage.src = ACTION_IMG_EXPAND;
            break;
        case 1: // show collapse image (-)
            actionImage.src = ACTION_IMG_COLLAPSE;
            break;
        }
    }
}

function showAllAnswers() {
    var i,
        max;

	$('#intTranscript').css('max-height', '250px');
	$('#intTranscript').css('height', '250px');
    for (i = 0, max = TIMES.length; i < max; i += 1) {
        doAnswer(i, ACTION_SHOW_ANSWER);
    }
}

function hideAllAnswers() {
    var i,
        max;

	$('#intTranscript').css('max-height', '250px');
	$('#intTranscript').css('height', '250px');
    for (i = 0, max = TIMES.length; i < TIMES.length; i += 1) {
        doAnswer(i, ACTION_HIDE_ANSWER);
    }
}

function fullPageTranscript() {
	if(interviewTranscriptState == 1){
		showAllAnswers();
		$('#intTranscript').css('max-height', '');
		$('#intTranscript').css('height', 'auto');
		interviewTranscriptState = 2;
	}
	else {
		hideAllAnswers();
		$('#intTranscript').css('max-height', '250px');
		$('#intTranscript').css('height', '250px');
		interviewTranscriptState = 1;
	}
}
var SVMPlayer = {
    _cue_points: undefined,
    _opts: undefined,
    _swf_obj: undefined,

    defaults: {
        container_id: 'svmplayer',
        swf_server: undefined,
        c3dmX3NlcnZlcg: undefined,
        swf_streams: undefined,
        c3dmX3N0cmVhbXM: undefined,
        swf_videofile: undefined,
        c3dmX3ZpZGVvZmlsZQ: undefined,
        swf_url: 'http://d1snlc0orfrhj.cloudfront.net/static/flash/svmplayer.swf',
        swf_width: "100%",
        swf_height: "100%",
        swf_version: '10.0.0',
        xiswf_url: 'expressInstall.swf',
        swf_params: { 
            'allowscriptaccess': 'always',
            'allowfullscreen': 'true',
            'wmode': 'opaque'
        },
        swf_image_url: undefined,
        swf_cue_points_in_s: [],
        swf_cue_points_in_ms: [],
        swf_subtitle_srt_url: undefined,
        swf_poll_interval: 333,
        on_initialized: undefined 
    },

    init: function (options) {
        var protocol_domain_match,
            flv_pattern;

        this._check_requirements();
        this._opts = jQuery.extend({}, this.defaults, options);

        if (!this._opts.swf_server && this._opts.c3dmX3NlcnZlcg) {
            this._opts.swf_server = Base64.decode(this._opts.c3dmX3NlcnZlcg);
        }
        if (!this._opts.swf_streams && this._opts.c3dmX3N0cmVhbXM) {
            this._opts.swf_streams = Base64.decode(this._opts.c3dmX3N0cmVhbXM);
        }
        if (!this._opts.swf_videofile && this._opts.c3dmX3ZpZGVvZmlsZQ) {
            this._opts.swf_videofile = Base64.decode(this._opts.c3dmX3ZpZGVvZmlsZQ);
        }

        this._cue_points = jQuery
            .merge(
                this._opts.swf_cue_points_in_ms, 
                jQuery.map(
                    this._opts.swf_cue_points_in_s,
                    function (value, i) {
                        return value * 1000;
                    }
                )
            )
            .sort(
                function (a, b) {
                    return a - b;
                }
            );

        if (!this._opts.swf_streams && this._opts.swf_videofile) {
            // Remove any protocol and domain names first, leaving only the path information.
            protocol_domain_match = /^\w+:\/\/[a-zA-Z0-9\.]+\//.exec(this._opts.swf_videofile);
            if (protocol_domain_match) {
                this._opts.swf_videofile = this._opts.swf_videofile.slice(protocol_domain_match[0].length);
            }
            // Make path information a stream name, defaulting to mp4 files.
            flv_pattern = /\.flv$/;
            if (flv_pattern.test(this._opts.swf_videofile)) {
                this._opts.swf_streams = 'flv:' + this._opts.swf_videofile.slice(0, this._opts.swf_videofile.lastIndexOf('.flv')) + ',0';
            } else {
                this._opts.swf_streams = 'mp4:' + this._opts.swf_videofile + ',0';
            }
        }

        this._embed();
    },

    _check_requirements: function () {
        /*
        Raises exceptions if requirements are not met.
        */
        if (typeof swfobject !== 'object') {
            throw {
                name: 'TypeError',
                message: 'SVMPlayer requires SWFObject as `swfobject`'
            };
        }
        if (typeof jQuery !== 'function') {
            throw {
                name: 'TypeError',
                message: 'SVMPlayer requires jQuery as `jQuery`'
            };
        }
    },

    _embed: function () {
        /* Embeds the player in the DOM. */
        var flashvars;

        flashvars = {
            server: this._opts.swf_server,
            streams: this._opts.swf_streams
        };
        swfobject.embedSWF(this._opts.swf_url, this._opts.container_id,
            this._opts.swf_width, this._opts.swf_height, this._opts.swf_version,
            this._opts.xiswf_url, flashvars,
            this._opts.swf_params, null, this._on_embed_ready);
    },

    _on_embed_ready: function (e) {
        /* 
        Callback triggered by swfobject after embedding the swf object and
        before the player is ready.
        */
        var container_id,
            id;

        if (e.success) {
            container_id = e.ref.id;
            id = e.id;
        }
        jQuery.event.trigger("svmplayer__on_embed", {
            'container_id': container_id,
            'id': id,
            'success': e.success
        });
    },

    _on_player_ready: function () {
        /*
        Callback triggered by the flash component after the initialization
        ended and the JavaScript-API is ready to use.
        Also triggers the `on_initialized` callback with this object and the
        swf player object as arguments.
        */        
        jQuery.event.trigger("svmplayer__on_ready", {
            'container_id': this._opts.container_id
        });

        this._swf_obj = swfobject.getObjectById(this._opts.container_id);

        if (this._opts.swf_image_url) {
            this._swf_obj.splashImage(this._opts.swf_image_url);
        }

        this._swf_obj.cuePoints(this._cue_points.toString());

        if (this._opts.swf_subtitle_srt_url) {
            this._swf_obj.subtitle(this._opts.swf_subtitle_srt_url);
        }

        if (this._opts.on_initialized) {
            this._opts.on_initialized(this, this._swf_obj);
        }
    },

    _on_player_pause: function () {
        /*
        Callback triggered by the flash component after the stream got
        paused.
        */
        if (this._interval_id) {
            jQuery.event.trigger("svmplayer__on_pause", {
                'container_id': this._opts.container_id,
                'position_in_ms': this._swf_obj.position() || 0
            });
            window.clearInterval(this._interval_id);
            this._interval_id = null;
        }
    },

    _on_player_play: function () {
        /*
        Callback triggered by the flash component after the playback of the
        stream started.
        */
        if (!this._interval_id) {
            var that = this;
			jQuery.event.trigger("svmplayer__on_play", {
                'container_id': this._opts.container_id,
                'position_in_ms': this._swf_obj.position() || 0
            });
			this._interval_id = window.setInterval(function(){
				that._on_playing(that);
			}, this._opts.swf_poll_interval);
        }
    },

    _on_player_seek: function (position_in_ms) {
        /*
        Callback triggered by the flash component after the user requested
        to seek in the stream.
        */
        jQuery.event.trigger("svmplayer__on_seek", {
            'container_id': this._opts.container_id,
            'position_in_ms': Math.round(position_in_ms)
        });
        this._on_playing(this);
    },

    _on_player_completed: function () {
        /*
        Callback triggered by the flash component after the playback of the
        stream completed.
        */
        jQuery.event.trigger("svmplayer__on_completed", {
            'container_id': this._opts.container_id
        });
    },

    _on_playing: function (self) {
        /*
        Callback triggered while playing with a reference to the js object.
        */
        var cue_point_index,
            i,
            max,
            position = self._swf_obj.position() || undefined;

        for (i = 0, max = self._cue_points.length; i < max; i += 1) {
            if (self._cue_points[i] < position) {
                cue_point_index = i;
            } else {
                break;
            }
        }
        if (cue_point_index !== undefined) {
            if (self._last_cue_point_index !== cue_point_index) {
                jQuery.event.trigger("svmplayer__on_cue_point", {
                    'container_id': self._opts.container_id,
                    'cue_point_index': cue_point_index,
                    'cue_point_position_in_ms': self._cue_points[cue_point_index]
                });
            }
            self._last_cue_point_index = cue_point_index;
        }
    }
};


var SVMPlayerQuestionHighlighter = {
    /*
    Globals:
        Requires jQuery as `jQuery`
    */

    // Remember what the class will use as private attributes ...
    _cue_points: undefined,
    _opts: undefined,

    defaults : {
        cue_points_in_s: [],  // A list of cue points in seconds (gets merged with cue_points_in_ms)
        cue_points_in_ms: [],  // A list of cue points in milliseconds (gets merged with cue_points_in_ss)
        question_class: null,
        question_deselected_bgcolor: 'white',
        question_selected_bgcolor: 'grey'
    },

    init: function (options) {
        this._opts = jQuery.extend({}, this.defaults, options);

        this._cue_points = jQuery
            .merge(
                this._opts.cue_points_in_ms,
                jQuery.map(
                    this._opts.cue_points_in_s,
                    function (value, i) {
                        return value * 1000;
                    }
                )
            )
            .sort(
                function (a, b) {
                    return a - b;
                }
            );

        if (this._opts.question_class) {
            var that;

            that = this;
            jQuery(document).bind('svmplayer__on_cue_point', function (e, data) {
                jQuery('.' + that._opts.question_class).each(function (index, element) {
                    if (index === data.cue_point_index) {
                        jQuery(element).css('backgroundColor', that._opts.question_selected_bgcolor);
                    } else {
                        jQuery(element).css('backgroundColor', that._opts.question_deselected_bgcolor);
                    }
                });
            });
        }
    }
};


var SVMPlayerSlideProjector = {
    /*
    Globals:
        Requires jQuery as `jQuery`
        Requires swfobject as `swfobject`
    */

    // Remember what the class will use as private attributes ...
    _opts: undefined,

    defaults: {
        container_id: 'svmplayer_slide',
        first_slide_on_load: true,
        slide_links: [],
        width: "100%",
        height: "100%",
        swf_version: '8.0.0',
        swf_params: {   
            'wmode': 'transparent'
        },
        xiswf_url: 'expressInstall.swf'  // The URI of the express install swf
    },

    init: function (options) {
        /* 
        Checks the requirements, updates the options and initializes the
        event listener.
        */
        var that;

        this._check_requirements();
        this._opts = jQuery.extend({}, this.defaults, options);

        that = this;
        jQuery(document).bind('svmplayer__on_cue_point', function (e, data) {
            that._render_slide(data.cue_point_index);
        });

        if (this._opts.first_slide_on_load && this._opts.slide_links) {
            this._render_slide(0);
        }
    },

    _check_requirements: function () {
        /*
        Raises exceptions if requirements are not met.
        */
        if (typeof swfobject !== 'object') {
            throw {
                name: 'TypeError',
                message: 'SVMPlayer requires SWFObject as `swfobject`'
            };
        }
        if (typeof jQuery !== 'function') {
            throw {
                name: 'TypeError',
                message: 'SVMPlayer requires jQuery as `jQuery`'
            };
        }
    },

    _render_slide: function (index) {
        var slide_path,
            swf_pattern;

        slide_path = this._opts.slide_links[index];
        if (slide_path) {
            swf_pattern = /\.swf$/;
            if (swf_pattern.test(slide_path)) {
                this._replace_slide(slide_path);
            } else {
                jQuery('#' + this._opts.container_id).parent().html('<div id="slide" style="visibility:visible;"><img style="width: ' + this._opts.width + '; height: ' + this._opts.height + ';" src="' + slide_path + '" /></div>');
            }
        }
    },
    
    _replace_slide: function(slide_path){
    	// see : http://learnswfobject.com/advanced-topics/load-a-swf-using-javascript-onclick-event/ (to avoid mem leaks and performance problems: remove existing swf and then add new one when you replace swf)
		swfobject.removeSWF(this._opts.container_id);
    	jQuery('#slideContainer').html('<div id="slide"></div>');
    	swfobject.embedSWF(slide_path, this._opts.container_id,
                this._opts.width, this._opts.height,
                this._opts.swf_version, this._opts.xiswf_url, null,
                this._opts.swf_params);
    }
};
