function mostrarImagen(){
    $(document).ready(function() {  
        $('#boton1').click(function(){
            $('#imagen').replaceWith('<img id="imagen" src="../img/1.jpg" alt="imagen cambiada" >');
         });
        $('#boton2').click(function(){
           $('#imagen').replaceWith('<img id="imagen" src="../img/2.jpg" alt="imagen cambiada" >');
        });
        $('#boton3').click(function(){
            $('#imagen').replaceWith('<img id="imagen" src="../img/3.jpg" alt="imagen cambiada" >');
         });
         $('#boton4').click(function(){
            $('#imagen').replaceWith('<img id="imagen" src="../img/4.jpg" alt="imagen cambiada" >');
         });

   });

}

function cambioColores(){
    $(document).ready(function() {  
        $('#Pamarillo').mouseenter (function(){
            $('#colores').css("background-color","yellow");
         });  
         $('#Pverde').mouseenter (function(){
            $('#colores').css("background-color","green");
         });      
         $('#Projo').mouseenter (function(){
            $('#colores').css("background-color","red");
         });     
         $('#Pnegro').mouseenter (function(){
            $('#colores').css("background-color","black");
         });
         $('#Pblanco').mouseenter (function(){
            $('#colores').css("background-color","white");
         });

   });

}

function mostrarInfoEstudiante(){
    $(document).ready(function() {  
        $('#datosEstudiante').dblclick (function(){
            $('#infoEstudiante').text('Texto de sustitución');
         }); 

   });

}