var number_of_buttons = document.querySelectorAll(".drum").length


//for mouse clicking
for(var i = 0; i < number_of_buttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var button_innener_html = this.innerHTML
        make_sound(button_innener_html)
        button_animation(button_innener_html)

    });

}

//for keyboard
document.addEventListener("keypress", function(event) {
    make_sound(event.key)
    button_animation(event.key)
    
});

//function for making sound 
function make_sound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play()
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "d":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default:
            console.log(button_innener_html)
    }
}

//function for button animation
function button_animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

    