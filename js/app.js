let toggle = (id) => {
  let option = document.getElementById(id);
  let circle = option.getElementsByClassName("circle")[0];
  let innerCircle = option.getElementsByClassName("inner-circle")[0];
  let line = option.getElementsByClassName("inner-line")[0];
  circle.classList.toggle("inactive");
  innerCircle.classList.toggle("inactive-inner");
  innerCircle.classList.toggle("inactive");
  line.classList.toggle("inactive-line");
  toggleContent(id);
}


let toggleButton = (id) => {

  let currentActiveElement = document.querySelectorAll(".active")[0];
  toggle(currentActiveElement.id);
  currentActiveElement.classList.toggle("active");

  toggle(id);
  element = document.getElementById(id);
  element.classList.toggle("active");
}

let toggleContent = (id) => {
  if (id === "first") {
    console.log("conditional first");
    let content = document.getElementById("content-first");
      content.classList.toggle("content-active");
      content.classList.toggle("hidden");
  }
  else if (id === "second") {
    console.log("conditional second");
    let content = document.getElementById("content-second");
    content.classList.toggle("content-active");
    content.classList.toggle("hidden");
  }

  else if (id === "third") {
    console.log("conditional third");
    let content = document.getElementById("content-third");
    content.classList.toggle("content-active");
    content.classList.toggle("hidden");
  }
  else if (id === "fourth") {
    console.log("conditional fourth");
    let content = document.getElementById("content-fourth");
    content.classList.toggle("content-active");
    content.classList.toggle("hidden");
  }
}

let evaluateDisplay = () => {
    if(window.screen.availWidth < 600)
        {
            toggleContent("first");
            document.getElementById("content-container").classList.toggle("hidden");
        }
}

window.onload = evaluateDisplay();
