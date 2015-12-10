function Select( ev )
{
var span = ev.srcElement || ev.target;
var td = span.parentNode;
var n = span.id + "r";

var tr = td.parentNode;
var c = td.firstChild;

while( c )
 {
 if( c == span )
 c.className="selected";
 else if( c.className == "selected" )
 c.className = "unselected";
 c = c.nextSibling;
 }

var tBody = tr.parentNode;
var r = tBody.firstChild;
while( r )
 {
 if( r.nodeType == 1 )
 {
 if( r.id == n )
 r.className="visible";
 else if( r.className == "visible" )
 r.className="hidden";
 }
 r = r.nextSibling;
 }
}


function SetTab()
  {
  var url = window.location.toString() ;
  var pos = url.lastIndexOf( "#" ) ;
  if( pos > -1 )
    {
    var tabName = url.substr( pos+2 ) ; //## era + 1
    if( tabName != "" )
      {
      var tab = document.getElementById( tabName ) ;
      var ev = new Object();
      ev.srcElement = tab ;
      Select( ev ) ;
      }
    }
  }
    
function ActivateTab( tabName )
  {
  var url = window.location.toString() ;
  var pos = url.indexOf( "#" ) ;
  if( pos > -1 )
    url = url.substr( 0, pos ) ;
  url = url + "#d" + tabName ;
  isChrome = /chrome/.test( navigator.userAgent.toLowerCase() );
  if( isChrome )
    window.location = url;
  else
    window.location.replace(url);
  SetTab();
  return false;
  }
  
function SelectTab( ev )
{
var span = ev.srcElement || ev.target;
var n = span.id ;
ActivateTab( n ) ;
}
  
