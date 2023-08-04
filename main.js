cocoStatus = "";

function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function Start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("searchbar").value;
}

function modelLoaded() {
    console.log("Model loaded Successfully");
    cocoStatus = true;
}

function draw() {
    image(video, 0, 0, 640, 480);
}