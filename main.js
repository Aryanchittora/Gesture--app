prediction = "";

// Webcam code {
Webcam.set({
    width: 250,
    height: 200,
    image_format: 'png',
    png_quality: 95
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

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

// Code To Idenify Gesture {
    function check() {
        img = document.getElementById("user_photo");
        classifier.classify(img , Identifiedgesture);
    } 
    function Identifiedgesture(error , result) {
        if (error) {
            console.error(error);
            window.alert("Problem Identifying Gesture, Please Retry");
        } else {
            console.log(result);
            document.getElementById("gesture").innerHTML = result[0].label;
            prediction = "My Prediction is " + result[0].label;
            Speak();

            if (result[0].label == "Amazing") {
                document.getElementById("emoji").innerHTML = "&#128076;";
            } 
            else if (result[0].label == "Best") {
                document.getElementById("emoji").innerHTML = "&#128077;";
            }
            else if (result[0].label == "Victory") {
                document.getElementById("emoji").innerHTML = "&#9996;";
            }
        }
    }
// }