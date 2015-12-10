/**
 * @author Paul Tepper Fisher -- May 1, 2007
 * 
 */

var EventBroker = Class.create();
EventBroker.prototype = {
_eventListeners: {},
	
initialize: function() {
	this._eventListeners = {};
},	
	
    
addEventListener: function(eventType, context, handler) {
	CommentBroker.prototype.trace("addedEvent: " + eventType + " " + context + " " + handler);
	if (this._eventListeners[eventType] == undefined) {
		this._eventListeners[eventType] = [];
	}
	this._eventListeners[eventType].push({context: context, handler: handler});
},
removeEventListener: function(eventType, context) {
	if (this._eventListeners[eventType] != undefined) {
		this._eventListeners[eventType] = this._eventListeners[eventType].findAll(function(listener) {
																				  return listener.context.id != context.id;
																				  });
		if (this._eventListeners[eventType].length == 0) {
			delete this._eventListeners[eventType];
		}
	}
},
notifyListeners: function() {
	var args = $A(arguments), response = args.pop(), callbackParams = args;
	// Handle multiple events, one at a time
	if (response.events != undefined) {
		response.events.each(function(event) {
							 this.notifyListenersOfEvent(event, callbackParams);
							 });
        // Otherwise, handle single event
	} else if (response.eventType != undefined) {
		this.notifyListenersOfEvent(response, callbackParams);
	}
},
notifyListenersOfEvent: function(event, callbackParams) {
	var listeners = this._eventListeners[event];
	// put event as first argument
	//callbackParams.unshift(event);
	if (listeners && listeners.each) {
		listeners.each(function(listener) {
					   listener.handler.apply(listener.context, callbackParams);
					   });
	}
}
};

var EventListener = Class.create();
EventListener.prototype = {
initialize: function() {
	if (this.id == undefined) {
		var random = Math.floor(Math.random() * 10001);
		this.id = (random + "_" + new Date().getTime()).toString();
	}
}
};

var DOMElement = {
get: function(elementId, type) {
	if ($(elementId)) {
		return $(elementId);
	} else {
		var element = document.createElement(type);
		element.id = elementId;
		return element;
	}
}
};

var CommentBroker = Class.create();
CommentBroker.prototype = {
	// constants
COMMENT_REQ_: "COMMENT_REQ_",
GET_COMMENTS_EVENT: "GET_COMMENTS_EVENT",
ERROR_STATUS: "ERROR",
GETCOMMENTS_URL: "/comments/getcomments",
COMMENTS_PER_PAGE: 10,
COOKIE_NAME: "wired_reddit",
LOGIN_URL: "/user/login",
REGISTRATION_URL: "/user/registration",
REDIRECT_URL: "/user/commentLoginRedirect",
SHOWALLCOMMENTS_PARAM: "showAllComments",
COMMENTID_PARAM: "commentId",
LOGOUT_URL: "/user/logout",
PROFILEUPDATE_URL: "/user/profile_update",
PAGENUM_PARAM: "commentPageNum",
	
	//properties
requestCounter: 0,
activeForm: undefined,
isPendingRequest: false,
requestData: undefined,
requestId: undefined,
baseUrl: undefined,
eventBroker: undefined,
activeScripts: [],
currentCommentKey: undefined,
commentPageRef: undefined,
currentPage: undefined,
includePagination: false, //default for includingpagination -- gets overridden in requestComments
	
	// constructor
initialize: function(url) {
	this.baseUrl = url;
	this.eventBroker = new EventBroker();
},
	
initiateCall: function(eventType, eventListener, requestUrl, url, limit, offset, optionalCommentId) {
	//cache the current "Comment key"
	this.currentCommentKey = url;
	var ssoCookie = this.getSSOCookie();
	var eventId = this.registerEvent("comments", eventListener);
	
	var paramData = $H({url: url, uid: ssoCookie, offset: offset, callback: this.getCallback(), eventName: eventId,  "markdown": true });
	if ((optionalCommentId != undefined) && (optionalCommentId != "")) {
		CommentBroker.prototype.trace("Including commentId: " + optionalCommentId);
		paramData = paramData.merge({id: optionalCommentId, limit: 1});
	} else {
		paramData = paramData.merge({limit: limit});
	}
	var dynScript = this.createScriptRequest(requestUrl, paramData);
	
	CommentBroker.prototype.trace("initiateCall: "  + requestUrl + " data: " + paramData);
	eventListener.setDynamicScript(dynScript);
},
	
createScriptRequest: function(url, paramData) {
	var jsUrl = url + "?" + paramData.toQueryString();
	var temp = document.createTextNode(paramData);
	
	var dynScript = new JSONscriptRequest(jsUrl);
	dynScript.buildScriptTag();
	dynScript.addScriptTag();
	this.activeScripts.push(dynScript);
	return dynScript;
},
	
setCommentPageRef: function(pageRef) {
	if (pageRef == undefined) {
		return;
	}
	if (this.commentPageRef != undefined) {
		CommentBroker.prototype.trace("commentPageRef is already defined -- must be page refresh");
	}
	CommentBroker.prototype.trace("commentPageRef.uid: " + pageRef);
	this.commentPageRef = pageRef;
},
	
getCallback: function() {
	return "commentBroker.handleEvent";
},
	
registerEvent: function(eventType, eventListener) { 
	var eventId = (eventType + "_" + (CommentBroker.prototype.requestCounter++));
	this.eventBroker.addEventListener(eventId, eventListener, eventListener.handleCallbackEvent);	
	return eventId;
},
	
	
handleEvent: function(jsonData, event) {
	this.eventBroker.notifyListenersOfEvent(event, new Array(jsonData));
},
	
handleUserEvent: function(event) {
	this.eventBroker.notifyListenersOfEvent(event, new Array(event));
},
	
initAction: function(actionMode, commentId, uid) {
	if (actionMode == "report" || actionMode == "delete") { 
		this.sendAction(actionMode, commentId, uid);
	} else {
		// we are instead triggering an edit, mod, or reply action
		
	}
},
	
isDev: function() {
	return (document.location.hostname.indexOf("www.wired.com") < 0 );
},
	
getSSOCookie: function() {
	if (this.isDev()) {
		return readCookie(CommentBroker.prototype.COOKIE_NAME);	
	} else {
		return "";
	}
	
},
	
sendAction: function(actionMode, commentId, uid, comment, commentEntity) {
	CommentBroker.prototype.debug("comment: " + comment);
	var actionListener = new CommentActionListener(commentId, uid, actionMode, commentEntity);
	var eventId = this.registerEvent(actionMode, actionListener);
	var ssoCookie = this.getSSOCookie();
	var paramData = $H({action: actionMode, hash: this.commentPageRef.uid, uid: ssoCookie, url: this.currentCommentKey , id: commentId, callback: this.getCallback(), eventName: eventId, "markdown": true });
	if (comment != undefined) {
		CommentBroker.prototype.debug("adding comment to hash.");
		paramData = paramData.merge({comment: comment});
	}
	CommentBroker.prototype.debug("paramData: " + paramData.toQueryString());
	var dynScript = this.createScriptRequest(this.getCommentsUrl(), paramData);
	actionListener.setDynamicScript(dynScript);
},
	
voteAction: function(commentId, uid, vote, commentEntity) {
	CommentBroker.prototype.debug("Voting: " + commentId + " " + vote);
	if (this.commentPageRef != undefined && !this.commentPageRef.isLoggedIn()) {
		CommentBroker.prototype.message("Sorry, you must be logged in in order to vote.");
		return;
	}
	var actionMode = CommentEntity.prototype.MOD_ACTION;
	var actionListener = new VoteActionListener(commentId, uid, vote, commentEntity);
	var eventId = this.registerEvent(actionMode, actionListener);
	var ssoCookie = this.getSSOCookie();
	var paramData = $H({dir: vote, action: actionMode, hash: this.commentPageRef.uid, uid: ssoCookie, url: this.currentCommentKey , id: commentId, callback: this.getCallback(), eventName: eventId });
	var dynScript = this.createScriptRequest(this.getCommentsUrl(), paramData);
	actionListener.setDynamicScript(dynScript);
},
	
	
exception: function(e) {
	var msg = "Exception: ";
	for (prop in e) {
		msg += prop + ": " + e[prop] + "   ";
	}	
	CommentBroker.prototype.error (msg);
},
	
requestComments: function(articleId, pageNum, numCommentsPerPage, includePagination, optionalCommentId) {
	CommentBroker.prototype.debug("RequestingComments: " + articleId + " pageNum: " + pageNum + "include: " + includePagination);
	var commentListener = new CommentListener(articleId, pageNum, (numCommentsPerPage != undefined ? numCommentsPerPage : CommentBroker.prototype.COMMENTS_PER_PAGE), includePagination);
	this.includePagination = includePagination;
	this.currentPage = pageNum;
	//this[currentPage] = pageNum;
	//globalPageNum = pageNum;
	this.initiateCall(CommentBroker.prototype.GET_COMMENTS_EVENT, commentListener, 
					  this.getCommentsUrl(), articleId, 
					  (numCommentsPerPage != undefined ? numCommentsPerPage : CommentBroker.prototype.COMMENTS_PER_PAGE),
					  pageNum, optionalCommentId);
},
	
refreshPage: function() {
	var curPageNum = this.currentPage; 
	if (curPageNum == undefined) {
		alert("Invalid PageNum");
		curPageNum = 0;
	} else {
		//alert("Page: " + curPageNum);
	}
	this.renderPage(curPageNum);
},
	
renderPage: function(pageNum) {
	CommentBroker.prototype.trace("CommentBroker::Rendering Page: " + pageNum + "commentsPerPage: " + this.commentPageRef.commentPageRef.commentsPerPage);
	this.requestComments(this.currentCommentKey, pageNum, this.commentPageRef.commentPageRef.commentsPerPage, this.includePagination);
},
	
setPageNumUrl: function(pageNum) {
	var curLoc = document.location.href;
	if (curLoc.indexOf(CommentBroker.prototype.PAGENUM_PARAM) >= 0) {
		// pagenum in url
		var regex = /(commentPageNum).(\d+)/g;
		var result = curLoc.match(regex);
		var replacedUrl = curLoc.replace(regex, ("$1" + "=" + pageNum));
		if (replacedUrl != undefined) {
			curLoc = replacedUrl;
		}
	} else {
		if (curLoc.indexOf("?") >= 0) {
			curLoc += "&";
		} else {
			curLoc += "?"
		}
		curLoc += CommentBroker.prototype.PAGENUM_PARAM + "="  + pageNum;
	}
	
	document.location = curLoc;
},
	
getSeeAllCommentsLink: function(commentId) {
	var link = document.location.href;
	if (link.indexOf("?") > -1) {
		link += "&";
	} else {
		link += "?";
	}
	link += CommentBroker.prototype.SHOWALLCOMMENTS_PARAM + "=true";
	if (commentId != undefined) {
		link += "&" + CommentBroker.prototype.COMMENTID_PARAM + "=" + commentId;
	}
	return link;
},
	
goToSeeAllCommentsPage: function(commentId) {
	// if commentId is not empty, then it is a permalink
	var link = this.getSeeAllCommentsLink(commentId);
	if (link != undefined) {
		CommentBroker.prototype.debug("Going to: " + link);
		document.location = link;
	}
},
	
getCommentsUrl: function () {
	return (this.baseUrl);
},
	
error: function(message) {
	alert (message);
},
	
debug: function(message) {
	var debug = gup("debugMode");
	if(debug == "true")
		alert(message);
},
	
trace: function(message) {
	var debug = gup("debugMode");
	if(debug == "true")
	 	alert (message);
},
	
	/**
	 * Handles Messages to be displayed to user
	 * @param {String} message
	 */
message: function(message) {
	alert(message);
}
	
	
	
};

