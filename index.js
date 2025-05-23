
function displayPoem(response) {

 new Typewriter('#poem', {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
     cursor: ""
});   
}

function generatePoem(event) {
    event.preventDefault();

     let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4d50fa0b4fo9407f4bc4tc0a244ca33d";
    let context = "You are a very poetic AI assistant who provides the most beautiful 150 word Christian poems about topics in the Holy Bible";
    let prompt = `User instructions: Generate a Christian poem ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a Christian poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);

   
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
