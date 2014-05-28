say("Hello, I am Kate.",{voice:"kate"});
say("Hello, I am Simon.",{voice:"simon"});
var from= currentCall.callerID
if (from.indexOf("447")==0){
	 say ("I will SMS a link to our new mobile site ",{voice:"kate"});
	  message("Click on http://tropo.com to visit our site. &#10;&#13; boo! ", 
			    {to:from,network:"SMS",channel:"text"});
} else {
	 say ("Please wait while I connect your call",{voice:"simon"});
}
