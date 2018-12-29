let toggle = (id) => {
    let option = document.getElementById(id);
    let circle = option.getElementsByClassName("circle")[0];
    let innerCircle = option.getElementsByClassName("inner-circle")[0];
    let line = option.getElementsByClassName("inner-line")[0];
    circle.classList.toggle("inactive");
    innerCircle.classList.toggle("inactive-inner");
    innerCircle.classList.toggle("inactive");
    line.classList.toggle("inactive-line");
}


let toggleButton = (id) => {

    let currentActiveElement = document.querySelectorAll(".active")[0];
    toggle(currentActiveElement.id);
    currentActiveElement.classList.toggle("active");

    toggle(id);
    element = document.getElementById(id);
    element.classList.toggle("active");
    toggleContent(id);
}

let toggleContent = (id) => {
    console.log("conditional " + id);
    let content = document.getElementById("content-" + id);
    content.classList.toggle("content-active");
    content.classList.toggle("hidden");
    toggleContentContainer();
}

let toggleContentContainer = () => {
    document.getElementById("content-container").classList.toggle("hidden");
    
}

let closeContentContainer = () => {
    
    document.getElementById("content-container").classList.toggle("hidden");
    let currentActiveElement = document.querySelectorAll(".content-active")[0];
    currentActiveElement.classList.toggle("hidden");
    currentActiveElement.classList.toggle("content-active");
}

let evaluateDisplay = () => {
    if (window.screen.availWidth < 600) {
        toggleContentContainer();
    }
}

window.onload = evaluateDisplay();