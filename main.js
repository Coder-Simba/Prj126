leftWristX=0
leftWristY=0
rightWristY=0
rigthtWristY=0
scoreLeftWrist=0
scoreRightWrist=0
function preload(){
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);

}   