var vo = {voice:"kate"};
function ssay(m,v){
	say("<speak><prosody rate='-10%'>"+m+"</prosody></speak>",v);
}
ssay("Hello. Thank you for calling Fragment, the damaged packet help line.",vo);
var from= currentCall.callerID;
if (from.indexOf("447")==0){
    ssay ("I see you are calling from a mobile phone.",vo);
    ssay ("I am now going to send you a link to our mobile web site.",vo);
    message("Click on https://gont.westhawk.co.uk/TADHackMadrid to register your damaged packet.", {to:from,network:"SMS",channel:"text"});
    ssay ("If you hang up now and click the link from your you-bun-too or android mobile phone we will be able to help you sooner.",vo);
    ssay ("If you would rather register the damaged packet over the phone, please wait.",vo);
}
var acc = "0";
wait(1000);
while (acc == "0"){
    var resp = ask ("Please input your 10 digit package number followed by a hash.",{voice:"kate",
                    choices:"[10 DIGITS]",
                    terminator:"#",
                    timeout:60.0,
                    mode:"dtmf",
                    //recognizer: "us-en",
                    interdigitTimeout: 5,
                    onBadChoice: function(event) {
                    say("Invalid packet number, please try again",vo);
                    }
                    });
    if (resp.value){
        // look up account number....
        acc = resp.value;
    }
}
ssay ("Your RMA number is "+"567532", vo);
ssay ("We will send you an empty box with a pre-paid postage label, please carefully pack the damaged goods into it.",vo);
ssay ("Please write your RMA number on the box and post it back to us.",vo);
ssay ("Once we have received it, we will assess the damage and send you a replacement if appropriate.",vo);
ssay ("This process may take up to 10 working days.",vo);
ssay ("Thank you and goodbye.",vo);

