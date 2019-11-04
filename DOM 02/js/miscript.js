"use strict"

function decir(){
	var numero=document.getElementById("num1_eje01");
	var resultado=document.getElementById("resultado1");
	
	
	if (numero.value%2==0){
		resultado.innerHTML=(numero.value+" es par");
	}
	else{
		resultado.innerHTML=(numero.value+" es impar");
	}
}

function totdragonb(){
	var cantidad=document.getElementById("cant01").value;
	var precio=document.getElementById("total01").value;
	var totaldragon=document.getElementById("totaldragon");
	var operacion=(cantidad*precio);
	
	totaldragon.value= operacion;
}

function totalstar(){
	var cantidad=document.getElementById("cant02").value;
	var precio=document.getElementById("total02").value;
	var totalstw=document.getElementById("totalstw");
	var operacion=(cantidad*precio);
	
	totalstw.value=operacion;
}

function baseimponibile(){
	var totdragonb=Number (document.getElementById("totaldragon").value);
	var totalstar=Number (document.getElementById("totalstw").value);
	var base=document.getElementById("base");
	var operacion=(totdragonb+totalstar);
	
	base.value=operacion;
}

function iva(){
	var base=Number (document.getElementById("base").value);
	var resultado=document.getElementById("ivat");
	var operacion=(base*0.21);
	
	resultado.value=operacion;
}

function totcomplessivo(){
	var baseimp=Number (document.getElementById("base").value);
	var iva=Number (document.getElementById("ivat").value);
	var totcomple=document.getElementById("totcompl");
	var operacion=(baseimp+iva);
	
	totcomple.value=operacion;
}
//**** ex. 3 +++++++++++

function cambiatextocolor(quale){
	var resultado= document.getElementById("resultado3");
	
	resultado.style.color=quale;
}

function cambiafondocolor(quale){
	var resultado= document.getElementById("resultado3");
	
	resultado.style.backgroundColor=quale;
}

//****** ex. 4 +++++++++++

function selecionarck(valor){
	var listack=document.querySelectorAll('#eje04 input');
	var i=0;
	
	for (i=0; i<listack.length;i++){
		listack[i].checked=valor;
	}
}

//**** con jQuery *******

$(document).ready(
	function(){

//ex. 5 +++++++++++
		$("#formato").change(function(){
		var mivalor=($(this).val());
		//Traer el texto
		var mitexto= $("#resultado5").text();
		
		if (mivalor=="b"){
			
			//Opzione 1
			//Traer el texto
			//var mitexto= $("#resultado5").text();
			
			//Tratar el texto
			//var mitextotratado="<b>"+mitexto+"</b>";
			
			// cambiare il texto col nuevo
			//$("#resultado5").html(mitextotratado);
			
		
		
		/* //Opzione con prepend/append
		$("#resultado5").prepend("<b>").append("</b>");
		 */
		//Opzione con bold dopo aver traito el texto in una variabile anche prima del if
		$("#resultado5").html(mitexto.bold());
		
		}
		
		else if (mivalor=="i"){
			$("#resultado5").html(mitexto.italics());
		}
		
		else if (mivalor=="u"){
			$("#resultado5").html("<u>"+mitexto+"</u>");
		}
		
		else if (mivalor=="ma"){
			$("#resultado5").html(mitexto.toUpperCase());
		}
		
		else if (mivalor=="mi"){
			$("#resultado5").html(mitexto.toLowerCase());
		}
		
		
			
		});






//ex. 6 +++++++++++
		
		$("#eje06 .paleta").eq(0).children().click(
		function(){
			/* var texto=$("#resultado6");
			var caja=$(this);
			
			texto.css("color", caja.css("backgroundColor")); */
			
			//en una linea
			$("#resultado6").css("color",$(this).css("backgroundColor"));
			
		});
		
		$("#eje06 .paleta").eq(1).children().click(
		function(){
			/* var texto=$("#resultado6");
			var caja=$(this);
			
			texto.css("backgroundColor", caja.css("backgroundColor")); */
			
			//en una linea
			$("#resultado6").css("backgroundColor",$(this).css("backgroundColor"));
			
		});
		
	//**** ex. 7 +++++++++++con jQuery
		
		$("#eje07 button").eq(0).click(
		function(){
			$("#eje07 input").prop("checked", true);
		});
		
		$("#eje07 button").eq(1).click(
		function(){
			$("#eje07 input").prop("checked", false);
		});
		
		
		
	});