var JSONListener = Class.create();
JSONListener.prototype = {
ERROR_STATUS: "ERROR",
CROSS_DOMAIN_HOST: "samgdehd08.advancemags.com",
context: undefined,
scriptRef: undefined,
	
	
	
handleCallbackEvent: function(jsonData) {
	if (jsonData == undefined) {
		CommentBroker.prototype.debug("jsonData is undefined.");
		return;
	}
	var unescapedResponse = unescape(jsonData);
	var jsonObj = JSON.parse(unescapedResponse);
	if (jsonObj == undefined || jsonObj.status == JSONListener.prototype.ERROR_STATUS) {
		CommentBroker.prototype.error("Error parsing JSON response");	
		return;
	} else {
		//extract message from response wrapper
		var jsonData = (jsonObj.responses[0]);
		var uid = jsonObj["hash"];
		CommentBroker.prototype.trace(uid);
		this.doExtraction(jsonData, uid);
		//remove dynamic script tag
		this.removeDynamicScript();
		return jsonData;
	} 	
},
	
removeDynamicScript: function() {
	if (this.scriptRef != undefined) {
		this.scriptRef.removeScriptTag();
	}
},
	
setDynamicScript: function(scriptRef) {
	this.scriptRef = scriptRef;
}
	
};

var TrackingListener = Class.create();
Object.extend(TrackingListener.prototype = {
			  initialize: function() {
			  
			  }, doExtraction: function(data, uid) {
				CommentBroker.prototype.debug("Inside trackingListener");
			  }
			  
}, JSONListener.prototype);


var CommentListener = Class.create();

//CommentListener.prototype = {};
Object.extend(
			  CommentListener.prototype = {
			  articleId: undefined,
			  startPageNum: 0,
			  numCommentsPerPage: undefined,
			  includePagination: false,
			  //constants
			  COMMENT_CONTAINER: "commentContainer",	
			  
			  initialize: function(articleId, pageNum, numCommentsPerPage, includePagination) {
			  this.articleId = articleId;
			  if (pageNum != undefined) {
			  this.startPageNum = pageNum;
			  }
			  this.numCommentsPerPage = numCommentsPerPage;
			  this.includePagination = includePagination;	
			  },
			  
			  doExtraction: function(data, uid) {
			  CommentBroker.prototype.trace("in doExtraction: " + JSON.stringify(data) + " uid: " + uid);
			  var wrapperId = "CommentPage_WrapperElem";
			  var oldWrapper = $(wrapperId);
			  if (oldWrapper != undefined) {
			  oldWrapper.remove();
			  }
			  var commentPageWrapper = document.createElement("DIV");	
			  commentPageWrapper.setAttribute("id", wrapperId);
			  commentPageWrapper.id = wrapperId;
			  
			  var commentPageHolder = $(CommentListener.prototype.COMMENT_CONTAINER);
			  
			  commentPageHolder.appendChild(commentPageWrapper);
			  var commentPage = new CommentPage(commentPageWrapper, this.includePagination, data, uid);
			  commentBroker.setCommentPageRef(commentPage);
			  commentPage.generate();
			  if (commentPage.commentPageRef.pageNum > 0) {
			  // only scroll to top if it isn't an initial load of page
			  var pos = Position.cumulativeOffset(commentPageWrapper);
			  window.scrollTo(0, pos[1]);
			  }
			  
			  }
			  }, JSONListener.prototype);

