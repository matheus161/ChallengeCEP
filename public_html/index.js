
var $cepElement = document.querySelector('#cep');
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
            renderAutoComplete(data);
        } else {
            cepError();            
            }
        }
    }    
}  

function cepError(){
    var $statusElement = document.querySelector('.status h4');
    var $textStatus = document.createTextNode('CEP inexistente, cheque novamente!');
    $statusElement.appendChild($textStatus);
}

function renderAutoComplete({  logradouro, localidade, bairro, uf, erro }) {

    if(erro) {
        return;
        cepError();        
    }

    var $cidadeElement = document.querySelector('#cidade');
    var $estadoElement = document.querySelector('#estado');
    var $bairroElement = document.querySelector('#bairro');
    var $logradouroElement = document.querySelector('#logradouro')
    var $statusElement = document.querySelector('.status h4');
    
    $cidadeElement.value = `${localidade}`;
    $estadoElement.value = `${uf}`;
    $bairroElement.value = `${bairro}`;  
    $logradouroElement.value = `${logradouro}`;
    

}



// $buttonElement.addEventListener('click', search);
$buttonElement.onclick = search;








