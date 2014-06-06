var apiKey = "C17D167F-09C6-4E4C-A3DD-2025D48BA243";
var iceServers = [
    {url: "stun:71.6.135.115:3478"},
    {url: "turn:71.6.135.115:3478", username: "test", credential: "tester"},
    {url: "turn:71.6.135.115:3479", username: "test", credential: "tester"}
];
var audio = {
    media: {audio: true, video: true},
    localSettings: "lbv",
    localContainerId: "myVideo",
    remoteContainerId: "yourVideo",
    iceServers: iceServers
};
var call;
var far;
var gum = navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.getUserMedia;
$(document).ready(function() {
    if (gum) {
        ga('send', 'event', 'GUM', 'available', {'page': '/inspect.html'});
        console.log("have gum");
        findEnvCam();
    } else {
        ga('send', 'event', 'GUM', 'unavailable', {'page': '/inspect.html'});
        location.href = "rma.htm";
    }
});

function onSourcesAcquired(sources) {
    var sid;
    for (var i = 0; i != sources.length; ++i) {
        var source = sources[i];
        console.log(source);
        if ((source.kind == "video") && (source.facing == "environment")) {
            sid = source.id;
            audio.media.video = {optional: [{sourceId: sid}]};
            break;
        }
// source.id -> DEVICE ID
// source.label -> DEVICE NAME
// source.kind = "audio" OR "video"
// TODO: add this to some datastructure of yours or a selection dialog
    }
    doPhono();
}

function findEnvCam() {
//frontcam...
    var sid;
    if ((typeof MediaStreamTrack === 'undefined') || (typeof MediaStreamTrack.getSources == 'undefined')) {
        doPhono();
    } else {
        MediaStreamTrack.getSources(onSourcesAcquired);
    }
}

function doPhono() {
    var phono = $.phono(
            {
                apiKey: apiKey,
                audio: audio,
                onReady: function() {
                    phono.setLogLevel("DEBUG");
                    ga('send', 'event', 'Phono', 'loaded', {'page': '/inspect.html'});
                    $.ajax({
                        url: "/bm2012/getJid.groovy?name=called"
                    }).done(
                            function(data) {
                                far = data;
                                ga('send', 'event', 'Phono', 'gotAgent', {'page': '/inspect.html'});
                                call = phono.phone.dial("xmpp:" + far);
                            });
                }
            });
}