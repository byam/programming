/* empty array to prevent js error in debugging info */
var dartCalls = [];

// dart global code
// Defines a dart object and global random number and tile counter. 
var dart = {
    tile_num : undefined,
    ord : Math.random()*10000000000000000,
    url : "http://ad.doubleclick.net/adj/"
    };


// dart ad reloading code.
// Grabs the DART code from the hidden iframe and places that in the ad's div.
function dartSwap(placement) {
  var frameRef = document.getElementById('dartFrame_'+placement);
  var htmlRef = (frameRef.contentDocument || frameRef.contentWindow.document).getElementById('adHolder').innerHTML;
  // Destroy the content in the iframe. This prevents double ads running (i hope). 
  (frameRef.contentDocument || frameRef.contentWindow.document).location.replace("/nolayout/blankadcontent");
  
  // Now strip out the doubleclick call that ends up in the iframe's innerHTML. This avoids double doubleclick hits.
  htmlRef = htmlRef.toString();
  var regExp = new RegExp(dart[placement].dartCall,'i');
  var frameHTML = new String(htmlRef);
  frameHTML = frameHTML.replace(regExp, '');
  frameHTML = frameHTML.replace(/<script .*?src="\?".*?><\/script>/i,'');
  // Finally plop the iframe's html into the div. 
  document.getElementById('dartTarget_'+placement).innerHTML = frameHTML; 
}

// Goes through all of the ads on the page and refreshes them.
function dartReload() {
  // refresh the ord. 
  dart["ord"] = Math.random()*10000000000000000;
  var adUnits = document.getElementsByTagName('iframe')
  for(i=0; i <adUnits.length;i++) {
   if(adUnits[i].className == 'hiddenDAU') {
     adParts = adUnits[i].id.split('_');
	 if(i == 0) {dart["tile_num"] = undefined; }
	 dartRequest(adParts[1]);
   }
  }	
 }
 
 // Makes a DART request. Request is in hidden iframe. Callback in the iframe calls
 // dartSwap when the ad is finished loading. 
 function dartRequest(posId) {
     if (typeof dart["tile_num"] == "undefined"){ dart["tile_num"]=1;} else { dart["tile_num"]++; }

     var sysparams = 'tile='+dart["tile_num"]+';ord='+dart["ord"],
         dartCall = dart[posId].dartCall,
         dartURL = '/nolayout/displayad';
     
     /* Had to move the function to global.js for added accessibility.
      * @See global.js for dartSiteModifier class
      * rmunson
      */
      if (typeof dartSiteModifier !== 'undefined'){
         dartCall = dartSiteModifier.setSite(dartCall);
      }
     dart[posId].dartCall= dart["url"]+ dartCall + dart[posId].dcopt+dart[posId].placement+sysparams+'?',
     dartURL = dartURL + '?exe=dartSwap("'+posId+'")' + '&req='+dart[posId].dartCall;

  // Disabling and reverting back to document.write code.
  //var x = document.getElementById('dartFrame_'+posId);
  //(x.contentDocument || x.contentWindow.document).location.replace(dartURL);
  
  // Temp document.write code. 
  document.write('<scr'+'ipt type="text/javascript" src="'+dart[posId].dartCall+ '"></scr'+'ipt>');
}

/* RESTORE THIS CODE ONCE WE GO BACK TO IFRAME BASED ADS
//on window load display all ads in Safari.
var detect = navigator.userAgent.toLowerCase();
isSafari = detect.indexOf('safari') + 1;
if(isSafari) {
  var isSafari = 'true';
  addEvent(window, "load", dartReload);
} else {
  var isSafari = 'false';
}

*/
var isSafari = 'false'; // Delete once going back to iframes. 

// Not currently used. 
var debug = {
	log: function(data) {
		var head = document.getElementsByTagName('head').item(0)
		debugCSS = document.createElement('link');
		debugCSS.href = '/css/debug.css';
		debugCSS.type = 'text/css';
		debugCSS.rel = 'stylesheet';
		var body = document.getElementsByTagName('body').item(0)
		var debugLayer = document.getElementById('debug');
		if(!debugLayer) {
			head.appendChild(debugCSS);
			debugLayer = document.createElement('div');
			debugLayer.id = 'debug';
			body.appendChild(debugLayer);
			$('debug').innerHTML = 'Debug Output window <span><a href=\"javascript: $(\'debug\').style.display=\'none\'; void 0;\">[X]Close</a></span><hr>'
		}

		$('debug').innerHTML = $('debug').innerHTML + data + '<br>' ;
	 } 
}
