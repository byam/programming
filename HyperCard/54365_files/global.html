//mobify include
var _mm = "http://m.wired.com/";

(function() {
    if(document.domain.indexOf("howto.wired.com")>=0) {
        return;
    }
    if(document.domain.indexOf("wired.com")>=0) {
        var m = document.createElement('script'); m.type = 'text/javascript'; m.async = true;
        m.src = 'http' + (document.location.protocol[4] == 's' ? 's' : '') + '://m.wired.com/mobify/redirect.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(m, s);
    }
 })();
//end mobify

function addLoadEvent(func) {
          var oldonload = window.onload;
          if (typeof window.onload != 'function') 
          {
            window.onload = func;
          } 
          else 
          {
            window.onload = function() 
            {
            oldonload();
            func();
            };
          }
        }
        
/*
 * (c)2006 Jesse Skinner/Dean Edwards/Matthias Miller/John Resig
 * Special thanks to Dan Webb's domready.js Prototype extension
 * and Simon Willison's addLoadEvent
 *
 * For more info, see:
 * http://www.thefutureoftheweb.com/blog/adddomloadevent
 */
 
addDOMLoadEvent = (function(){
    // create event function stack
    var load_events = [],
        load_timer,
        script,
        done,
        exec,
        old_onload,
        init = function () {
            done = true;

            // kill the timer
            clearInterval(load_timer);

            // execute each function in the stack in the order they were added
            while (exec = load_events.shift())
                exec();

            if (script) script.onreadystatechange = '';
        };

    return function (func) {
        // if the init function was already ran, just run this function now and stop
        if (done) return func();

        if (!load_events[0]) {
            // for Mozilla/Opera9
            if (document.addEventListener)
                document.addEventListener("DOMContentLoaded", init, false);

            // for Internet Explorer
            /*@cc_on @*/
            /*@if (@_win32)
                document.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");
                script = document.getElementById("__ie_onload");
                script.onreadystatechange = function() {
                    if (this.readyState == "complete")
                        init(); // call the onload handler
                };
            /*@end @*/

            // for Safari
            if (/WebKit/i.test(navigator.userAgent)) { // sniff
                load_timer = setInterval(function() {
                    if (/loaded|complete/.test(document.readyState))
                        init(); // call the onload handler
                }, 10);
            }

            // for other browsers set the window.onload, but also execute the old window.onload
            old_onload = window.onload;
            window.onload = function() {
                init();
                if (old_onload) old_onload();
            };
        }

        load_events.push(func);
    }
})();

// for safari 3
function forSafari3() {
    isSafari3 = false; 
    if(window.devicePixelRatio) isSafari3 = true; 
    if(!isSafari3) return false;
    document.getElementById("footer_text_size_widget").style.marginTop = "-2px"; 
}
addLoadEvent(forSafari3);

/*Utility Functions*/
var cnp = window.cnp || {};
cnp.util = {};
cnp.util.getElements = function(classname, tagname, root){
	var all, elements, element;
	if(!root){
		root = document;
	}
	else if(typeof root == "string"){
		root = document.getElementById(root);
	}
	if(!tagname){
		tagname = "*";
	}
	all = root.getElementsByTagName(tagname);
	if(!classname){
		return all;
	}
	elements = [];
	for(var i = 0; i < all.length; i++){
		element = all[i];
		if(cnp.util.isMember(element,classname)){
			elements.push(element)
		}
	}
	return elements;
};
cnp.util.isMember = function(element, classname){
	var classes, whitespace, c; 
	classes = element.className;
	if(!classes){
		return false;
	}
	if(classes == classname){
		return true;
	}
	whitespace = /\s+/;
	if (!whitespace.test(classes)){
		return false;
	}
	c = classes.split(whitespace);
	for(var i = 0; i < c.length; i++){
		if (c[i] == classname){
			return true;
		}
	}
	return false;
};
cnp.util.makeElement = function(args){
	var element;
	var tagName = args.tagName;
	var attributes = args.attributes;
	var children = args.children; 
	element = document.createElement(tagName);
	if(attributes){
		for(var prop in attributes){
			if(attributes.hasOwnProperty(prop)){
				element[prop] = attributes[prop];
			}
		}
	}
	if(children){
		for(var i=0; i<children.length; i++){
			element.appendChild( children[i]);
		}
	}
	return element;
};
cnp.util.isDescendant= function(ancestor, descendant){
	if(!ancestor || !descendant) return;
	try{
		var similarDescendants = ancestor.getElementsByTagName(descendant.nodeName);
		for(var i=0; i<similarDescendants.length; i++)
			if( similarDescendants[i] == descendant ) return true;
	}catch(e){
		//console.dir(e);
	}
	return false;
};
cnp.util.getAncestors = function(element){
	var parents = new Array( );
	while( element.parentNode ){
		if( element.parentNode.nodeType == 1 )
			parents.push(element.parentNode);
			element = element.parentNode;
	}
	return parents;
};
cnp.util.getOffsetParents = function(element){
	var offsetParents = new Array( );
	while( element.offsetParent ){
		if( element.offsetParent.nodeType == 1 )
			offsetParents.push(element.offsetParent);
			element = element.offsetParent;
	}
	return offsetParents;
};
cnp.SelectNavigator = function(element){
    this.element = element;
    this.element.onchange = function(){
        var destination = this.options[this.selectedIndex].value;
        if(destination.match(/http.*/)){ 
            window.open(destination);
        }
    }
};
/* end utilities*/

