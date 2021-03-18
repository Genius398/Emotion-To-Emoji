prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded(){
    console.log(modelLoaded);
}

function speak(){
    var synth=window.SpeachSynthesis;
    speak_data_1="The first perdiction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utterThis=new SpeachSynthesisIsUtterence(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}