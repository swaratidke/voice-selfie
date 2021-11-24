var SpeechRecognition = window.webkitSpeechRecognition;

var recognition=  new SpeechRecognition();
  
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function (event)
{
    console.log(event);
    var content =event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML= content;
    if(content=="Take my selfie")
    {
        console.log("selfie");
        speak();
    }
}

function speak(){
    var z = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
     utterThis = new SpeechSynthesisUtterance(speak_data);
    z.speak(utterThis)
    Webcam.attach("#camera")

    setTimeout(function(){
        take_snapshot();
        save();
    
    },5000);

}
  Webcam.set({
      width:350,
      height:250,
      image_format: 'png',
      png_quality:80
  })
   camera = document.getElementById("camera");

   function take_snapshot()
   {
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
       });
   }
   function save()
   {
       link = document.getElementById("image");
        image = document.getElementById("selfie").src;
        link.href = image;
        link.click();

   }