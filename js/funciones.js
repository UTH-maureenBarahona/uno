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