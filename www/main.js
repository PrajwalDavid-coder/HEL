$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect: "bounceOut",
        },
    });



// Siriwave setup
  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 800,
    height: 290,
    style: 'ios9',
    amplitude: 0.5,
    speed: 0.3
  });
  siriWave.start();
  
  // Animate siriwave 
   $('.siri-message').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "fadeInUp",
            sync: true,
        },
        out:{
            effect: "fadeOutUp",
            sync: true,
        }
        });

        // mic button event
        $("#MicBtn").click(function () { 
            eel.playAssistantSound();
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);

        });
    

});