$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
   
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        }
    })
  });