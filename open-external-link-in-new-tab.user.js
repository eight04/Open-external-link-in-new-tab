// ==UserScript==
// @name        Open external link in new tab
// @version     0.1.0
// @namespace   eight04.blogspot.com
// @description This script will open any external link in new tab. Support dynamic content
// @include     http*
// ==/UserScript==

"use strict";

function getAnchor(element) {
	while (element && element.nodeName != "A") {
		element = element.parentNode;
	}
	return element;
}

document.addEventListener("click", function(e){
	var anchor = getAnchor(e.target);
	if (!anchor || anchor.target) {
		return;
	}
	if (anchor.hostname != location.hostname) {
		anchor.target = "_blank";
	}
});