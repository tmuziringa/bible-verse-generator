function generateVerse(event){
    event.preventDefault();

new Typewriter("#verse", {
  strings: "John 14vs1 :Let not your heart be troubled",
  autoStart: true,
  delay: 1,
  cursor: "",
});

}


formElement=document.querySelector("#verse-generator");
formElement.addEventListener("submit",generateVerse);