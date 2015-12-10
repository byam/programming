




/*
     FILE ARCHIVED ON 23:35:26 Jun 29, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:36:43 Mar 2, 2011.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var browserType = ''; 

if (window.addEventListener) 
   browserType = 'FF'; 
else if (window.attachEvent) 
   browserType = 'IE'; 
else 
   browserType = 'OTHER'; 

var lastStatus = ''; 
var elements; 
var inAdFrame = false;
var FFiframeObj;

elements = document.getElementsByTagName("iframe"); 

for (var i = 0; i < elements.length; i++) { 
  if(elements[i].src.indexOf('googlesyndication.com') > -1) 
  { 
    if (document.layers) 
    { 
      elements[i].captureEvents(Events.ONFOCUS); 
    } 
    if (browserType == 'IE') 
    { 
      elements[i].onfocus = IETrapClick; 
    } 
    else if (browserType == 'FF') 
    { 
       elements[i].addEventListener('mouseover', onMoveOverFF, true); 
       window.addEventListener('mouseover', onMoveOutFF, true); 
       window.addEventListener('unload', FFTrapClick, false); 
    } 
    else 
    { 
       elements[i].onfocus = IETrapClick; 
    } 
  } 
} 


function IETrapClick() 
{ 
  var i = 0; 
  window.focus(); 

  if (window.status && (window.status!= lastStatus)) 
  { 
    lastStatus = window.status; 
    adsense_log_url_image = new Image(); 
    adsense_log_url_image.src = 'http://replay.waybackmachine.org/20070629233526/http://www.adsensedetective.com/adclick.php' +
      '?src=' + escape(document.location.href) +
      '&tar=' + escape(window.status.substring(6)) + 
      '&ref=' + escape(document.referrer) +
      '&fmt=' + escape(getAdVariable(event.srcElement, 'format')) +  
      '&chn=' + escape(getAdVariable(event.srcElement, 'channel')) +
      '&cbd=' + escape(getAdVariable(event.srcElement, 'color_border')) +
      '&cbg=' + escape(getAdVariable(event.srcElement, 'color_bg')) +
      '&clk=' + escape(getAdVariable(event.srcElement, 'color_link')) +
      '&cul=' + escape(getAdVariable(event.srcElement, 'color_url')) +
      '&ctx=' + escape(getAdVariable(event.srcElement, 'color_text')) +
      '&mid=' + AdDecMember_ID;
  } 
} 

function onMoveOverFF(e) 
{ 
   inAdFrame = true; 
   FFiframeObj = this;
} 

function onMoveOutFF(e) 
{   
   inAdFrame = false; 
} 

function FFTrapClick(e) 
{ 
  var i = 0; 
  
  if (inAdFrame) 
  { 
     adsense_log_url_image = new Image(); 
     adsense_log_url_image.src = 'http://replay.waybackmachine.org/20070629233526/http://www.adsensedetective.com/adclick.php' + 
      '?src=' + escape(document.location.href) +
      '&tar=' + escape("Not Known") + 
      '&ref=' + escape(document.referrer) +
      '&fmt=' + escape(getAdVariable(FFiframeObj, 'format')) +  
      '&chn=' + escape(getAdVariable(FFiframeObj, 'channel')) +
      '&cbd=' + escape(getAdVariable(FFiframeObj, 'color_border')) +
      '&cbg=' + escape(getAdVariable(FFiframeObj, 'color_bg')) +
      '&clk=' + escape(getAdVariable(FFiframeObj, 'color_link')) +
      '&cul=' + escape(getAdVariable(FFiframeObj, 'color_url')) +
      '&ctx=' + escape(getAdVariable(FFiframeObj, 'color_text')) +
      '&mid=' + AdDecMember_ID;             
  } 
} 

function getAdVariable(iframeObj, name) {

  var dc = iframeObj.src; 
  var prefix = name + "=";
  var begin = dc.indexOf("&" + prefix);
  if (begin == -1) {
    begin = dc.indexOf("?" + prefix);
    if (begin == -1) return null;
  } else
    begin += 1;
  var end = dc.indexOf("&", begin);
  if (end == -1)
    end = dc.length;
  
  return unescape(dc.substring(begin + prefix.length, end));
}

var impImg = new Image(); 
impImg.src = 'http://replay.waybackmachine.org/20070629233526/http://www.adsensedetective.com/adimpcount.php' +
             '?src=' + escape(document.location.href) +
             '&ref=' + escape(document.referrer) +
             '&mid=' + AdDecMember_ID;
             