var CommentActionListener = Class.create();
Object.extend(
			  CommentActionListener.prototype = {
			  commentId: undefined,
			  uid: undefined,
			  actionType: undefined,
			  commentEntity: undefined, // can be either a commentEntity or CommentPage 
			  
			  initialize: function(commentId, uid, actionType, commentEntity) {
			  this.commentId = commentId;
			  this.uid = uid;
			  this.actionType = actionType;
			  this.commentEntity = commentEntity;
			  
			  },
			  
			  doExtraction: function(data, uid) {
			  CommentBroker.prototype.trace("callback from CommentActionListener: " + JSON.stringify(data));
			  if (this.actionType == CommentEntity.prototype.REPORT_ACTION) {
			  CommentBroker.prototype.message("Thank you. This comment will be reviewed by a moderator.");
			  return; // no need to refresh
			  }
			  
			  if (this.commentEntity != undefined) {
			  // we have a reference to a commentEntity or a commentPage
			  /*
 if (this.actionType == CommentEntity.prototype.COMMENT_ACTION) {
 if (data != undefined)
 this.commentEntity.addChildComment(data);
 } else if (this.actionType == CommentEntity.prototype.EDIT_ACTION) {
 this.commentEntity.refreshContent();
 }
 
 */
			  }
			  // do a full refresh of page
			  commentBroker.refreshPage();
			  }
			  
			  }, JSONListener.prototype);

var VoteActionListener = Class.create();
Object.extend(
			  VoteActionListener.prototype = {
			  commentId: undefined,
			  uid: undefined,
			  voteDirection: undefined,
			  commentEntity: undefined, // can be either a commentEntity or CommentPage 
			  
			  initialize: function(commentId, uid, voteDirection, commentEntity) {
			  this.commentId = commentId;
			  this.uid = uid;
			  this.voteDirection = voteDirection;
			  this.commentEntity = commentEntity;
			  
			  },
			  
			  doExtraction: function(data, uid) {
			  CommentBroker.prototype.trace(JSON.stringify(data));
			  if (this.commentEntity != undefined) {
			  CommentBroker.prototype.trace("Displaying Vote results: " + this.voteDirection + " " + (this.commentEntity != undefined));
			  this.commentEntity.updateVote(this.voteDirection);
			  }
			  
			  CommentBroker.prototype.trace("callback from VoteActionListener: " + JSON.stringify(data));
			  commentBroker.refreshPage();
			  }
			  
			  }, JSONListener.prototype);



