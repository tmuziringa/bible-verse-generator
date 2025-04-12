function displayVerse(response){
    console.log("verse generated")
new Typewriter("#verse", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}


function generateVerse(event){
    event.preventDefault();


    let instructionInput=document.querySelector("#user-instruction");
    let apiKey="0bb03dodf4t67bd073b315986695ca76";
    let prompt=`generate a bible verse about ${instructionInput.value}`;
    let context="You are a well read AI assistant who knows all the verses in the holy bible.Your mission is to provide 3 verses in basic HTML from the bible that relate to the user instruction.do not include the word html"
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey} `
console.log("generating verse");
console.log(`Prompt:${prompt}`);
console.log(`Context:${context}`)

    axios.get(apiUrl).then(displayVerse)


}


formElement=document.querySelector("#verse-generator");
formElement.addEventListener("submit",generateVerse);