var reservasAPP = {
	nombre: function () {
		//por qué una función? 
		//http://stackoverflow.com/questions/35565979/js-why-this-object-property-wont-work-and-it-only-works-if-i-put-it-inside-one
        return $('#h09').val();
    },

	generarGrilla:function(){},

	guardarReserva:function(){
		var nombre = $('#h09').val(); //http://api.jquery.com/val/
		var reservaConfirmada = $('#horario09').html('--> '+this.nombre());
		return false;
	},
	cancelarReserva:function(){
		var reservaCancelada = $('#horario09').html("<input type=\"text\" id=\"h09\">");
		return false;
	}

}

window.reservas = reservasAPP;