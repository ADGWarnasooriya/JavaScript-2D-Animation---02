var boy = document.getElementById("boy");
var boyIdleImageNumber = 1;
var boyIdleAnimationNumber = 0;

function boyIdleAnimation() {

    boyIdleImageNumber = boyIdleImageNumber + 1;

    if (boyIdleImageNumber == 11) {
        boyIdleImageNumber = 1;
    }

    boy.src = "./boy/Idle (" + boyIdleImageNumber + ").png";

}

function boyIdleAnimationStart() {
    boyIdleAnimationNumber = setInterval(boyIdleAnimation, 200);
}

function boyIdleAnimationStop() {
    clearInterval(boyIdleAnimationNumber);
}

function keyListner(event) {
    if (event.key == "Enter") {
        if (boyRunAnimationStatus == false) {

            boyRunAnimationStart();
            boyRunAnimationStatus = true;
        }
    }

    if (event.key == " ") {
        boyJumpAnimationStart();
    }

}

var boyRunImageNumber = 0;
var boyRunAnimationNumber = 0;
var boyRunAnimationStatus = false;

function boyRunAnimation() {

    boyRunImageNumber = boyRunImageNumber + 1;

    if (boyRunImageNumber == 9) {
        boyRunImageNumber = 1;
    }

    boy.src = "./boy/Run (" + boyRunImageNumber + ").png";

}

function boyRunAnimationStart() {
    clearInterval(boyIdleAnimationNumber);
    boyRunAnimationNumber = setInterval(boyRunAnimation, 200);
}



var boyJumpImageNumber = 0;
var boyJumpAnimationNumber = 0;

function boyJumpAnimation() {

    boyJumpImageNumber = boyJumpImageNumber + 1;

    if (boyJumpImageNumber == 13) {
        boyJumpImageNumber = 1;
    }

    boy.src = "./boy/Jump (" + boyJumpImageNumber + ").png";

}

function boyJumpAnimationStart() {
    clearInterval(boyRunAnimationNumber);
    boyJumpAnimationNumber = setInterval(boyJumpAnimation, 200);
}