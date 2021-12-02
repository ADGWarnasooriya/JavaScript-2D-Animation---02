var boy = document.getElementById("boy");
var boyIdleImageNumber = 0;

function boyIdleAnimation() {
    boyIdleImageNumber = boyIdleImageNumber + 1;
    boy.src = "./boy/Idle (" + boyIdleImageNumber + ").png";

}