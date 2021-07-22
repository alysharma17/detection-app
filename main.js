object=[];
alarm=" ";
status=" ";
function preload() {
alarm=loadSound("alarm.mp3");
}

function setup() {
canvas=createCanvas(600, 600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
object_detector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded () {
    status=true;
    console.log("Model Loaded");
}
function draw() {
image(video, 0,0, 600, 600);
if (status!=true) {
red=random(255);
green=random(255);
blue=random(255);
object_detector.detect(video, gotResults);
for (i=0; i<object.length; i++) {
    document.getElementById("status").innerHTML="Status: Object Detected";
    fill(r, g, b);
    percent = floor(object[i].confidence * 100);
    text(object[i].label , object[i].x, object[i].y);
    noFill();
    stroke(r,g,b);
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
    document.getElementById("detecting").innerHTML = "Person Found";
    song.stop();}
 {
        document.getElementById("check").innerHTML = "Baby not found";
        song.play();}
}  
}
