$("#addButton").on("click", function(e){
  e.preventDefault();
  
  //variable para el input 
  var item = $("#inputButton").val();
  //.lista es clase
  $(".lista").append(`<div class= "pedidoContenedor"> </div>
                      <li class = "listaItems">
                      <h3 class = "shopItemText">${item} </h3>
                      <button class= "checkButton" type= "text"> Check </button>
                      <button class= "deleteButton" type= "text"> Delete </button>`);
 
});
//2do arg que si cumple con la caracteristicas elem especifico
//1er es el argumento padre aka el contenedor de los eventos
$(".lista").on("click",".checkButton",function(){
  //le agrega una clase
  $(this).parent().toggleClass('lista2'); 
});

$(".lista").on("click",".deleteButton",function(){
  $(this).parent().remove(); 
});