var CommentPage = Class.create();
CommentPage.prototype = {
commentPageElement: undefined,
commentPageRef: undefined,
enclosingDiv: undefined,
topLevelComments: [],
numCommentsPerPage: undefined,
includePagination: false,
uid: undefined,
commentsWrapper: undefined,
	//constants
COMMENT_PAGE_CLASS: "commentPage",
COMMENTS_WRAPPER_CLASS: "the_comments",
NO_COMMENTS_MESSAGE: "There are no comments",
NUM_COMMENTS_COUNTER_ID: "numCommentsOnPage",
POST_FORM_TEXTAREA_CLASSNAME: "comment_text",
POST_FORM_CLASSNAME: "comment_form",
POST_FORM_TEXTAREA_ID: "comment_text",
POST_FORM_SUBMIT_SRC: "http://www.wired.com/images/comments/comment_but.gif",
LOGIN_CLASSNAME: "login_class",
PAGE_SLIDER_ID: "the_pages",
	
initialize: function(div, includePagination, pageRef, uid) {
	this.enclosingDiv = div;
	this.includePagination = includePagination;
	this.commentPageRef = pageRef;
	this.uid = uid;
},
	/**
	 * Iterates through all the comments within the page, generating a new CommentEntity for each
	 */
generate: function() {
	this.commentPageElement = document.createElement("DIV");
	this.commentsWrapper = document.createElement("div");
	this.commentsWrapper.className = this.COMMENTS_WRAPPER_CLASS;
	this.commentPageElement.className = CommentPage.prototype.COMMENT_PAGE_CLASS;
	this.commentPageElement.appendChild(this.setNumCommentsCounter("Comments (" + this.getTotalComments() + ")"));	
	
	if (this.isLoggedIn()) {
		// show post form
		if (!this.isPermaActive())
			this.commentPageElement.appendChild(this.generatePostForm());
	} else {
		//show login-registration link
		this.commentPageElement.appendChild(this.generateTopLogin());
	}
	
	var matchbook = document.createElement("div");
	matchbook.className = "matchbook_rain_light";
	this.commentPageElement.appendChild(matchbook);
	
	var comment_top = document.createElement("div");
	comment_top.id = "comment_well_top";
	this.commentPageElement.appendChild(comment_top);
	this.renderPagination(comment_top, "top");
	
	this.commentsWrapper.appendChild(document.createComment("Begin Comments"));
	if (this.commentPageRef == null || this.commentPageRef.comments == null || this.commentPageRef.comments.length <= 0) {
		this.displayNoComments();
	} else {
		this.commentPageRef.comments.each(function(curComment) {
										  CommentBroker.prototype.trace("CurComment: " + curComment);
										  var newComment = new CommentEntity(this.commentsWrapper, curComment, null, 0, this);
										  newComment.generate();
										  this.topLevelComments.push(newComment);	
										  }.bind(this));
	}
	this.commentsWrapper.appendChild(document.createComment("End Comments"));
	this.commentPageElement.appendChild(this.commentsWrapper);
	
	var comment_bottom = document.createElement("div");
	comment_bottom.id = "comment_well_bottom";
	this.commentPageElement.appendChild(comment_bottom);
	this.renderPagination(comment_bottom, "bottom");
	
	var matchbook_bot = document.createElement("div");
	matchbook_bot.className = "matchbook_plus";
	this.commentPageElement.appendChild(matchbook_bot);
	
	if (!this.isLoggedIn()) {
		this.commentPageElement.appendChild(this.generateLogin());
	} else {
		this.commentPageElement.appendChild(this.generateLogout());
	}
	
	this.enclosingDiv.appendChild(this.commentPageElement);
	// set count of comments on page
},
	
generateLogout: function() {
	var logoutWrapper = document.createElement("div");
	logoutWrapper.className = CommentPage.prototype.LOGIN_CLASSNAME;
	var logoutUrl = this.getLogoutURL();
	var logoutLink =  this.generateLink(logoutUrl, "Logout");
	var updProfUrl = this.getUpdProfURL();
	var updProfLink = this.generateLink(updProfUrl, "Update Profile");
	logoutWrapper.appendChild(updProfLink);
	var separator = document.createTextNode(" / ");
	logoutWrapper.appendChild(separator);
	
	logoutWrapper.appendChild(logoutLink);
	return logoutWrapper;
},
	
renderPagination: function(commentWellRef, paginationLocation) { 
	CommentBroker.prototype.trace("renderPagination: " + (this.includePagination ? "True" : "False"));
	if (this.isPermaActive() || this.commentPageRef == undefined || this.commentPageRef.totalComments <= 0)
		return;
	if (this.includePagination) {
		// render pagination
		commentWellRef.appendChild(this.generatePagination(paginationLocation));
	} else {
		// no pagination -- just link to See All Page
		commentWellRef.appendChild(this.generateSeeAllLink());
	}
},
	
setNumCommentsCounter: function(counterText) {
	var counterElem = document.createElement("H3");
	counterElem.className = "com_count";
	var countText = document.createTextNode(counterText);
	counterElem.appendChild(countText);
	return counterElem;
},
	
displayNoComments: function() {
	var span = document.createElement("SPAN");
	span.className = "seeall_com";
	var textNode = document.createTextNode(CommentPage.prototype.NO_COMMENTS_MESSAGE);
	span.appendChild(textNode);
	this.commentPageElement.appendChild(span);
},
	
generatePagination: function(paginationId) {
	var paginationWrapper = document.createElement("div");
	var pageSlider = document.createElement("div");
	pageSlider.id = this.PAGE_SLIDER_ID;
	paginationWrapper.className = "num_comments";
	paginationWrapper.id = "pagination_" + paginationId;
	var totalPages = Number(this.commentPageRef.totalPages);
	if (totalPages <= 0)
		return paginationWrapper;
	
	// more than 1 page
	var curPage = this.commentPageRef.pageNum;
	for (var i = 0; i < totalPages; i++) {
		pageSlider.appendChild(this.generatePage(i, curPage));
	}
	var showingText = " " + (this.commentPageRef.commentStartIdx) + "-"  + (this.commentPageRef.commentEndIdx);
	showingText += " of " + this.commentPageRef.totalComments;
	paginationWrapper.appendChild(this.generateSpanElem("Most Recent"));
	paginationWrapper.appendChild(this.generateSpanElem(showingText + " | Page: "));
	paginationWrapper.appendChild(this.generatePageIncrement(-1, this.commentPageRef.isPrevPage == true));
	paginationWrapper.appendChild(pageSlider);
	paginationWrapper.appendChild(this.generatePageIncrement(1, this.commentPageRef.isNextPage == true))
	paginationWrapper.appendChild(this.generateSpanElem("Oldest"));
	return paginationWrapper;		
},
	
generatePageIncrement: function(direction, enabled) {
	var link;
	var eventId = ("page" + "_" + (CommentBroker.prototype.requestCounter++));
	var linkHref =  "javascript:doUserAction('" + eventId + "')";
	if (direction > 0) {
		commentBroker.eventBroker.addEventListener(eventId, this, this.pageUpListener.bind(this));
		link = this.generateLink(linkHref, "Next");
	} else {
		commentBroker.eventBroker.addEventListener(eventId, this, this.pageDownListener.bind(this));
		link = this.generateLink(linkHref, "Previous");
	}
	if (direction > 0) {
		
	} else {
		
	}
	//link.className = (direction > 0 ? "Next" : "Previous");
	if (enabled) {
		link.className = "active_nextprevious";
		/*
		 link.onclick = function(event) {
		 var pageDirection = direction;
		 this.doPagination(pageDirection);
		 }.bindAsEventListener(this);
		 */
	} else {
		link.className = "disabled_nextprevious";
	}
	return link;
},
	
pageUpListener: function() {
	this.doPagination(1);
},
	
pageDownListener: function() {
	this.doPagination(-1);
},
	
doPagination: function(direction) {
	CommentBroker.prototype.trace("Pagination: " + direction);
	var pageNum = this.commentPageRef.pageNum;
	this.renderPage(pageNum + direction);
},
	
generateSpanElem: function(text, spanClass) {
	var spanElem = document.createElement("span");
	var textNode = document.createTextNode(text);
	if (spanClass != undefined) {
		spanElem.className = spanClass;
	}
	spanElem.appendChild(textNode);
	return spanElem;
},
	
generatePage: function(pageNum, curPage) {
	CommentBroker.prototype.trace("generatePage: " + pageNum + " : " + curPage);
	var page = document.createElement("span");
	var pageText = (Number(pageNum) + 1);
	var pageLink = this.generateLink("javascript:void(0);", pageText);	
	if (pageNum != curPage) {
		pageLink.onclick = function() {
			var destPage = pageNum;
			this.renderPage(destPage);
		}.bindAsEventListener(this);
		page.className = "active_page";
		page.appendChild(pageLink);
	} else {
		page.className = "selected_page";
		page.appendChild(document.createTextNode(pageText));
	}
	return page;
},
	
renderPage: function(pageNum) {
	CommentBroker.prototype.trace("Rendering page: " + pageNum);
	commentBroker.renderPage(pageNum);
},
	
generateSeeAllLink: function() {
	var linkDiv = document.createElement("div");
	linkDiv.className = "seeall_com";
	if (this.isSeeAllCommentsActive())
		return linkDiv;
	var linkWrapper = this.generateLink(commentBroker.getSeeAllCommentsLink(), "See All Comments");
	linkDiv.appendChild(linkWrapper);
	return linkDiv;		
},
	
isSeeAllCommentsActive: function() {
	var isShowingComments = (document.location.href.indexOf(CommentBroker.prototype.SHOWALLCOMMENTS_PARAM) > 0);
	return isShowingComments;
},
	
isPermaActive: function() {
	var isShowingComments = (document.location.href.indexOf(CommentBroker.prototype.COMMENTID_PARAM) > 0);
	return isShowingComments;
},
	
getTotalComments: function() {
	if (this.commentPageRef == undefined) {
		CommentBroker.prototype.error("CommentPageRef could not be found");
		return 0;
	}
	return (this.commentPageRef.totalComments) ;
},
	
generatePostForm: function() {
	//CommentBroker.prototype.debug("generatePostForm");
	var postCommentForm = this.createFormElement(CommentPage.prototype.POST_FORM_CLASSNAME, "comment", "form");
	var postTextArea = this.createFormElement(CommentPage.prototype.POST_FORM_TEXTAREA_CLASSNAME, 
											  CommentPage.prototype.POST_FORM_TEXTAREA_ID, "textarea")
	var labelElem = document.createElement("label");
	labelElem.setAttribute("for", CommentPage.prototype.POST_FORM_TEXTAREA_ID);
	var labelText = document.createTextNode("Enter your comment below.");
	labelElem.appendChild(labelText);
	var submitInput = this.createInputElement("input", "postComment");
	submitInput.setAttribute("src", CommentPage.prototype.POST_FORM_SUBMIT_SRC);
	submitInput.setAttribute("type", "image");
	submitInput.onclick = function(event) {
		//TEMPORARY MAINTENANCE -- option. You can add an alert and return false to temporarily disable posting new comments.
		var text = postTextArea.value;
		if (text == undefined || text == "" || text.length <= 0) {
			alert ("You must enter a valid comment before submitting.");
			return false;
		}
		CommentBroker.prototype.debug("text: " + text);
		commentBroker.sendAction("comment", null, this.uid, (text), this);
		postTextArea.value = "";
		// fixes IE submit issues
		if (event && event.preventDefault) event.preventDefault();
		else if (window.event && window.event.returnValue)
			window.eventReturnValue = false;
		return false;
	}.bindAsEventListener(this);
	postCommentForm.appendChild(labelElem);
	postCommentForm.appendChild(postTextArea);
	postCommentForm.appendChild(submitInput);
	postCommentForm.zIndex = 1000;
	postCommentForm.style.zIndex = 1000;
	return postCommentForm;
},
	
addChildComment: function(commentRef) {
	var newComment = new CommentEntity(this.commentsWrapper, commentRef, null, 0, this);
	newComment.generate();
	this.topLevelComments.push(newComment);	
},
	
createFormElement: function(className, inputName, inputType) {
	var elem = document.createElement(inputType);
	elem.setAttribute("name", inputName);
	elem.setAttribute("id", inputName);
	elem.name = inputName;
	elem.id = inputName;
	elem.className = className;
	return elem;
},
	
createInputElement: function(inputType, inputName) {
	var inputElem = document.createElement(inputType);
	inputElem.setAttribute("name", inputName);
	inputElem.name = inputName;
	inputElem.id = inputName;
	return inputElem;
},
	
isLoggedIn: function() {
	if (this.uid == undefined)
		return false;
	var curCookie = document.cookie;
	if (curCookie.indexOf(CommentBroker.prototype.COOKIE_NAME) > -1) {
		// this should be a logged-in user
		//CommentBroker.prototype.trace("wired_reddit cookie found . . . logged in");
		return true;
	} 
	return false;
},
	
getUserName: function() {
	if (this.isLoggedIn()) {
		var username = readCookie("amg_user_info");
		return username;
	} else {
		return undefined;
	}
},
	
generateTopLogin: function() {
	CommentBroker.prototype.trace("generateTopLogin");
	var loginRegWrapper = document.createElement("p");
	loginRegWrapper.className = CommentPage.prototype.LOGIN_CLASSNAME;
	var registrationUrl = this.getRegistrationURL();
	var loginUrl = this.getLoginURL();
	var loginLink =  this.generateLink(loginUrl, "Login");
	var loginText = document.createTextNode("Want to start a new thread or reply to a post?");
	var loginTextTrail = document.createTextNode(" and start talking!");
	var separator = document.createTextNode("/");
	var breaker = document.createElement("br");
	var regLink = this.generateLink(registrationUrl, "Register");
	loginRegWrapper.appendChild(loginText);
	loginRegWrapper.appendChild(breaker);
	loginRegWrapper.appendChild(loginLink);
	loginRegWrapper.appendChild(separator);
	loginRegWrapper.appendChild(regLink);
	loginRegWrapper.appendChild(loginTextTrail);
	return loginRegWrapper;
},
	
generateLogin: function() {
	CommentBroker.prototype.trace("generateLogin");
	var loginRegWrapper = document.createElement("div");
	loginRegWrapper.className = CommentPage.prototype.LOGIN_CLASSNAME;
	var registrationUrl = this.getRegistrationURL();
	var loginUrl = this.getLoginURL();
	var loginLink =  this.generateLink(loginUrl, "Login");
	var separator = document.createTextNode("/");
	var regLink = this.generateLink(registrationUrl, "Registration");
	loginRegWrapper.appendChild(loginLink);
	loginRegWrapper.appendChild(separator);
	loginRegWrapper.appendChild(regLink);
	return loginRegWrapper;
},
	
modifySocialTextHref: function(href, linkName) {
	//modify the href only for these specific linkNames
	if( linkName == "Logout" || linkName == "Update Profile" || linkName == "Login" || linkName == "Register" || linkName == "Registration" ) {
		if(href.indexOf("howto.stag.wired.com") > -1) { //staging
			href = href.replace("howto.stag.wired.com","stag.wired.com");
			href = href.replace("LoginRedirect%3Freturnto%3D","LoginRedirect%3Freturnto%3Dhttp://howto.stag.wired.com");
			href = href.replace("logout?returnto=","logout?returnto=http://howto.stag.wired.com");
			href = href.replace("profile_update?returnto=","profile_update?returnto=http://howto.stag.wired.com");
		}
		else if(href.indexOf("howto.wired.com") > -1) { //production
			href = href.replace("howto.wired.com","www.wired.com");
			href = href.replace("LoginRedirect%3Freturnto%3D","LoginRedirect%3Freturnto%3Dhttp://howto.wired.com");
			href = href.replace("logout?returnto=","logout?returnto=http://howto.wired.com");
			href = href.replace("profile_update?returnto=","profile_update?returnto=http://howto.wired.com");
		}
	}
	return href;
},
	
generateLink: function(href, linkName) {
	var linkWrapper = document.createElement("span");	
	var link = document.createElement("a");
	link.setAttribute("href", href);
	link.href = href;
	link.href = this.modifySocialTextHref(link.href, linkName);
	var linkText = document.createTextNode(linkName);
	link.appendChild(linkText);
	linkWrapper.appendChild(link);
	return linkWrapper;
},
	
generateAdvancedLink: function(href, linkName, className) {	
	var linkWrapper = document.createElement("span");
	var link = document.createElement("a");
	link.setAttribute("href", href);
	link.href = href;
	link.className = className;
	var linkText = document.createTextNode(linkName);
	link.appendChild(linkText);
	linkWrapper.appendChild(link);
	return linkWrapper;
},
	
getReturnTo: function() {
	return "?returnto=";
},
	
getReturnToURL: function() {
	return escape(document.location.pathname + location.search);
},
	
getRedirectURL: function() {
	return CommentBroker.prototype.REDIRECT_URL;
},
	
getRegistrationURL: function() {
	return ( this.getHostName() + CommentBroker.prototype.REGISTRATION_URL + this.getReturnTo() + escape( this.getRedirectURL() + this.getReturnTo() + this.getReturnToURL()) );
},
	
getLoginURL: function() {
	return ( this.getHostName() + CommentBroker.prototype.LOGIN_URL + this.getReturnTo() + escape( this.getRedirectURL() + this.getReturnTo() + this.getReturnToURL()) );
},
	
getLogoutURL: function() {
	return ( this.getHostName() + CommentBroker.prototype.LOGOUT_URL + this.getReturnTo() + this.getReturnToURL() );
},
	
getUpdProfURL: function() {
	return ( this.getHostName() + CommentBroker.prototype.PROFILEUPDATE_URL + this.getReturnTo() + this.getReturnToURL() );
},
	
getHostName: function() {
	return (document.location.protocol + "//" + document.location.host);
}
	
};

