var boy = document.getElementById("boy");
var boyIdleImageNumber = 1;

function boyIdleAnimation() {

    boyIdleImageNumber = boyIdleImageNumber + 1;
    boy.src = "./boy/Idle (" + boyIdleImageNumber + ").png";

    if (boyIdleImageNumber == 11) {
        boyIdleImageNumber = 1;
    }

}

function boyIdleAnimationStart() {
    setInterval(boyIdleAnimation, 200);
}