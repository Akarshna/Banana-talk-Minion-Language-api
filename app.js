var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-translate');
var outputDiv = document.querySelector('#output')

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input){
    return serverURL+"?"+"text="+input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the Server, Try again after sometime")
}

function clickEventHandler(){
    var inputText = txtInput.value;

    //Calling server for processing

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickEventHandler);


































// const text1 = "I am Iron Man";
// const text2 = "I am Bat Man";
// const text3 = "I am ShaktiMaan";
// let arr = [text1, text2, text3];


// arr.forEach(function (currElem){
// const url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?text="+currElem;
//     fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
// });