var CommentEntity = Class.create();
CommentEntity.prototype = {
parentDiv: undefined,
commentRef: undefined,
parentCommentRef: undefined,
elementType: "DIV",	
commentElement: undefined,
COMMENT_ENTITY_CLASS: "comment",
COMMENT_MAIN_CLASS: "commentMain",
COMMENT_BODY_CLASS: "commentbody",
COMMENT_AUTHOR_CLASS: "commentAuthor",
nestedCommentEntities: [],
nestingLevel: 0,
commentPageRef: undefined,
replyHolder: undefined, 
postForm: undefined,
commentAuthor: undefined, // element that holds author, date, and points spans
commentBody: undefined,
commentMain: undefined,
isSummarized: true,
voteUp: undefined,
voteDown:undefined,
arrowContainerElement: undefined,
	//constants
ARROWS_CLASS: "arrows",
UP_ARROW_CLASS: "uparrow",
DOWN_ARROW_CLASS: "downarrow",
COMMENT_OPTIONS_CLASSNAME: "commentOptions",
COMMENT_ACTION: "comment",
EDIT_ACTION: "replace",
MOD_ACTION: "mod",
PERMA_ACTION: "perma",
REPORT_ACTION: "report",
REPLY_HOLDER_CLASSNAME: "comment_reply",
OPEN_TRIANGLE: "http://www.wired.com/images/comments/tri_closed.gif",
CLOSED_TRIANGLE: "http://www.wired.com/images/comments/tri_open.gif",
VOTE_UP_IMG: "http://www.wired.com/images/comments/arrowupblue2.jpg ",
VOTE_DOWN_IMG: "http://www.wired.com/images/comments/arrowdownred2.jpg",
SPAM_MESSAGE: "Comment Deleted.",
	
initialize: function(parentDiv, commentRef, parentCommentRef, level, commentPageRef) {
	this.parentDiv = parentDiv;
	this.commentRef = commentRef;
	this.parentCommentRef = parentCommentRef;
	this.nestingLevel = level;	
	this.commentPageRef = commentPageRef;
	this.isSummarized = true;
},
	
generate: function() {
	if (this.parentDiv == undefined) {
		CommentBroker.prototype.error("No parentDiv defined!");
		return;
	}	
	this.commentElement = document.createElement(this.elementType);
	this.commentElement.className = this.COMMENT_ENTITY_CLASS;
	this.commentElement.id = "c_" + this.commentRef.commentId;
	this.commentMain = document.createElement(this.elementType);
	this.commentMain.className = this.COMMENT_MAIN_CLASS;
	this.commentBody = this.createCommentContent(this.COMMENT_BODY_CLASS, (this.commentRef.commentBody));
	this.commentAuthor = this.createAuthorContent(this.COMMENT_AUTHOR_CLASS, this.getAuthorName());
	this.arrowContainerElement = this.createVotingArrows();
	this.commentElement.appendChild(this.arrowContainerElement);
	this.commentMain.appendChild(this.commentAuthor); 
	this.commentMain.appendChild(this.commentBody);
	this.commentMain.appendChild(this.createBottomRow());
	this.replyHolder = this.generateReplyHolder();
	this.commentMain.appendChild(this.replyHolder);
	this.commentElement.appendChild(this.commentMain);
	this.parentDiv.appendChild(this.commentElement); 
	
	// recursive generation
	if (this.commentRef.nestedComments != undefined && this.commentRef.nestedComments.length > 0) {
		this.commentRef.nestedComments.each(function(curComment){
											var curCommentEntity = new CommentEntity(this.commentElement, curComment, this.commentRef, (this.nestingLevel + 1), this.commentPageRef);
											curCommentEntity.generate();
											this.nestedCommentEntities.push(curCommentEntity);
											}.bind(this));
	}
},
	
refreshContent: function() {
	var newCommentBody = this.createCommentContent(this.COMMENT_BODY_CLASS, (this.commentRef.commentBody));
	this.commentMain.replaceChild(newCommentBody, this.commentBody);
	this.commentBody = newCommentBody;
},
	
updateVote: function(voteDirection) {
	if (Number(voteDirection) == undefined)
		return; 
	if (this.commentRef.likes == voteDirection) {
		this.commentRef.likes = 0;
		this.commentRef.points -= Number(voteDirection);
	} else {
		this.commentRef.likes = voteDirection;
		this.commentRef.points += Number(voteDirection);
	}
	
	var container = document.createElement("div");
	container.appendChild(this.createVotingArrows());
	$(this.arrowContainerElement).replace(container.innerHTML);
	
},
	
removeArrows: function() {
	$(this.voteUp).remove();
	$(this.voteDown).remove();
},
	
generateReplyHolder: function() {
	var holder = document.createElement("div");
	holder.className = CommentEntity.prototype.REPLY_HOLDER_CLASSNAME;
	return holder;
},
	
createBottomRow: function() {
	var container = document.createElement("div");
	container.className = CommentEntity.prototype.COMMENT_OPTIONS_CLASSNAME;
	var reportSpan = undefined;
	var postSpan = undefined;
	var permaSpan = undefined;
	var editSpan = undefined;
	if (this.commentPageRef.isLoggedIn()) {
		reportSpan = this.createSpanLink("Report", this.generateActionJs(CommentEntity.prototype.REPORT_ACTION), "reportLink");
	}
	if (this.commentPageRef.isLoggedIn()) {
		postSpan = this.createSpanLink("Reply", this.generateActionJs(CommentEntity.prototype.COMMENT_ACTION), "postLink");
	}
	if (this.commentPageRef.isLoggedIn() && this.isCommentAuthor()) {
		editSpan = this.createSpanLink("Edit", this.generateActionJs(CommentEntity.prototype.EDIT_ACTION), "editLink");
	}
	permaSpan = this.createSpanLink("Permalink", this.generateActionJs(CommentEntity.prototype.PERMA_ACTION), "permaLink");
	
	if (reportSpan != undefined) {
		reportSpan.appendChild(this.getActionSeparator());
		container.appendChild(reportSpan);
	}
	if (postSpan != undefined) {
		postSpan.appendChild(this.getActionSeparator());
		container.appendChild(postSpan);
	}		
	if (editSpan != undefined) {
		editSpan.appendChild(this.getActionSeparator());
		container.appendChild(editSpan);
	}
	if (document.location.search.indexOf(CommentBroker.prototype.COMMENTID_PARAM) < 0) {
		container.appendChild(permaSpan);
	} 
	
	return container;
},
	
isCommentAuthor: function() {
	var curUserName = this.commentPageRef.getUserName();
	if (curUserName != undefined && this.commentRef.author != undefined && curUserName == this.commentRef.author.username) {
		return true;
	}
	return false;
},
	
getActionSeparator: function() {
	return document.createTextNode(" | ");
},
	
	
createSpanLink: function(linkText, href, name) {
	var spanWrapper = document.createElement("span");
	var link = document.createElement("a");
	link.setAttribute("href", href);
	link.setAttribute("name", name);
	link.href = href;
	var linkText = document.createTextNode(linkText);
	link.appendChild(linkText);
	spanWrapper.appendChild(link);
	return spanWrapper;
},
	
generateActionJs: function(mode) {
	if ((mode == CommentEntity.prototype.COMMENT_ACTION) || (mode == CommentEntity.prototype.EDIT_ACTION)) {
		var eventId = (mode + "_" + (CommentBroker.prototype.requestCounter++));
		commentBroker.eventBroker.addEventListener(eventId, this, this.postCommentListener);
		return "javascript:doUserAction('" + eventId + "')";
	} else if (mode == CommentEntity.prototype.PERMA_ACTION) {
		var eventId = (mode + "_" + (CommentBroker.prototype.requestCounter++));
		commentBroker.eventBroker.addEventListener(eventId, this, this.permalinkListener);
		return "javascript:doUserAction('" + eventId + "')";
	} else {
		return "javascript:doCommentAction('" + mode + "', '" +  this.commentRef.commentId + "', '" + this.commentPageRef.uid + "');";	
	}
},
	
permalinkListener: function() {
	CommentBroker.prototype.trace("initiating permalink: " + this.commentRef.commentId);
	commentBroker.goToSeeAllCommentsPage(this.commentRef.commentId);
},
	
	/**
	 * This handler gets called within this context to respond to post or edit comment events
	 */
postCommentListener: function(eventId) {
	if (this.postForm != undefined) {
		$(this.postForm).remove();
	}
	var postCommentForm = this.commentPageRef.createFormElement(CommentPage.prototype.POST_FORM_CLASSNAME, ("POST_FORM_" + eventId), "form");
	var postTextArea = this.commentPageRef.createFormElement(CommentPage.prototype.POST_FORM_TEXTAREA_CLASSNAME, 
															 ("POST_FORM_TEXTAREA_" + eventId), "textarea");
	postCommentForm.action ="";
	var submitInput = this.commentPageRef.createInputElement("input", ("POST_FORM_SUBMIT_" + eventId));
	submitInput.setAttribute("src", CommentPage.prototype.POST_FORM_SUBMIT_SRC);
	submitInput.setAttribute("type", "image");
	var postFunction = function(event, eventId) {
		//TEMPORARY MAINTENANCE -- option. You can add an alert and return false to temporarily disable posting new comments.
		var textElem = $(("POST_FORM_TEXTAREA_" + eventId));
		var text = textElem.value;
		CommentBroker.prototype.debug("textElem: " + "POST_FORM_TEXTAREA_" + eventId);
		CommentBroker.prototype.debug("text: " + text);
		if (text == undefined || text == "" || text.length <= 0) {
			alert ("You must enter a valid comment before submitting.");
			return false;
		}
		var actionType = "";
		if (this.isEventType(eventId, CommentEntity.prototype.EDIT_ACTION)) {
			actionType = CommentEntity.prototype.EDIT_ACTION;
			this.commentRef.commentBody = text;
		} else {
			actionType = CommentEntity.prototype.COMMENT_ACTION;
		}
		commentBroker.sendAction(actionType, this.commentRef.commentId, this.commentPageRef.uid, (text), this);
		$(postCommentForm).remove();
		// add status message
		var waitDiv = document.createElement("div");
		waitDiv.setAttribute("class", "posting");
		waitDiv.style.font = "normal 12px Arial, helvetica, sans-serif";
		waitDiv.style.clear = "left";
		waitDiv.style.padding = "7px 0 0 0";
		waitDiv.style.color = "#c20";
		var waitMessage = document.createTextNode("Posting comment, please wait. . . ");
		waitDiv.className = "statusMessage";
		waitDiv.appendChild(waitMessage);
		this.replyHolder.appendChild(waitDiv);
		setTimeout(function() {$(waitDiv).remove()}.bind(this), 3000);
		if (this.postForm != undefined) {
			this.postForm = undefined;
		} 	
		// fixes IE submit issues
		
		if (event && event.preventDefault) event.preventDefault();
		else if (window.event && window.event.returnValue)
			window.eventReturnValue = false;
		return false;
	};
	submitInput.onclick = postFunction.bindAsEventListener(this, eventId);
	postCommentForm.onsubmit = function() {
		return false;
	}
	if (this.isEventType(eventId, CommentEntity.prototype.EDIT_ACTION)) {
		// copy text into form
		postTextArea.value = this.commentRef.commentText;
	}
	postCommentForm.appendChild(postTextArea);
	postCommentForm.appendChild(submitInput);
	if (postTextArea.zIndex)
		postTextArea.zIndex = 1000;
	postTextArea.style.zIndex = 1000;
	this.replyHolder.appendChild(postCommentForm);
	$(postTextArea).activate();
	//store form
	this.postForm = postCommentForm;
	return postCommentForm;
	
},
	
isEventType: function(eventId, eventType) {
	if (eventId == undefined)
		return false;
	if (eventId.indexOf(eventType) >= 0) {
		return true;
	}
	return false;
},
	
addChildComment: function(comment) {
	var curCommentEntity = new CommentEntity(this.commentElement, comment, this.commentRef, (this.nestingLevel + 1), this.commentPageRef);
	curCommentEntity.generate();
	this.nestedCommentEntities.push(curCommentEntity);
},
	
createVotingArrows: function() {
	var arrowContainer = document.createElement("div");
	if (this.commentRef.likes > 0) {
		this.voteUp = this.createDefaultArrow(1);
		this.voteDown = this.createArrow(-1);
	} else if (this.commentRef.likes < 0) {
		this.voteUp = this.createArrow(1);
		this.voteDown = this.createDefaultArrow(-1);
	} else {
		this.voteUp = this.createArrow(1);
		this.voteDown = this.createArrow(-1);
	}
	arrowContainer.className = CommentEntity.prototype.ARROWS_CLASS;
	arrowContainer.appendChild(this.voteUp);
	arrowContainer.appendChild(this.voteDown);
	return arrowContainer;
},
	
createArrow: function(direction) {
	var eventId = ("vote" + "_" + (CommentBroker.prototype.requestCounter++));
	if (direction > 0) {
		commentBroker.eventBroker.addEventListener(eventId, this, this.voteListener_up.bind(this));
		
	} else {
		commentBroker.eventBroker.addEventListener(eventId, this, this.voteListener_down.bind(this));
	}
	var linkHref =  "javascript:doUserAction('" + eventId + "')";
	var arrow = this.commentPageRef.generateAdvancedLink(linkHref, " ", (direction > 0 ? CommentEntity.prototype.UP_ARROW_CLASS : CommentEntity.prototype.DOWN_ARROW_CLASS));
	//arrow.onclick = function(event) {
	
	//}.bindAsEventListener(this); 
	//		arrow.className = (direction > 0 ? CommentEntity.prototype.UP_ARROW_CLASS : CommentEntity.prototype.DOWN_ARROW_CLASS);
	return arrow;
},
	
voteListener_up: function() {
	if (this.commentRef.likes <= 0) {
		commentBroker.voteAction(this.commentRef.commentId, this.commentPageRef.uid, 1, this);
	} else {
		commentBroker.voteAction(this.commentRef.commentId, this.commentPageRef.uid, 0, this);
	}
	
},
	
voteListener_down: function() {
	if (this.commentRef.likes >= 0) {
		commentBroker.voteAction(this.commentRef.commentId, this.commentPageRef.uid, -1, this);
	} else {
		commentBroker.voteAction(this.commentRef.commentId, this.commentPageRef.uid, 0, this);
	}
},
	
createDefaultArrow: function(direction) {
	var eventId = ("vote" + "_" + (CommentBroker.prototype.requestCounter++));
	if (direction > 0) {
		commentBroker.eventBroker.addEventListener(eventId, this, this.voteListener_up.bind(this));
		
	} else {
		commentBroker.eventBroker.addEventListener(eventId, this, this.voteListener_down.bind(this));
	}
	var linkHref =  "javascript:doUserAction('" + eventId + "')";
	var link = document.createElement("a");
	link.setAttribute("href", linkHref);
	link.href = linkHref;
	
	var arrow = document.createElement("img");
	/*arrow.onclick = function() {
	 if (direction > 0 ) {
	 this.voteListener_up();
	 } else  {
	 this.voteListener_down().bind(this);
	 }
	 
	 }*/
	arrow.setAttribute("src", (direction > 0 ? CommentEntity.prototype.VOTE_UP_IMG : CommentEntity.prototype.VOTE_DOWN_IMG) );
	//arrow.src = (direction > 0 ? CommentEntity.prototype.VOTE_UP_IMG : CommentEntity.prototype.VOTE_DOWN_IMG);
	arrow.className = (direction < 0 ? "downimg" : "upimg");
	link.appendChild(arrow);
	return link;
},
	
getDateString: function(timestamp) {
	var minutesDelta = (timestamp / 60);
	if (minutesDelta > (24 * 60)) {
		var days = Math.round(minutesDelta / (24 * 60));
		return ((days > 1) ? (days + " days ") : "1 day ") + "ago"; 
	} else if (minutesDelta < 60){
		return Math.round(minutesDelta) + " minutes ago"
	} else {
		return (Math.round(minutesDelta / 60) + " hours ago");
	}	
},
	
createDateContent: function(timestamp) {
	var textContainer = document.createElement("span");
	var dateString = this.getDateString(timestamp);
	var message = document.createTextNode(dateString);
	textContainer.appendChild(message);
	return textContainer;
},
	
createCommentContent: function(elementClass, content) {
	var textContainer = document.createElement(this.elementType);
	var messageSpan = document.createElement(this.elementType);
	var message = undefined;
	if (this.commentRef.deleted) {
		content = CommentEntity.prototype.SPAM_MESSAGE;
	}
	if (this.isSummarized && content.length > 250) {
		var cleanedContent = this.stripTags(content);
		if (cleanedContent <= 250) {
			message = content; // just use default content, since the excess tags are superfluous
		} else {
			message = (cleanedContent.substring(0,250) + "...");
		}
	} else {
		message = content;
	}
	//$(messageSpan).innerHTML = message; //<p> does not have innerHTML property
	messageSpan.innerHTML = message;
	textContainer.appendChild(messageSpan);
	if (this.isSummarized) {
		if (content.length > 250) {
			var summaryDiv = this.createTriangle("triangle", true);
			messageSpan.appendChild(summaryDiv);
		} else {
			// no triangle
		}
	} else {
		if (content.length > 250) {
			// put in closed triangle
			var summaryDiv = this.createTriangle("triangle", false);
			messageSpan.appendChild(summaryDiv);
		}
	}
	textContainer.className = elementClass;
	return textContainer;
},
	
stripTags: function(stringToClean) {
	var cleanedString = stringToClean.replace(/(<([^>]+)>)/ig,"");
	return cleanedString;	
},
	
createTriangle: function(className, isOpen) {
	var summaryImg = document.createElement("img");
	var summaryLink = document.createElement("a");
	summaryLink.setAttribute("href", "javascript:void(0);");
	summaryLink.href = "javascript:void(0);";
	summaryImg.setAttribute("src", (isOpen ? CommentEntity.prototype.OPEN_TRIANGLE: CommentEntity.prototype.CLOSED_TRIANGLE));
	className = className + (isOpen ? "" : " open_tri"); // AHWS added
	summaryImg.setAttribute("class", className);
	summaryImg.className = className;
	summaryLink.onclick = function() {
		this.swapSummary();
	}.bindAsEventListener(this);
	summaryLink.appendChild(summaryImg);
	return summaryLink;
},
	
swapSummary: function() {
	if (this.isSummarized) {
		this.isSummarized = false;
	} else {
		this.isSummarized = true;
	}
	this.refreshContent();
},
	
createAuthorContent: function(elementClass, content) {
	var textContainer = document.createElement("div");
	var messageSpan = document.createElement("p");
	var postedBy = "Posted by: "; //AHWS added
	var authorLabel = document.createTextNode(postedBy);//AHWS added
	var message = document.createTextNode(content);
	var dateElement = this.createDateContent(Number(this.commentRef.postedOnTimeStamp));
	var pointsElement = this.createPointsContent();
	messageSpan.appendChild(authorLabel);//AHWS added
	messageSpan.appendChild(message);
	textContainer.appendChild(messageSpan);
	textContainer.appendChild(dateElement);
	textContainer.appendChild(pointsElement);
	textContainer.className = elementClass;
	return textContainer;
},
	
createPointsContent: function() {
	var textContainer = document.createElement("span");
	var points = Number(this.commentRef.points);
	if (points == undefined) 
		return textContainer;
	
	var pointsString = this.commentRef.points + (points == 1 ? " Point" : " Points");
	var message = document.createTextNode(pointsString);
	textContainer.appendChild(message);
	return textContainer;
},
	
getAuthorName: function() {
	if (this.commentRef == null || this.commentRef.author == null) {
		return "";
	} else {
		var fullName = "";
		if (this.commentRef.author.firstName != undefined) {
			fullName += this.commentRef.author.firstName;
		};
		if (this.commentRef.author.lastName != undefined) {
			fullName += " " + this.commentRef.author.lastName;
		};
		if (fullName == undefined || fullName.length <= 2) {
			fullName = this.commentRef.author.username;
		}
		CommentBroker.prototype.trace("author: " + this.commentRef.author.username);
		return fullName;
	}
}   
};

