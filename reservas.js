var reservasAPP = {
	nombre: function () {
		//por qué una función? 
		//http://stackoverflow.com/questions/35565979/js-why-this-object-property-wont-work-and-it-only-works-if-i-put-it-inside-one
        return $('#h09').val();
    },    
	generarGrilla: function(){
		//la llamo desde el html con jQuery(document).ready();
		for(var i=1; i<13; i++){
			var impresionGrilla = $('#grilla').append("<div class=\"row col-md-5\"><span style=\"titulo\">"+i+":00 </span><span id=\"horario"+i+"\"><input type=\"text\" id=\"hora\"></span>&nbsp;<button class=\"btn btn-primary btn-xs\" onclick=\"return reservasAPP.guardarReserva(i);\">Reservar</button>&nbsp;<button class=\"btn btn-danger btn-xs\" onclick=\"return reservasAPP.cancelarReserva(i);\">Cancelar</button></div><br><br>");
		};
	},
	guardarReserva:function(i){
		var reservaConfirmada = $('#horario'+i).html('--> '+this.nombre());
		console.log("whatever "+i);
		console.log(i);
		return false;
	},
	cancelarReserva:function(i){
		var reservaCancelada = $('#horario09').html("<input type=\"text\" id=\"h09\">");
		//porqué return false?
		return false;
	},	

}

window.reservas = reservasAPP;