function setShellBG()
{
    var shellEl = "";
    if ( document.getElementById("shell") != null )
    {
        shellEl = document.getElementById("shell");
        shellEl.style.background = '#000';
    } 
}

// addLoadEvent(setShellBG);
   
/* begin common cookie functions.  see http://techweb/javascript_commons/docs/cookies.html for documentation. */
/* Set cookie value */
function setCookie(name, value, escapeValue, expires, path, domain, secure) {

    var cookieToken = name + '=' + ((escapeValue) ?  escape(value) : value) + ((expires) ? '; expires=' + expires.toGMTString() : '') + ((path) ? '; path=' + path : '') + ((domain) ? '; domain=' + domain : '') + ((secure) ? '; secure' : '');
    document.cookie = cookieToken;

}

/* Get cookie value */
function getCookie(name) {
    var allCookies = document.cookie;
    
    var cookieName = name + "=";
    var start = allCookies.indexOf("; " + cookieName);
    
    if (start == -1) {
        start = allCookies.indexOf(cookieName);
        if (start != 0) return null;
    }
    else start += 2;
    
    var end = document.cookie.indexOf(";", start);
    if (end == -1) end = allCookies.length;
    
    return unescape(allCookies.substring(start + cookieName.length, end));
}

/* Delete a cookie */
function deleteCookie(name, path, domain) {
    var value = getCookie(name);
    if (value != null) document.cookie = name + '=' + ((path) ? '; path=' + path : '') + ((domain) ? '; domain=' + domain : '') + '; expires=Thu, 01-Jan-70 00:00:01 GMT';
    return value;
}

/* Test for cookie support */
function verifyCookieSafe() {
    setCookie('pingCookies', 'hello');
    if (getCookie('pingCookies')) return true;
    else return false;
}

/* end common cookie functions. */

