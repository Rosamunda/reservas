var reservasAPP = {
	i:0,
	nombre: function () {
		//por qué una función? 
		//http://stackoverflow.com/questions/35565979/js-why-this-object-property-wont-work-and-it-only-works-if-i-put-it-inside-one
        return $('#h09').val();
    },    
	generarGrilla: function(){
		//la llamo desde el html con jQuery(document).ready();
		for(this.i=1; this.i<13; this.i++){
			var id = this.i;
			var impresionGrilla = $('#grilla').append("<div class=\"row col-md-5\"><span style=\"titulo\">"+id+":00 </span><span id=\"horario"+id+"\"><input type=\"text\" id=\"hora\"></span>&nbsp;<button class=\"btn btn-primary btn-xs\" onclick=\"return reservasAPP.guardarReserva(id);\">Reservar</button>&nbsp;<button class=\"btn btn-danger btn-xs\" onclick=\"return reservasAPP.cancelarReserva(id);\">Cancelar</button></div><br><br>");
		};
	},
	guardarReserva:function(id){
		var id = this.i;
		var reservaConfirmada = $('#horario'+id).html('--> '+this.nombre());
		console.log("whatever "+id);
		console.log(id);
		return false;
	},
	cancelarReserva:function(id){
		var id = this.i;
		var reservaCancelada = $('#horario09').html("<input type=\"text\" id=\"h09\">");
		//porqué return false?
		return false;
	},	

}

window.reservas = reservasAPP;