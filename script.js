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

function keyListner(event) {
    if (event.key == "Enter")
        alert("Enter");
}