var commentBroker = undefined;
function loadComments(articleId, pageNum, numCommentsPerPage, includePagination, optionalCommentId) {
	//temporary disabling of comments
	var rootDomain;
	var baseUrl;
	//if ((document.location.href.indexOf("advancemags.com") > 0 || document.location.href.indexOf("stag2.wired.com") > 0  ) && document.location.href.indexOf("editorial-preview") < 0) {
	if (document.location.href.indexOf("stag") > 0 || document.location.href.indexOf("localhost") > 0 ) {
		rootDomain = "http://comments.stag2.wired.com";
	} else  {
		rootDomain = "http://comments.wired.com";
	}
	baseUrl = rootDomain + "/json.js";
	//alert (baseUrl);
	if (commentBroker == undefined) {
		commentBroker = new CommentBroker(baseUrl);
	}
	
	// verify that this is a page with actual comments to be rendered (such as article pages). Otherwise, we assume it's a blog page (with no comments), and instead render a tracking link (used to track the page view for most commented)
	if (typeof(s) != "undefined" && s.prop5 == "blog") {
		// this is a blog page, trigger the tracking request -- we'll do this next
	} else {
		// this is a non-blog page, which we will assume is an artice, video, or some page intended for comments
		commentBroker.requestComments(articleId, pageNum, numCommentsPerPage, includePagination, optionalCommentId);
	}
	var trackingUrl = rootDomain + "/tracker.js?url=" + articleId + "&v=" + (new Date()).getTime();
	var trackingScript = new JSONscriptRequest(trackingUrl);
	trackingScript.buildScriptTag();
	trackingScript.addScriptTag();	
	//this.activeScripts.push(dynScript); // this can't work because activeScripts is a private member variable within commentBroker
	var trackingListener = new TrackingListener();
	trackingListener.setDynamicScript(trackingScript);
}

