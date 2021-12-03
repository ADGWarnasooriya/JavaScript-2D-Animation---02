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
            boyIdleAnimationStop();
            boyRunAnimationStart();
            boyRunAnimationStatus = true;
        }
    }

    if (event.key == " ") {
        alert("ok")
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
    boyRunAnimationNumber = setInterval(boyRunAnimation, 200);
}

var boyJumpImageNumber = 0;
var boyJumpAnimationNumber = 0;

function boyJumpAnimation() {

    boyJumpImageNumber = boyJumpImageNumber + 1;

    if (boyJumpImageNumber == 13) {
        boyJumpImageNumber = 1;
    }

    boy.src = "./boy/Run (" + boyJumpImageNumber + ").png";

}

function boyJumpAnimationStart() {
    boyJumpAnimationNumber = setInterval(boyJumpAnimation, 200);
}