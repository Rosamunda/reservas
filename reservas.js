var reservasAPP = {   
	generarGrilla: function(){
		//la llamo desde el html con jQuery(document).ready();
		for(var i=1; i<13; i++){
			//dentro del método al que llamamos, tenemos que meter la var i como literal, por eso hacemos (" +i+ ") en lugar de (i), porque va a imprimirnos i en lugar del valor deseado.
			//stackoverflow.com/questions/35654523/js-why-is-the-var-not-declared-when-it-is-declared-inside-a-method-of-an-object#35654703
			var impresionGrilla = $('#grilla').append("<div class=\"row col-md-5\"><span style=\"titulo\">"+i+":00 </span><span id=\"horario"+i+"\"><input type=\"text\" id=\"hora"+i+"\"></span>&nbsp;<button class=\"btn btn-primary btn-xs\" onclick=\"return reservasAPP.guardarReserva(" + i + ");\">Reservar</button>&nbsp;<button class=\"btn btn-danger btn-xs\" onclick=\"return reservasAPP.cancelarReserva(" +i+ ");\">Cancelar</button></div><br><br>");
		};
	},
	nombre: function (i) {
		//por qué una función? 
		//http://stackoverflow.com/questions/35565979/js-why-this-object-property-wont-work-and-it-only-works-if-i-put-it-inside-one
        return $('#hora'+i).val();

    },	
	guardarReserva:function(i){
		var reservaConfirmada = $('#horario'+i).html('--> '+this.nombre(i));
		return false;
	},
	cancelarReserva:function(i){
		var reservaCancelada = $('#horario'+i).html("<input type=\"text\" id=\"horario"+i+"\">");
		//porqué return false?
		return false;
	},	

}

window.reservas = reservasAPP;