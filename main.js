prediction = "";

// Webcam code {
Webcam.set({
    width: 250,
    height: 200,
    image_format: 'png',
    png_quality: 95
});
cam = document.getElementById("camera");
Webcam.attach('#cam');

// Taking Photo {
function take_photo() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="user_photo" class="img-resonsive" src="'+data_uri+'">';
    });
}    
    // }
// } 

// ML5 Code {
    console.log("ML5 Version -", ml5.version);

 // Loading Model {
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TmHh912Gf/model.json",loaded);
    function loaded() {
        console.log("Model Loaded In My App !! ^_^");
    }
    // }
// }

// Code To Speak {
    function Speak() {
        var synth = window.speechSynthesis;
        var speech = new SpeechSynthesisUtterance(prediction);
        synth.speak(speech);
    } 
// }