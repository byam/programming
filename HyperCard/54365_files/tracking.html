// Tracking object used to make requests to zag.js. To refresh tracking,
// just call TrackingObject.drawTracking();
var TrackingObject = {
    resolution : screen.availWidth + "x" + screen.availHeight,
	domain: "",
	status: null,
	nodeId: "",
    
	drawTracking : function() {
       // Remove all children of the tracking node. 
	   var trackingNode = document.getElementById(this.nodeId);
	   while (trackingNode.firstChild)  {
         trackingNode.removeChild(trackingNode.firstChild);
       }

	   var output;
//       output = this.domain +'?Log=1';

// Changed by Horace to support New NPP or Old tag generation.
       if (this.domain != null && this.domain != '') {
           output = this.domain +'?Log=1';
       } else {
           output = 'http://' + window.location.host +'/js/stats/zag.js?Log=1';
       }
       output += '&URL=' + (document.location);
       output += '&screenres='+this.resolution;
       output += '&referrer='+document.referrer;
       output += '&cachedefeat=' + (new Date()).getTime() + '-' + Math.floor(Math.random()*1000001);
       output += '&httpStatusCode='+this.status;
		
	   // Create a script node. 
	   var node = document.createElement("script");
	   node.src= output;
	   document.getElementById("zagHolder").appendChild(node);
    },
	
	setDomain : function(domain) {
	  this.domain = domain;
	  },
	  
	setStatus : function(status) {
	  this.status = status;
	  },
	  
	setNodeId : function(nodeId) {
	  this.nodeId = nodeId;
	  }
}