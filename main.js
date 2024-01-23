song ="";
{
song =loadsound("Mahiye Jinna Sohna Darshan Raval 320 Kbps.mp3");
console.log("first");
}
scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCanvas(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
console.log("second");
}
function modelLoaded() {
console.log('PoseNet Is Intialized');
console.log("third");
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scoreRightWrist = result[0].pose.keypoints[10].score;
scoreLeftWrist  = result[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " +scoreRightWrist = "scoreLeftWrist = " +scoreLeftWrist)
