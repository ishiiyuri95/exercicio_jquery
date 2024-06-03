$(document).ready(function() {
    $('#tarefaForm').submit(function(event) {
        event.preventDefault();
        
        var nomeTarefa = $('#nomeTarefa').val().trim();
        if (nomeTarefa !== '') {
            var novaTarefa = $('<li></li>').text(nomeTarefa);
            $('#listaTarefas').append(novaTarefa);
            $('#nomeTarefa').val('').focus();
        }
    });

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});