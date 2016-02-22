var reservasAPP = {
	generarGrilla:function(){},
	guardarReserva:function(){
		var nombre = $('#h09').val();
		var reservaConfirmada = $('#horario09').html('--> '+nombre);
		return false;
	},
	cancelarReserva:function(){
		var reservaCancelada = $('#horario09').html("<input type=\"text\" id=\"h09\">");
		return false;
	}

}

window.reservas = reservasAPP;