$(document).ready(function(){
			
			$("#telefone").mask("(00) 0000-00009")
			
			$("#telefone").blur(function(event){
				if ($(this).val().length == 15){
					$("#telefone").mask("(00) 00000-0009")
				}else{
					$("#telefone").mask("(00) 0000-00009")
				}
			})
		})