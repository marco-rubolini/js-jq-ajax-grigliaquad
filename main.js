$(document).ready(function(){

$('.container .griglia').on('click', '.quadrato', function(){
    var prova = $(this);
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success':function(data) {
            console.log(data);
            var numero = data.response;
            console.log('Numero casuale ricevuto dalle API: ' + numero);
            console.log(numero);
            if (prova.hasClass('yellow') || prova.hasClass('green')) {
                alert('Quadrato già cliccato')
            } else {
                $(prova).append('<p>' + numero + '</p>');
                coloraQuadrato(numero, prova);
            }
            // $(prova).append('<p>' + numero + '</p>');
            // coloraQuadrato(numero, prova);
        },
        'error': function() {
            alert('si è verificato un errore!')
        }
    })
})

function coloraQuadrato(number, quadrato) {
    if (number <= 5) {
        $(quadrato).addClass('yellow');
    } else {
        $(quadrato).addClass('green');
    }
}

});
