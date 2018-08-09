$(document).ready(function() {
  $('#form').submit(function(e) {
      var name = $('#nome')
      var email = $('#email')
      var message = $('#mensagem')
    
      if(nome.val() == "" || email.val() == "" || mensagem.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/sensualmdintima@gmail.com',
          data: $('#form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
