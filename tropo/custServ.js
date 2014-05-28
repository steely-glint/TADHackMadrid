var vo = {voice:"kate"};
say("Hello. Thank you for calling Fragment, the broken packet helpline.",vo);
var from= currentCall.callerID
if (from.indexOf("447")==0){
    say ("I see you are calling from a mobile phone.",vo);
    say ("I'm now going to send you a link to our mobile website.",vo);
    message("Click on https://gont.westhawk.co.ul/TADHackMadrid to register your damaged packet.",
            {to:from,network:"SMS",channel:"text"});
    say ("If you hang up now and click the link from your android mobile phone we will be able help you sooner.",{voice:"kate"});
    say ("If you would rather register the damaged packet over the phone, please wait.",vo);
}
var acc = "0";
while (acc === "0"){
    var resp = ask ("Please input your 7 digit account number followed by a hash.",{voice:vo.voice
                    choices:"[7 DIGITS]",
                    terminator:"#",
                    timeout:60.0,
                    mode:"dtmf",
                    //recognizer: "us-en",
                    interdigitTimeout: 5,
                    onBadChoice: function(event) {
                    say("Invalid account number, please try again",vo);
                    }
                    });
    if (next.value){
        // look up account number....
        acc = next.value;
    }
}