/* begin text size widget */
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() { 
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

window.onunload = function(e) {
    var title = getActiveStyleSheet();
    //var expiration = new Date();
    //var expDuration = expiration.getTime() + (365*24*60*60*1000);
    //expiration.setTime(expDuration);
    setCookie("style", title, false, "", "/", "", false);
}

var textPref = getCookie("style");
var title = textPref ? textPref : getPreferredStyleSheet();
setActiveStyleSheet(title);

/* end text size widget */


function showSponsorTxt() {
    var sponsorEl = "";
    var popularEl = "";
    var multimediaEl = "";
    var adImg = "";
    var popularAdImg = "";
    var multimediaAdImg = "";
    if ( document.getElementById("sponsor") != null )
    {
        sponsorEl = document.getElementById("sponsor");
        
        adImg = sponsorEl.getElementsByTagName('img');
        
        if ( adImg.length != 0 )
        {
            for (var i=0; i < adImg.length; i++)
            {
            
                if (adImg[i].width > 1 && document.getElementById("byTxt") != null )
                    document.getElementById("byTxt").style.display = "block";
            
            }
        }
    
    } 
    if ( document.getElementById("popular_sponsor") != null )
    {
        popularEl = document.getElementById("popular_sponsor");
        
        popularAdImg = popularEl.getElementsByTagName('img');
        
        if ( popularAdImg.length != 0 )
        {
            for (var i=0; i < popularAdImg.length; i++)
            {
            
                if (popularAdImg[i].width > 1 && document.getElementById("popular_byTxt") != null )
                    document.getElementById("popular_byTxt").style.display = "block";
            
            }
        }
    
    }
    
    if ( document.getElementById("sponsorMM") != null )
    {
        multimediaEl = document.getElementById("sponsorMM");
        
        multimediaAdImg = multimediaEl.getElementsByTagName('img');
        
        if ( multimediaAdImg.length != 0 )
        {
            for (var i=0; i < multimediaAdImg.length; i++)
            {
            
                if (multimediaAdImg[i].width > 1 && document.getElementById("byTxtMM") != null )
                    document.getElementById("byTxtMM").style.display = "block";
            
            }
        }
    
    }  

}
addLoadEvent(showSponsorTxt);

// Social Sites Dropdown
// no longer used with new social bookmarking
function showHideSocial(obj) {
    
    var hiddenList = "";
    
    if ( document.getElementById("hidden_list") != null )
    {
    
        hiddenList = document.getElementById('hidden_list');
        if (obj.id == 'hidden_list'){
            hiddenList.style.display = 'none';
        } else {
            hiddenList.style.display = 'block';
        }
    }
}

// new SocialBkmrking 
/*function diggitAdjust() {
    var diggitCont = $("sb_art_diggit");
    var diggitImg = diggitCont.getElementsByTagName("img");
    if(diggitCont) {
        var numDiggs = diggitCont.getElementsByClassName("dl");
        for(var i=0; i<numDiggs.length; i++){
            alert("numDiggs"+i);
            //numDiggs[i].style.cssFloat = "right"; //styleFloat in ie
            //numDiggs[i].style.right = "20px"
        }
        //new Insertion.before
        for(var j=0; j<diggitImg.length; j++) {
            diggitImg[j].style.height = "30px";
        }
    }
    else return false; 
}
addLoadEvent(diggitAdjust);*/

//Set up Select elements in footer to link to pages (in option values) in a new window
addLoadEvent(
    function(){
        var footerSelects = document.getElementById('drop_downs');
        if(footerSelects) {
            var fSelects = footerSelects.getElementsByTagName('SELECT');
        
            for(var i=0; i<fSelects.length; i++){
                var select = new cnp.SelectNavigator(fSelects[i]);
            }
        }
    });

// Popup Window with auto centering
function launchWindow(url, maxW, maxH){

    offset = 100;

    LeftPosition = (screen.width) ? (screen.width-maxW)/2 : 0;
    TopPosition = (screen.height) ? ((screen.height-maxH)/2)-offset : 0;

    var w = window.open ( url, 'myWindow', 'width='+maxW+', height='+maxH+', top='+TopPosition+', left='+LeftPosition+',scrollbars=yes,location=yes,menubar=yes,status=yes,toolbar=yes,resizable=yes');
    w.focus();

}

// Popup window for video library items, from style.com (only difference with the above is that 
//  below has all options turned off)
function popUpVideoConsole(url) {
    var detWindow="";
    detWindow=window.open(url,'videoConsole','menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,width=1050,height=723');
   }
   

//Google Search validation: Don't submit if no search query
function validateSearch(formName) {
    if(formName.elements["query"].value == "") {
        return false;
    } else {
        if(document.getElementById('ns_filter').value == 'bc_video') {
			location.href = "http://www.wired.com/video/search/" + formName.elements["query"].value;
            return false;
        }
        return true;
    }
}

function setSearchDefaults(query, sitename, targetSearchForm) {
    if(targetSearchForm!="" && query!="") {
        document.forms[targetSearchForm].query.value=query;
    }
    if(targetSearchForm!="" && sitename!="") {
        for(i=0;i<document.forms[targetSearchForm].siteAlias.options.length;i++) {
            if(document.forms[targetSearchForm].siteAlias.options[i].value==sitename) {
                document.forms[targetSearchForm].siteAlias.options[i].selected=true;
            }
        }
    }
}

// function to get login status
function loginStatus() {
    var cookies = document.cookie;
    var loginLink = document.getElementById("login_link");
    var logoutLink = document.getElementById("logout_link");
    
    // see if wired_reddit cookie exists
    var redditCookie = cookies.indexOf("wired_reddit=");
    
    if(!loginLink && !logoutLink) return false;
    if(redditCookie != -1) {
        loginLink.style.display = "none";
        logoutLink.style.display = "inline";
    } else {
        loginLink.style.display = "inline";
        logoutLink.style.display = "none";
    }
}
addLoadEvent(loginStatus);


function myAlert(e) {
   //alert(e);
}

// IE6 functions

// cache css bg images for IE6
if ( document.all )
{  
    try {
      document.execCommand("BackgroundImageCache", false, true);
    } catch(err) {}
}

  
// support for loading RSS Feeds

function chopItems(contentString){
	var titleLinkMap = new Array();
	try{
		var regex  =  new RegExp("<item(?:\s|.)*?>(?:\s|.)*?<\/item>","g");
		var regexTitle  =  new RegExp("<title(?:\s|.)*?>((?:\s|.)*?)<\/title>","g");
		var regexLink  =  new RegExp("<link(?:\s|.)*?>((?:\s|.)*?)<\/link>","g");
		var matches = contentString.match(regex);
		var upperLimit = matches.length > 5 ? 5 : matches.length;
		for(var i=0;i<upperLimit;i++){
			var itemString = matches[i];
			itemString.match(regexTitle);
			var titleString = RegExp.$1;
			itemString.match(regexLink)[0];
			var linkString = RegExp.$1;
			var obj = {title:titleString,link:linkString};
			titleLinkMap.push(obj);
		}
	}catch(e){
		alert(e);
	}
	return titleLinkMap;
}


function populateFeeds(urlValue,containerId){
	var date = new Date();
	var params = "urlVal="+urlValue+"&ts="+date.getTime();
	new Ajax.Request('/nolayout/rssproxy', {
		method: 'get',
		crossSite:true,
		parameters:params,
		onSuccess: function(transport) {
			var responseXML = transport.responseText;
			var itemLinkArray = chopItems(responseXML);
			
			
			var containerTd = document.getElementById(containerId);
			var wrapperDiv = document.createElement("div");
			wrapperDiv.className = "rss-box";

			var ulNode = document.createElement("UL");
			ulNode.className = "rss-items";

			wrapperDiv.appendChild(ulNode);
			containerTd.appendChild(wrapperDiv);
			
			var len = itemLinkArray.length;

			for(var i=0;i < len;i++){
				var myItem = itemLinkArray[i];
				var liNode = createLinkNode(myItem.title,myItem.link);
				ulNode.appendChild(liNode);
			}
			
		},
			
	onFailure: function(transport) {
		alert('f');
	 }

	});
	
}

function createLinkNode(title,link){
	var liNode = document.createElement("LI");
	liNode.className = "rss-item";
				
	var hrefNode = document.createElement("A");
	hrefNode.target = "_self";
	hrefNode.title = title;
	hrefNode.href = link;
	hrefNode.appendChild(document.createTextNode(title));
	hrefNode.className = "rss-item";
	
	liNode.appendChild(hrefNode);

	return liNode;
}


function getXMLDom(stringValue){
	var doc = null;
	if (window.ActiveXObject)
	{
		doc=new ActiveXObject("Microsoft.XMLDOM");
		doc.async="false";
		doc.loadXML(stringValue);
	}
	else
	{
		var parser=new DOMParser();
		doc=parser.parseFromString(stringValue,"text/xml");
	}
	return doc;
}


/* Parses URL Pathname 
        Author: Jamie L. Marin, Senior Web Developer 
        Date: June !5, 2005 
*/ 

/* Sets varibles for URI pathname and pathname length */ 
var browserURI = location.pathname; 
var uriLength = browserURI.length; 

/* Creates Array */ 
var directories = new Array( ); 

/* Find out indexes of first, next, and last slashes */ 
var startSlash = browserURI.indexOf('/'); 
var nextSlash =  browserURI.indexOf('/', startSlash + 1); 
var lastSlash = browserURI.lastIndexOf('/'); 
var slashCount = 0; 

/* test for one deep section */ 
if (startSlash == lastSlash) 
{ 
        directories[slashCount] = location.pathname.slice(startSlash + 1); 
} 


/* Loop to define sections from 1 to N */ 
while (startSlash != lastSlash || nextSlash != -1) 
{ 
        directories[slashCount] = location.pathname.substring(startSlash + 1,nextSlash);        
        
        if (lastSlash + 1 != uriLength) 
                directories[slashCount +1] = browserURI.slice(nextSlash + 1); 
                
        startSlash = nextSlash; 
        nextSlash =  browserURI.indexOf('/', startSlash + 1);           
        slashCount++;   
} 

var paths = new Array( ); 

function parsePath(path) { 
    var pathLength = path.length;    
    
    var sSlash = path.indexOf('/'); 
    var nSlash =  path.indexOf('/', sSlash + 1); 
    var lSlash = path.lastIndexOf('/'); 
    var sCount = 0; 
    
    if (sSlash == lSlash) 
    { 
        paths[sCount] = path.slice(sSlash + 1); 
    }    
    
    /* Loop to define sections from 1 to N */ 
    while (sSlash != lSlash || nSlash != -1) 
    { 
        paths[sCount] = path.substring(sSlash + 1,nSlash);      
        
        if (lSlash + 1 != pathLength) 
                paths[sCount +1] = path.slice(nSlash + 1); 
                
        sSlash = nSlash; 
        nSlash =  path.indexOf('/', sSlash + 1);                
        sCount++;       
    }    

} 

/* Set User Friendly Variables */ 
var firstDir = directories[0]; 
var lastDir = directories[directories.length-1]; 

/* set Omni-friendly path */ 
var omniHierarchy = ""; 
for (var i=0; i<directories.length; i++) { 
    omniHierarchy += directories[i]; 
    if (i != directories.length - 1) 
        omniHierarchy += ","; 
} 

var setPageType = "";
var setProp1 = "";
var setProp2 = "";
var setProp3 = "";
var setProp5 = "";
var setProp6 = ""; 
var setProp7 = ""; 
var setProp8 = ""; 
var setProp9 = ""; 

var setEvents = "";

if (directories[0] == "") {
    setProp6 = "homepage"; 
    omniHierarchy = "homepage"; 
}
if (directories.length >= 1 && directories[0] != "") 
    setProp6 = directories[0]; 
if (directories.length >= 2) 
    setProp7 = setProp6 + '/' + directories[1]; 
if (directories.length >= 3) 
    setProp8 = setProp7 + '/' + directories[2];    
if (directories.length >= 4) 
    setProp9 = setProp8 + '/' + directories[3];    
    
function setProps() { 
    setProp6 = ""; 
    setProp7 = ""; 
    setProp8 = ""; 
    setProp9 = ""; 
    if (paths.length >= 1 && paths[0] != "") 
    setProp6 = paths[0]; 
    if (paths.length >= 2) 
        setProp7 = setProp6 + '/' + paths[1]; 
    if (paths.length >= 3) 
        setProp8 = setProp7 + '/' + paths[2];    
    if (paths.length >= 4) 
        setProp9 = setProp8 + '/' + paths[3]; 
} 

function trackData(evnt) {
    s.linkTrackVars="events";
    s.linkTrackEvents=evnt;
    s.events=evnt;
    s.tl(this,'o','AjaxCall');
}
/*	Add Newly Created Nodes to a Container/Element
 **************************************************/
	function DynamicContainer(container){
		this.container = container;
		this.elements = [];
	}
	DynamicContainer.prototype = {
		addChild: function(tagName, attributes){
			var element = cnp.util.makeElement({
				tagName: tagName,    
				attributes: attributes
			});
			this.elements.push(element);
			this.container.appendChild(element);
			return element;
		},
		removeChildren: function(){
			for(var i=0;i<this.elements.length; i++){
				this.elements[i].parentNode.removeChild(this.elements[i]);
				delete this.elements[i];
			}
		}
	};

/* Repurposable Mouseover Dropdown Menu Behavior
 ***********************************************/
 	DropdownMenu.OVER_CLASSNAME = " over";
	DropdownMenu.OPEN_CLASSNAME = " open";
	DropdownMenu.CURRENT_CLASSNAME = " active";
	function DropdownMenu(delay, openFunc, closeFunc){
		this.delay = delay || 250;
		this.openFunc = openFunc;
		this.closeFunc = closeFunc;
		this.items = [];
		this.timerId = {};
		this.isActive = false;
		this.isDisplayed = false;
		//this.handleEvents();
	}
	DropdownMenu.prototype = {
		handleEvents: function(){
			var dropdownMenu = this;
			document.onclick = function(){
				if(!dropdownMenu.isActive && dropdownMenu.isDisplayed){
					dropdownMenu.deactivateAll();
				}
			};
		},
		addList: function(list, triggerClassName, menuClassName){
			var triggerElement, menuElement;
			for(var i=0; i<list.childNodes.length; i++){
				if(list.childNodes[i].nodeName == 'LI' && list.childNodes[i].id != "pn_home"){
					triggerElement = cnp.util.getElements(triggerClassName, null, list.childNodes[i])[0];
					menuElement = cnp.util.getElements(menuClassName, null, list.childNodes[i])[0];
                    this.items.push(new DropdownItem(list.childNodes[i], triggerElement, menuElement, this));
				}
			}
		},
		getItemById: function(listID){
			for(var i=0; i<this.items.length; i++){
				if(this.items[i].itemElement.id == listID){
					return this.items[i];
				}
			}
			return null;
		},
		activate: function(item){
			if(this.timerId){
				window.clearInterval(this.timerId);
			}
			this.deactivateAll();
			item.activate();
			this.setActive(true);
			this.setDisplayed(true);
		},
		deactivate: function(item, delay){
			var currentObj = this;
			this.timerId = window.setTimeout(
				function(){
					item.deactivate();
					currentObj.setDisplayed(false);
				}, 
			delay);
			this.setActive(false);
		},
		deactivateAll: function(){
			for(var i=0; i<this.items.length; i++){
				this.items[i].deactivate();
			}
		},
		setCurrentState: function(id){
			this.getItemById(id).setCurrentState();
		},
		isActive: function(){
			return this.isActive;
		},
		isDisplayed: function(){
			return this.isDisplayed;
		},
		setActive: function(isActive){
			this.isActive = isActive;
		},
		setDisplayed: function(isDisplayed){
			if(isDisplayed){
				this.isDisplayed = true;
			}
			else if(!this.isActive){
				this.isDisplayed = false;
			}
		}
	};

    function DropdownItem(itemElement, triggerElement, menuElement, composite){
        this.itemElement = itemElement;
        this.triggerElement = triggerElement;
        this.menuElement = menuElement;
        this.composite = composite;
        this.delay = this.composite.delay;
        this.autoClose = true;
        this.init();
    }
    DropdownItem.prototype = {
        init: function(){
            var instance = this;
            this.itemElement.onmouseover = function(event){instance.handleItemMouseOver(event);}
            this.itemElement.onmouseout = function(event){
                if(instance.autoClose){
                    instance.handleItemMouseOut(event);
                }
            }
        },
        handleItemMouseOver: function(event){
            var evt, prevElement;
            evt = event || window.event;
            prevElement = evt.relatedTarget || evt.fromElement;
            if(prevElement != this.itemElement && !cnp.util.isDescendant(this.itemElement,prevElement)){
                this.composite.activate(this);
            }
        },
        handleItemMouseOut: function(event){
            var evt, nextElement;
            evt = event || window.event;
            nextElement = evt.relatedTarget || evt.toElement;
            if(nextElement != this.itemElement && !cnp.util.isDescendant(this.itemElement,nextElement)){
                this.composite.deactivate(this, this.delay);
            }
        },
        activate: function(event){
            if(this.menuElement){
                this.setAncestorZIndex('1000');
                this.menuElement.className += DropdownMenu.OPEN_CLASSNAME;
            }
            if(this.triggerElement){
                this.triggerElement.className += DropdownMenu.OVER_CLASSNAME;
            }
            if(this.composite.openFunc){
                this.composite.openFunc();
            }
        },
        deactivate: function(event){
            if(this.menuElement){
                this.setAncestorZIndex('');
                this.menuElement.className = this.menuElement.className.replace(DropdownMenu.OPEN_CLASSNAME, '');
            }
            if(this.triggerElement){
                this.triggerElement.className = this.triggerElement.className.replace(DropdownMenu.OVER_CLASSNAME, '');
            }
            if(this.composite.closeFunc){
                this.composite.closeFunc();
            }
        },
        setAncestorZIndex: function(value){
            var ancestors = cnp.util.getAncestors(this.menuElement);
            for(var i=0; i<ancestors.length; i++){
                ancestors[i].style.zIndex = value;
            }
        },
        setCurrentState: function(){
            this.triggerElement.className += DropdownMenu.CURRENT_CLASSNAME;
        },
        getDelay: function(){
            return this.delay;
        },
        setDelay: function(delay){
            this.delay = delay;
        },
        setAutoClose: function(autoClose){
            this.autoClose = autoClose;
        },
        getComposite: function(){
            return this.composite;
        },
        setComposite: function(composite){
            this.composite = composite;
        }
    };

/*  Global Nav Specific
 ***********************/
     var globalNav = {
         init: function(subId, menu){
             this.menu = menu;
             this.subId = subId;
             this.setupSubItem();
             this.initSearch();
             this.initSignIn();
         },
         setupSubItem: function(){
            var subItem, closeBtn, gNav = this;
            subItem = this.menu.getItemById(this.subId);
            closeBtn = document.createElement('A');
            closeBtn.id = 'gh_close_sub_flyout';
            closeBtn.onclick = function(){gNav.menu.deactivate(subItem)};
            if(subItem.menuElement) {
                subItem.menuElement.appendChild(closeBtn);
                var closeBehavior = function(){
                    var subForm = subItem.menuElement.getElementsByTagName("FORM")[0];
                    if(subForm){
                        subForm.onclick = function(){
                            subItem.setAutoClose(false);
                        }
                    }
                }
                setTimeout(closeBehavior,0);
                addLoadEvent(closeBehavior);
            }
         },
         initSearch: function(){
            /*go button rollover*/
            if(document.location.href.indexOf('/user') != -1){
                return;
            }
            var submitBtn = document.getElementById('gs_submit');
            if(submitBtn) {
                submitBtn.onmouseover = function(){this.src = 'http://www.wired.com/images/global_header/submit_over.gif';};
                submitBtn.onmouseout = function(){this.src = 'http://www.wired.com/images/global_header/submit.gif';};
            }
            var pImg = new Image();
            pImg.src= "http://www.wired.com/images/global_header/submit_over.gif";
         },
         initSignIn: function(){
             var elem = document.getElementById("gh_greeting");
            if(elem){
                var siText = "Sign In";
                var siHref = "/user/login";
                if(isLogged()){
                    siText = "Sign Out";
                    siHref = "/user/logout";
                    elem.appendChild(
                        cnp.util.makeElement({
                            tagName: "SPAN",
                            attributes:{className: "gh_username", innerHTML: "Hi, " + getUserName() + "&nbsp;&#124;&nbsp;"},
                            children:[]
                        })
                    );
                }
                if( location.href.indexOf('blog.wired')!=-1){
                    siHref = "http://www.wired.com" + siHref;
                }
                elem.appendChild(
                    cnp.util.makeElement({
                        tagName: "A",
                        attributes:{innerHTML: siText, href: siHref},
                        children:[]
                    })
                );
                elem.innerHTML += "&nbsp;&#124;";
            }
             function isLogged(){
                return (document.cookie.indexOf("wired_reddit=") != -1);
             }
             function getUserName(){
                 return getCookie("amg_user_info");
             }
         }
    };

    getUrlDartKeywords = function(){
        urlKwArray = document.location.pathname.split('/');
        urlKwStr = '';
        for(i=0; i<urlKwArray.length; i++){
            urlKwStr += urlKwArray[i].length > 0 ? 'kw=' + urlKwArray[i] + ';' : '';
        }
        return urlKwStr;
    }
    var urlDartKeywords = getUrlDartKeywords();
    
    
/**
 * Temporary hack to disable clickableimages in blogs pages
 */
    var stopClickableImages = function(){
        var content = document.getElementById("content");
        if(content){
            var entries = cnp.util.getElements("entry", "DIV", content);
            for(var i=0; i<entries.length; i++){
               var wpEntry = new WPEntry(entries[i]);
               wpEntry.init();
               wpEntry.override();
            }
        }
    };
    function WPEntry(entry){
        this.entry = entry;
        this.images = entry.getElementsByTagName("IMG");
        this.anchors = [];
    }
    WPEntry.prototype = {
        init: function(){
            for(var i=0; i<this.images.length; i++){
                if(this.isClickable(this.images[i])){
                    this.anchors.push(this.images[i].parentNode);
                }
            }
        },
        override: function(){
            for(var i=0; i<this.anchors.length; i++){
                this.overrideAnchor(this.anchors[i]);
            }
        },
        overrideAnchor: function(anchor){
            anchor.onclick = function(){
                var imagePath = getPath(this.href);
                window.open(imagePath);
                return false;
            }
            function getPath(href){
                return "http://www.wired.com/" + href.substr(href.indexOf("images_blogs"));
            }
        },
        isClickable: function(image){
            return (image.parentNode.tagName=="A" && image.parentNode.href.indexOf("image.php")!=-1);
        }
    };
    addLoadEvent(stopClickableImages);


/**** Microsoft Audience Extension ****/
function writeMicrosoftAudienceTag() {
    MSEXT_domain = document.location.host.split('.');
    MSEXT_domain = MSEXT_domain[(MSEXT_domain.length - 2)];
    MSEXT_path = document.location.pathname.split('/');
    MSEXT_request = document.location.protocol + "//view.atdmt.com/action/MSFT_CondeNet_AE_ExtData/v3/atc1." + MSEXT_domain;
    MSEXT_request += (MSEXT_path[1] != '') && (MSEXT_path[1] != undefined) ? "/atc2." + MSEXT_path[1] : '';
    MSEXT_request += (MSEXT_path[2] != '') && (MSEXT_path[2] != undefined) ? "/atc3." + MSEXT_path[2] : '';
    MSEXT_request += '/';
    var footerId = document.getElementById("footer");
    var newElem = document.createElement("img");
    newElem.src = MSEXT_request;
    newElem.height = "1";
    newElem.width = "1";
    if(footerId)
        footerId.appendChild(newElem);
}
addLoadEvent(writeMicrosoftAudienceTag);
/**************************************/

//check if no ad is being served and hide container div if so
function detectPushdownAd() {
    if (document.getElementById('pushdownAd'))
    {
		var pushdownAd = document.getElementById('pushdownAd');
		
		var pushdownAdHeight = pushdownAd.offsetHeight;
		
		if ( pushdownAdHeight <= 60)
			pushdownAd.style.display = "block";
    }
}

// remove the trailing slash and pagination (/all, or /2, for example)
// from the ends of blog permalink urls for the omniture s.pageName param
function scrubStatsBlogPermalinkPageName() {
    pathArray = window.location.pathname.split('/');

    var lastPathElement;
    do {
        lastPathElement = pathArray.pop();
    } while(!lastPathElement || lastPathElement.length == 0);

    paginationFilter = /^([0-9]+|all)$/
    if(!paginationFilter.test(lastPathElement)) {
        pathArray.push(lastPathElement);
    }

    s.pageName = window.location.protocol + '//' + window.location.hostname + pathArray.join('/');
}


/* Dart Site modifier class for iPad ua detection.
 * Appends the suffic '.ipad' to the dart site for ipad
 * specific targeting.
 * @see dartCall.js for usage
 */
var dartSiteModifier = (function(ua){
    var suff="",
        pat=/.*\.[\w\.]+\/.*/;

    //If browser is iPad based, add the iPad specific dart string.
    if (ua.indexOf('ipad')!==-1){
            suff ='.ipad';
    }

    return {
        setSite : function(dartCall){
            return dartCall.match(pat)[0].split('/').join(suff+'/');
        }
    }
 })(navigator.userAgent.toLowerCase());


/**** Temporarily change search combo boxes ****/
function removeChildNodes(ctrl) {
  while (ctrl.childNodes[0])
  {
    ctrl.removeChild(ctrl.childNodes[0]);
  }
  return;
}

function updateSearchOptions() {
    var search;
	search = document.getElementById('gs_search_form');
	wikiSearch = document.getElementById('wiki_nav_search');
	var location = ""; //only change location for howto since it is in a subdomain
    if(wikiSearch) {
        location = "http://www.wired.com";
        search.action = location + "/search";
    }
	if(search) {
        var searchSelect = document.getElementById('cx');
		search.onsubmit = function(){
				if(this.elements["query"].value == ""){
					return false;
				}else{
					if(searchSelect.value == 'bc_video'){
					    window.location.href = location + '/video/search/' + this.elements["query"].value;
						return false;
					} else if(searchSelect.value == "wiki"){
					    var newNode = document.createElement("input");
						newNode.setAttribute("type", "hidden");
						newNode.setAttribute("name", "search");
						newNode.setAttribute("value", document.getElementById("q").value);
						search.appendChild(newNode);
						search.action = "http://howto.wired.com/wiki/Special:Search";
					}
					return true;
				}
	    };
    }
}

addLoadEvent(updateSearchOptions);
/**************************************/

/**
 * get url parameter
 **/
function gup(name) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
						  var regexS = "[\\?&]"+name+"=([^&#]*)";
						  var regex = new RegExp( regexS );
						  var results = regex.exec( window.location.href );
						  if( results == null )
						  return "";
						  else
						  return results[1];
}


if(typeof CN!=='undefined' && CN.dart && CN.dart.register){
/** CN.dart ad plugin for wired specific functionality
 *  Define coniditions, and register with CN.dart via register method
 */

CN.dart.register(CN.dart.wired = (function(){
    var pars=CN.url.params(),

        // Switch to embedded frames by default
        ret={
            embed : true
        },

        //Plugin interface method
        init=function(){
            return ret;
        };
    
    // Check for npu param, and toggle dcopt off if present
    if(pars.npu==='1'){
        (ret=ret || {}).dcopt = false;
    }

    // Check for ybf1 param, and add to global kw list if present
    if(pars.ybf1==='1'){
        ret=ret || {},
        (ret.ad=(ret.ad || {})).kws=['ybf1'];
    
    }

    return {
        // If conditions exist to modify ad common settings, define interface
        // or return false to skip processing
        init : ret ? init : false,
        name : 'Wired Ad Modifiers'    
    }

})(CN))

}
