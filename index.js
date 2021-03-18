var buttonTranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txtinput");
var output=document.querySelector("#outputdiv");
var url="https://api.funtranslations.com/translate/minion.json";
const clickhandler=()=>
{
    var finalURL=constructURL(txtinput.value);
    fetch(finalURL)
    .then(response=>response.json())
    .then(jsondata=>{
        output.innerText=jsondata.contents.translated;
    })
    .catch(()=>alert("Uh-Oh! Server is down . Please try again in some time ."))
}

function constructURL(inputTxt)
{
    var encodedUrl=encodeURI(inputTxt);
    return `${url}?text=${encodedUrl}`;
}


buttonTranslate.addEventListener("click",clickhandler);
