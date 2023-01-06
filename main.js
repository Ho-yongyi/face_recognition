Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function identify()
{
    
}
function capture()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='m' src='"+data_uri+"'>";
    });
}
console.log('ml5 version:', ml5.version);
function startClassification()
{
    navigator.mediaDevices.getUserMedia({video: true});
    soundClassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dVKKUXgQ1/model.json')
}