noseX=0;
noseY=0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/BtfQJt87/ayyaayyayay-removebg-preview.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
        if (results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x-45;
            noseY = results[0].pose.nose.y-50;
            console.log("Nose x = " + noseX);
            console.log("Nose x = " + noseY);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 100, 75)
}

function takesnapshot()
{
    save('coolfilter.png');
}