function doCommentAction(actionMode, commentId, uid) {
	if (commentBroker == undefined) {
		CommentBroker.prototype.trace("No CommentBroker instance found.");
		return;
	}
	commentBroker.initAction(actionMode, commentId, uid);
}

function doUserAction(eventId) {
	CommentBroker.prototype.debug("doUserAction: " + eventId);
	commentBroker.handleUserEvent(eventId);
}

function loadArticleComments() {
	loadComments("31", 0, 10, true);
}

//Event.observe(window, 'load', loadArticleComments);

///////JSON DYNAMIC SCRIPT

function JSONscriptRequest(fullUrl) {
    // REST request path
    this.fullUrl = fullUrl; 
	CommentBroker.prototype.trace("url: " + fullUrl);
	//document.getElementsByTagName("body").item(0).appendChild(document.createTextNode(fullUrl));
    // Keep IE from caching requests
    //this.noCacheIE = '&noCacheIE=' + (new Date()).getTime();
	//11/17/2008: investigate if we need this for IE to render comments
	this.noCacheIE = null;
    this.headLoc = document.getElementsByTagName("head").item(0);
    // Generate a unique script tag id
    this.scriptId = 'wired_reddit_scriptId' + JSONscriptRequest.prototype.scriptCounter++;
}

// Static script ID counter
JSONscriptRequest.prototype.scriptCounter = 1;

