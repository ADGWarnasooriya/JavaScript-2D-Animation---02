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
            if (boyDeadAnimationStatus == false) {
                boyRunAnimationStart();
                boyRunAnimationStatus = true;
            }

        }
    }

    if (event.key == " ") {
        if (boyJumpAnimationStatus == false) {
            if (boyDeadAnimationStatus == false) {
                boyJumpAnimationStart();
                boyJumpAnimationStatus = true;
                boyRunAnimationStatus = true;
            }

        }

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
    if (boxAnimationStatus == false) {
        boxAnimationStart();
    }
}



var boyJumpImageNumber = 0;
var boyJumpAnimationNumber = 0;
var boyJumpAnimationStatus = false;

function boyJumpAnimation() {

    boyJumpImageNumber = boyJumpImageNumber + 1;

    if (boyJumpImageNumber == 13) {
        boyJumpImageNumber = 1;
        clearInterval(boyJumpAnimationNumber);
        boyJumpAnimationStatus = false;
        boyRunAnimationStart();
        var boyRunAnimationStatus = true;
    }

    boy.src = "./boy/Jump (" + boyJumpImageNumber + ").png";

}

function boyJumpAnimationStart() {
    clearInterval(boyRunAnimationNumber);
    var boyRunAnimationStatus = false;
    clearInterval(boyIdleAnimationNumber);
    boyJumpAnimationNumber = setInterval(boyJumpAnimation, 200);
}

var boxMarginLeft = 400;
var boxAnimationNumber = 0;
var boxAnimationStatus = false;

function boxAnimation() {
    boxMarginLeft = boxMarginLeft - 10;


    var box = document.getElementById("box");
    box.style.marginLeft = boxMarginLeft + "px";

    if (boxMarginLeft == 180) {
        clearInterval(boxAnimationNumber);
        clearInterval(boyRunAnimationNumber);
        boyDeadAnimationStart();
        boyDeadAnimationStatus = true;
    }
}

function boxAnimationStart() {
    boxAnimationNumber = setInterval(boxAnimation, 300);
    boxAnimationStatus = false;
}

var boyDeadImageNumber = 0;
var boyDeadAnimationNumber = 0;
var boyDeadAnimationStatus = false;

function boyDeadAnimation() {

    boyDeadImageNumber = boyDeadImageNumber + 1;

    boy.src = "./boy/Dead (" + boyDeadImageNumber + ").png";

    if (boyDeadImageNumber == 10) {
        clearInterval(boyDeadAnimationNumber);
    }

}

function boyDeadAnimationStart() {
    boyDeadAnimationNumber = setInterval(boyDeadAnimation, 300);

}