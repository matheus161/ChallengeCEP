
var $cepElement = document.querySelector('#cep');
var $cidadeElement = document.querySelector('#cidade');
var $estadoElement = document.querySelector('#estado');
var $bairroElement = document.querySelector('#bairro');
var $logradouroElement = document.querySelector('#logradouro');
var $buttonElement = document.getElementById('submit-button');

function search (){
    var cep = $cepElement.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.log("Não foi possível achar o usuário");
            }
        }
    }    
}  

// $buttonElement.addEventListener('click', search);
$buttonElement.onclick = search;








