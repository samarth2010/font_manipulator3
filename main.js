difference = 0;
rightwristX=0;
leftwristX=0;
function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,150);

  posenet= ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}

function modelloaded()
{
    console.log("pnisIn");
}

function gotPoses(results)
{
    if(results.length >0);
    {
        console.log(results);
        
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX);
        difference=floor(leftwristX-rightwristX);
        console.log("diference="+ difference);
        
     }
}

function draw()
{
    background('#43464B');
        textSize(difference);
        fill('#FFE125');
        text("Samarth",100,200);
}