// buildScriptTag method
//
JSONscriptRequest.prototype.buildScriptTag = function () {
	this.complete = false;
    // Create the script tag
    this.scriptObj = document.createElement("script");
    this.scriptObj.onreadystatechange = function() {
		this.complete = true;
		
	}.bindAsEventListener(this);
	this.scriptObj.onload = function() {
		this.complete = true;
	}.bindAsEventListener(this);
    // Add script object attributes
    this.scriptObj.setAttribute("type", "text/javascript");
	this.scriptObj.setAttribute("src", this.fullUrl + (this.noCacheIE != null ? this.noCacheIE : ''));
    this.scriptObj.setAttribute("id", this.scriptId);
}

JSONscriptRequest.prototype.removeScriptTag = function () {
    // Destroy the script tag
    this.headLoc.removeChild(this.scriptObj);  
}

JSONscriptRequest.prototype.addScriptTag = function () {
    // Create the script tag
    this.headLoc.appendChild(this.scriptObj);
}
//cookie setting junk
function createCookie(name,value,days){if (days){var date = new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else expires="";document.cookie=name+"="+value+expires+"; path=/; domain=reddit.com";} 

function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i< ca.length;i++){var c =ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return null;}

var globalPageNum ;

/*image preload for ie6 - uses object detection*/
if (window.external && (typeof window.XMLHttpRequest == "undefined")) {
    // javascript targeting IE 6
    image1 = new Image();
    image1.src = "http://www.wired.com/images/comments/arrowupblue2.jpg ";
    image2 = new Image();
    image2.src = "http://www.wired.com/images/comments/arrowdownred2.jpg";
}

/* preload images */
if (document.images)
{
	popTab = new Image();
	popTab.src = "http://www.wired.com/images/modules/commented_bg_t_sel.gif";
	comTab = new Image();
	comTab.src = "http://www.wired.com/images/modules/popular_bg_t_un.gif";
}

/* function for movable type to redirect to login */
function mtIsLoggedIn(href){
	var curCookie = document.cookie;
	if (curCookie.indexOf(CommentBroker.prototype.COOKIE_NAME) > -1) {
		//user is logged in
		return;
	}
	//user is not logged in. redirect
	var newHref = CommentBroker.prototype.LOGIN_URL + CommentPage.prototype.getReturnTo()+href;
	changeLinkHref(null,newHref,href);
	return;
}

function findLinkByHref(href) {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].href == href) return i;
	}
	return -1;
}

function changeLinkHref(id,newHref,oldHref) {
	if (document.links.length > 0) {
		var index = findLinkByHref(oldHref);
		if (index > -1)
			document.links[index].href = newHref;
	}
}

function gup( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
						  var regexS = "[\\?&]"+name+"=([^&#]*)";
						  var regex = new RegExp( regexS );
						  var results = regex.exec( window.location.href );
						  if( results == null )
						  return "";
						  else
						  return results[1];
						  }
